import React, { useState, useEffect } from "react";
import axios from "axios";
import NewFeed from "./NewFeed";
import "./Feeding.css";

export default function Feeding({ feeds, setFeeds, getFeed }) {
  async function handleDeleteButton(id) {
    const check = confirm("Are you sure you wish to proceed?");
    if (check) {
      const API = `http://localhost:8080/feeding/${id}`;
      await axios.delete(API);

      useEffect(() => {
        getFeed();
      }, []);
    }
  }
  const [feedToEdit, setFeedToEdit] = useState({});

  return (
    <div>
      {feeds.map((feeds) => {
        return (
          <div key={feeds._id}>
            <h3>{feeds.startTime}</h3>
            <h3>{feeds.endTime}</h3>
            <button
              onClick={() => {
                handleDeleteButton(feeds._id);
              }}
            >
              Delete Feed
            </button>
            <button
              onClick={() => {
                handleEditButton(feeds._id);
              }}
            >
              Edit Feed
            </button>
          </div>
        );
      })}
      <NewFeed feeds={feeds} setFeeds={setFeeds}></NewFeed>
    </div>
  );
}

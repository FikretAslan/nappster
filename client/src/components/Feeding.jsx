import React, { useState } from "react";
import axios from "axios";
import NewFeed from "./NewFeed";

export default function Feeding({ feeds, setFeeds, getFeed }) {
  async function handleDeleteButton(id) {
    const check = confirm("Are you sure you wish to proceed?");
    if (check) {
      const API = `http://localhost:8080/feeding/${id}`;
      await axios.delete(API);
      // getFeed();
    }
  }

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
              X
            </button>
          </div>
        );
      })}
      <NewFeed feeds={feeds} setFeeds={setFeeds}></NewFeed>
    </div>
  );
}

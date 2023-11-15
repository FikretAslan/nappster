import React, { useState } from "react";
import axios from "axios";
import NewFeed from "./NewFeed";

export default function Feeding({ feeds, setFeeds }) {
  return (
    <div>
      {feeds.map((feeds) => {
        return (
          <div key={feeds._id}>
            <h3>{feeds.startTime}</h3>
            <h3>{feeds.endTime}</h3>
          </div>
        );
      })}
      <NewFeed feeds={feeds} setFeeds={setFeeds}></NewFeed>
    </div>
  );
}

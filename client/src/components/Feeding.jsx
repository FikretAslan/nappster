import React, { useState } from "react";
import axios from "axios";
import NewFeed from "./NewFeed";

export default function Feeding({ feeds, setFeeds }) {
  return (
    <>
      <NewFeed feeds={feeds} setFeeds={setFeeds}></NewFeed>
    </>
  );
}

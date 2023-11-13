import { useState } from "react";
import axios from "axios";

export default function Feeding({ feeds, setFeeds }) {
  const [formData, setFormData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const API = "http://localhost:8080/feeding";
    const axiosRes = await axios.post(API, formData);
    setFeeds([...feeds, axiosRes.data]);
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.type]: event.target.value });
    // if event.target.feed1
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="feed1">
        Breastfed
        <input
          name="feed1"
          type="checkbox"
          value="Breastfed"
          onChange={handleChange}
          id="feed1"
        />
      </label>
      <label htmlFor="feed2">
        Bottle
        <input
          name="feed2"
          type="checkbox"
          value="Bottle"
          onChange={handleChange}
          id="feed2"
        />
      </label>
      {/* conditional render feed1 && <input left or right>*/}
      <input
        name="start"
        type="datetime-local"
        placeholder="Start of feed"
        onChange={handleChange}
      />
      <input
        name="feedtype"
        type="time"
        placeholder="End of feed"
        onChange={handleChange}
      />
      <input type="submit" value="New feed" />
    </form>
  );
}

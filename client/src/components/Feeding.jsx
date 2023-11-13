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
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="feedtype"
        type="text"
        placeholder="Breastfeed or bottle?"
        onChange={handleChange}
      />
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

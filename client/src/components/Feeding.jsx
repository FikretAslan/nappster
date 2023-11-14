import React, { useState } from "react";
import axios from "axios";

export default function Feeding({ feeds, setFeeds }) {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});
  async function handleSubmit(event) {
    event.preventDefault();

    const API = "http://localhost:8080/feeding";
    const axiosRes = await axios.post(API, formData);
    setFeeds([...feeds, axiosRes.data]);
  }

  function handleChange(e) {
    const { name, type } = e.target;
    let newForm = {
      ...formData,
      [name]: e.target[type === "checkbox" ? "checked" : "value"],
    };

    setFormData(newForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="feed1">
        Breastfed
        <input type="checkbox" onChange={handleChange} name="status" />
        {formData.status && (
          // if checkbox
          <div>
            <label>
              <input type="checkbox" />
              Left
              <input type="checkbox" />
              Right
            </label>
          </div>
        )}
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

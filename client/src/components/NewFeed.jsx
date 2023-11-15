import React, { useState } from "react";
import axios from "axios";

export default function NewFeed({ feeds, setFeeds, feed, setFeed }) {
  const [formData, setFormData] = useState(
    feed ?? {
      name: "",
      todayDate: {},
      startTime: {},
      endTime: {},
    }
  );

  const [data, setData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const API = "http://localhost:8080/feeding";
    const res = await axios.post(API, formData);
    console.log(feeds);
    setFeeds([...feeds, res.data]);
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
    <>
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
          name="todayDate"
          type="date"
          placeholder="Day of feed"
          onChange={handleChange}
        />
        <input
          name="startTime"
          type="time"
          placeholder="Start of feed"
          onChange={handleChange}
        />
        <input
          name="endTime"
          type="time"
          placeholder="End of feed"
          onChange={handleChange}
        />
        <input type="submit" value="New feed" />
      </form>
    </>
  );
}
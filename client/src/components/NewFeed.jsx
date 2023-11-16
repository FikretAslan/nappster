import React, { useState } from "react";
import axios from "axios";
import EditFeed from "./EditFeed";

export default function NewFeed({ feeds, setFeeds, feed, setFeed }) {
  const [formData, setFormData] = useState(
    feed ?? {
      name: "",
      startTime: "",
      endTime: "",
      status: false,
    }
  );

  function handleChange(e) {
    const { name, type } = e.target;
    let newForm = {
      ...formData,
      [name]: e.target[type === "checkbox" ? "checked" : "value"],
    };

    setFormData({ ...FormData, [e.target.name]: e.target.value });

    setFormData(newForm);
  }

  async function addFeed(e) {
    e.preventDefault();
    const API = "http://localhost:8080/feeding";
    const res = await axios.post(API, formData);
    setFeeds([...feeds, res.data]);
  }

  async function addFeed(e) {
    e.preventDefault();
    const API = "https://nappster.onrender.com/feeding";
    const res = await axios.post(API, formData);
    setFeeds([...feeds, res.data]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const API = "https://nappster.onrender.com/feeding";
    const res = await axios.post(API, formData);
    console.log(feeds);
    setFeeds([...feeds, res.data]);
  }

  async function updateFeed(e) {
    e.preventDefault();
    const API = `http://localhost:8080/feeding/${feed._id}`;

    function handleChange(e) {
      const { name, type } = e.target;
      let newForm = {
        ...formData,
        [name]: e.target[type === "checkbox" ? "checked" : "value"],
      };

      setFormData(newForm);
    }

    async function updateFeed(event) {
      event.preventDefault();
      const API = `https://nappster.onrender.com/feeding/${feeds._id}`;

      await axios.put(API, formData);
      setFeed(formData);
    }

    return (
      <>
        <form onSubmit={feed?.name ? updateFeed : addFeed}>
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

          <input
            name="startTime"
            type="datetime-local"
            placeholder="Start of feed"
            onChange={handleChange}
          />
          <input
            name="endTime"
            type="datetime-local"
            placeholder="End of feed"
            onChange={handleChange}
          />

          <input type="submit" value="New feed" />
          <EditFeed />
          {/* <button>{feed?.name ? "Update Feed Info" : "Edit feed"}</button> */}
        </form>
      </>
    );
  }
}

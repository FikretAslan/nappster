import React, { useState } from "react";
import axios from "axios";
import NewFeed from "./NewFeed";

export default function Feeding({ feeds, setFeeds }) {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const API = "http://localhost:8080/feeding";
  //   const res = await axios.post(API, formData);
  //   setFeeds([...feeds, axiosRes.data]);
  // }

  // function handleChange(e) {
  //   const { name, type } = e.target;
  //   let newForm = {
  //     ...formData,
  //     [name]: e.target[type === "checkbox" ? "checked" : "value"],
  //   };

  //   setFormData(newForm);
  // }

  return (
    <>
      <NewFeed feeds={feeds} setFeeds={setFeeds}></NewFeed>
    </>
  );
}

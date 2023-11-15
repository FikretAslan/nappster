import React, { useState } from "react";

export default function EditFeed({
  _id,
  startTime,
  endTime,
  handleDeleteButton,
}) {
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable(!isEditable);
  }
  function handleChange(e) {
    console.log(e.currentTarget.textContext);
  }

  async function handleDeleteButton(_id) {
    const check = confirm("Are you sure you wish to proceed?");
    if (check) {
      const API = `http://localhost:8080/feeding/${id}`;
      const axios = await axios.delete(API);
      getFeed();
    }
  }

  return (
    <div key={_id}>
      <h3
        contentEditable={isEditable}
        onInput={(e) => {
          handleChange(e);
        }}
      >
        {startTime}
      </h3>
      <h3 contentEditable={isEditable}>{startTime}</h3>
      <h3 contentEditable={isEditable}>{endTime}</h3>
      <div>
        <button onClick={handleEdit}>Edit Feed</button>
        <button
          onClick={() => {
            handleDeleteButton(_id);
          }}
        ></button>
      </div>
    </div>
  );
}

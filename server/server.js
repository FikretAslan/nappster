const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Feeds = require("./models/Feed.js");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;
mongoose.connect(process.env.MONGO_URL);

app.get("/feeding", async (req, res) => {
  const feeds = await Feeds.find(req.query);

  res.json(feeds);
  console.log(feeds);
});

app.post("/feeding", async (req, res) => {
  const newFeed = await Feeds.create(req.body);
  res.json(newFeed);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));

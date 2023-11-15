const mongoose = require("mongoose");

const { Schema } = mongoose;

const feedSchema = new Schema({
  name: String,
  todayDate: Number,
  startTime: Number,
  endTime: Number,
});

const Feeds = mongoose.model("Feed", feedSchema);

module.exports = Feeds;

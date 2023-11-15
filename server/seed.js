const mongoose = require("mongoose");
const Feed = require("./models/Feed");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

async function seed() {
  await Feed.create([
    {
      name: "Breastfed",
      todayDate: 15 - 11 - 23,
      startTime: 0 - 0 - 0,
      endTime: 1 - 0 - 0,
    },

    {
      name: "Bottlefed",
      todayDate: 16 - 11 - 23,
      startTime: 0 - 0 - 0,
      endTime: 2 - 0 - 0,
    },
  ]);

  console.log("feed created");
  mongoose.disconnect();
}
seed();

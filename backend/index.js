const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth")

const DB_URL = process.env.MONGO_URL
mongoose.connect(DB_URL)
   .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error("Error connecting to db", err);
  });
app.use(cors()); 
app.use(express.json());

app.use("/api/auth",authRoute);

app.listen(PORT, () => {
  console.log(`app listetning to port ${PORT}`);
});
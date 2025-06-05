const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth");
const algovoiceRoutes = require("./routes/algovoice");

const DB_URL = process.env.MONGO_URL;
const multer = require('multer');
mongoose.connect(DB_URL)
   .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error("Error connecting to db", err);
  });
app.use(cors()); 
app.use(express.json());


const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `voice-${Date.now()}.webm`);
  },
});

const upload = multer({ storage });

app.post('/upload-audio', upload.single('audio'), (req, res) => {
  const fileUrl = `/uploads/${req.file.filename}`;
  console.log(fileUrl);
  res.json({ url: fileUrl });
}); 


app.use('/api/algovoice',algovoiceRoutes);
app.use("/api/auth",authRoute);
app.listen(process.env.PORT, () => {
  console.log(`app listetning to port ${process.env.PORT}`);
});
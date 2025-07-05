const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth");
const algovoiceRoutes = require("./routes/algovoice");

const DB_URL = process.env.MONGO_URL;

const multer = require('multer');
const { storage } = require('./cloudinary'); 
const upload = multer({ storage });

mongoose.connect(DB_URL)
   .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error("Error connecting to db", err);
  });

app.use(cors({
  origin: 'https://algo-voice.vercel.app/',
  methods: ['POST', 'GET', 'PUT','DELETE','PATCH'],     
  credentials: true                        
}));
app.use(express.json());


// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `voice-${Date.now()}.webm`);
//   },
// });


app.post('/upload-audio', upload.single('audio'), (req, res) => {
   try {
    return res.json({ url: req.file.path }); // return uploaded URL
  } catch (error) {
    console.error('Upload error', error);
    return res.status(500).json({ error: 'Upload failed' });
  }
}); 


app.use('/api/algovoice',algovoiceRoutes);
app.use("/api/auth",authRoute);
app.listen(process.env.PORT, () => {
  console.log(`app listetning to port ${process.env.PORT}`);
});
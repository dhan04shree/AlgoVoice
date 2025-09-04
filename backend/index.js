import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import algovoiceRoutes from "./routes/algovoice.js";
import multer from "multer";
import { storage } from "./cloudinary.js";
const upload = multer({ storage });
import dotenv from "dotenv";
dotenv.config();
const DB_URL = process.env.MONGO_URL;
mongoose.connect(DB_URL)
   .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error("Error connecting to db", err);
  });

app.use(cors());
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
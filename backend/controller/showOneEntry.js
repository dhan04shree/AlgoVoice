import {Entry} from "../model/entry.js";
// const { transcribeFromCloudinaryUrl } = require('../services/transcribeAudio');
export const showOneEntry = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ error: 'Entry not found' });
    
    // if (!entry.transcription && entry.voiceUrl) {
    //   const transcription = await transcribeFromCloudinaryUrl(entry.voiceUrl);
    //   entry.transcription = transcription;

    //   // Optional: Save transcription to DB
    //   await entry.save();
    // }
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}
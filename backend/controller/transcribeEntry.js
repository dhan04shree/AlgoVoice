import {Entry} from "../model/entry.js";
import { transcribeAudio } from "../services/transcribeAudio.js";
import { analysisAudio } from "../services/analysisAudio.js";


export const transcribeEntry = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry || !entry.voiceUrl)
      return res.status(404).json({ error: 'Entry or voice not found' });

    const text = await transcribeAudio(entry.voiceUrl);
    entry.transcription = text;
    res.json(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const analyzeAudio = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry || !entry.voiceUrl)
      return res.status(404).json({ error: 'Entry or voice not found' });

    const analysis = await analysisAudio(entry.voiceUrl);
     entry.transcription = analysis;
    res.json(analysis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

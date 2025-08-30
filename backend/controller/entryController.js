import {Entry} from "../model/entry.js";

export const entryController = async (req, res) => {
  try {
    const { question,queUrl,tags, voiceUrl } = req.body;
    const newEntry = new Entry({
      question,
      queUrl,
      // solutionText,
      tags,
      voiceUrl,
      owner:req.user.id
    });

    await newEntry.save();
    res.status(201).json({ saved: newEntry,message: 'Entry saved', id: newEntry._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving entry' });
  }
}
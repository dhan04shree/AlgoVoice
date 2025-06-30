const Entry = require("../model/entry");
const entryController = async (req, res) => {
  try {
    const { question,queUrl,tags, voiceUrl } = req.body;

    const newEntry = new Entry({
      question,
      queUrl,
      // solutionText,
      tags,
      voiceUrl
    });

    await newEntry.save();
    res.status(201).json({ message: 'Entry saved', id: newEntry._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving entry' });
  }
}

module.exports.showEntry = async (req,res)=>{
    let {id} = req.params;  

    const entry = await Entry.findById(id).populate("owner");
    if(!entry){
        req.status(400).json({message:"Entry you requested for does not exist!"});
    }
}
module.exports = entryController;
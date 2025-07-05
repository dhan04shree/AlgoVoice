const Entry = require("../model/entry");

module.exports.showController = async (req,res)=>{
    try {
    const entry = await Entry.find({ owner: req.user.id });

    if (!entry || entry.length === 0) {
      return res.status(404).json({ message: "No entries found for this user" });
    }

    return res.json(entry);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
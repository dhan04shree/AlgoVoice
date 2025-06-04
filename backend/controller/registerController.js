const User = require("../model/user")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            password: hashedPassword,
        });

        const savedUser = await user.save();
            res.json({
            message: "User registered successfully",
            userId: savedUser._id,
        });
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = registerController;
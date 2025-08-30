import {User} from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const registerController = async (req, res) => {
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

        await user.save();

        const token = jwt.sign(
            { id: user._id, username: user.username },process.env.KEY,{ expiresIn: '1h' }
        );
        res.json({ token });
    
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
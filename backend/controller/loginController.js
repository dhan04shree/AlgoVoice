const User = require("../model/user")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController =  async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("Invalid username or password.");

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(400).send("Invalid username or password.");

  const token = jwt.sign({ userId: user.id }, process.env.KEY);

  res.send({ token });
}
module.exports = loginController;
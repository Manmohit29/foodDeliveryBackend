const user = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "ManmohitChaudhary";
const createUser = async (req, res) => {
  try {
    const { name, password, email, location } = req.body;
    if (!name || !password || !email || !location) {
      return res.json({ error: "Fields are empty", signIn: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.create({
      name: name,
      password: hashedPassword,
      email: email,
      location: location,
    });

    console.log("New User added");
    return res.json({ signIn: true });
  } catch (error) {
    console.log(error);
    return res.json({ success: false });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.json({ error: "Email cannot be empty", login: false });
  }
  if (!password) {
    return res.json({ error: "Password cannot be empty", login: false });
  }

  try {
    const userData = await user.findOne({ email });
    if (!userData) {
      return res.json({ error: "Invalid email", login: false });
    }
    const comparedPassword = await bcrypt.compare(password, userData.password);
    if (!comparedPassword) {
      return res.json({ error: "Wrong password", login: false });
    }
    const data = {
      user: {
        id: userData.id,
      },
    };
    const authToken = jwt.sign(data, secretKey);
    console.log("User logged in");
    return res.json({ error: "no error", login: true, token: authToken });
  } catch (error) {
    return res.json({ login: false });
  }
};

module.exports = { createUser, loginUser };

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { publicFolder } = require("./utils/utils");
const connectDB = require("./server-files/db");
const User = require("./server-files/User");

dotenv.config();

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

// DB connection
connectDB();

// Midlewares
app.use(express.static(publicFolder()));
app.use(express.json());
app.use(cors());

// API

app.get("/fingerprint", async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      users,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.post("/fingerprint", async (req, res) => {
  try {
    const { name, fingerprint } = req.body;

    const newUser = new User({
      name,
      fingerprint,
    });

    const savedUser = await newUser.save();

    res.json({ savedUser });
  } catch (err) {
    res.status(500).json({ err });
  }
});

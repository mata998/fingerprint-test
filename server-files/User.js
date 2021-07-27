const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  fingerprint: {
    type: Object,
  },
});

module.exports = mongoose.model("User", UserSchema);

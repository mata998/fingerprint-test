const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.DB_LINK, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Db connected!!!!!");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

module.exports = connectDB;

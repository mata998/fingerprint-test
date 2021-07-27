function publicFolder() {
  if (process.env.ENV == "DEV") return "react-test/build";
  if (process.env.ENV == "PROD") return "build";
  return "public folder error, file: utils/utils.js";
}

module.exports = { publicFolder };

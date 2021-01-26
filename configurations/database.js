const mongoose = require("mongoose");
require("dotenv/config");

let connection;
try {
  connection = mongoose.createConnection(
    process.env.DB_STRING,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    () => console.log("db connected")
  );
} catch (err) {
  console.log("errors", err);
}

module.exports = connection;

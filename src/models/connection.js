const mongoose = require("mongoose");
const URI =
  "";

mongoose.set("useFindAndModify", false);
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("db connected!");
};

module.exports = connectDB;

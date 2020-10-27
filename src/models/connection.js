const mongoose = require("mongoose");
const URI =
  "mongodb+srv://finitdev2:Finit7331!@firstcluster.fhzmk.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set("useFindAndModify", false);
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("db connected!");
};

module.exports = connectDB;

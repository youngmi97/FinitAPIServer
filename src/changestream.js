import mongoose from "mongoose";

function monitorUserChange() {
  const client = mongoose.connection.client;
  const db = client.db("test");
  const collection = db.collection("users");
  const changeStream = collection.watch();
  changeStream.on("change", (next) => {
    console.log("Change happened");
  });
}

// function closeChangeStream(timeInMs = 60000, changeStream) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Closing the change stream");
//       changeStream.close();
//       resolve();
//     }, timeInMs);
//   });
// }

module.exports = monitorUserChange;

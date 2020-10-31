import mongoose from "mongoose";

function monitorUserChange() {
  const client = mongoose.connection.client;
  const db = client.db("test");
  const collection = db.collection("users");
  const changeStream = collection.watch();
  changeStream.on("change", (changeEvent) => {
    console.log("Change happened");
    console.log("changeEvent", changeEvent);
    console.log("operationType", changeEvent.operationType);
  });
}

module.exports = monitorUserChange;

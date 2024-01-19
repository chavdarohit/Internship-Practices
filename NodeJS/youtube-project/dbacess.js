const { MongoClient } = require("mongodb");

let uri =
  "mongodb+srv://youtube:AuNggUOSv0HPSF1S@node.kjjpehd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db("youtube-project");
const collection = database.collection("users");

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

async function signupInsert(obj) {
  try {
    const ack = await collection.insertOne(obj);
    console.log("Data inserted ", ack);
  } finally {
    await client.close();
    console.log("Connection close");
  }
}

// addData().catch((err) => console.log("error inserting the data"));

module.exports = {
  connectToDatabase,
  signupInsert,
};

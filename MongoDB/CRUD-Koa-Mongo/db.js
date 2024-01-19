const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017/simplecrud");

client.connect();
console.log("Connected to db");

const database = client.db("simplecrud");
const collection = database.collection("users");

async function getData() {
  try {
    const data = await collection
      .find({}, { projection: { name: 1, _id: 0 } })
      .toArray();
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    // closeConnection();
  }
}

async function insertData(name) {
  const obj = {
    name: name,
  };
  try {
    const data = await collection.insertOne(obj);
    console.log("data inserted ", data);
  } catch (err) {
    console.log(err);
  } finally {
    // closeConnection();
  }
}

async function removeData(userName) {
  try {
    const ack = await collection.deleteOne({ name: userName });
    // console.log(userName);
    console.log(ack);
  } catch (err) {
    console.log(err);
  } finally {
    // closeConnection();
  }
}

async function closeConnection() {
  await client.close();
}

async function updateData(oldName, newName) {
  try {
    const ack = await collection.updateOne(
      { name: oldName },
      { $set: { name: newName } }
      // { upsert: true }
    );
    console.log(ack);
  } catch (err) {
    console.log(err);
  } finally {
    // closeConnection();
  }
}

module.exports = {
  insertData,
  getData,
  removeData,
  updateData,
};

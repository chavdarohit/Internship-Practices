const mongoose = require("mongoose");
const schema = mongoose.Schema;
const uri = "mongodb://localhost:27017/studentsdb";
mongoose.connect(uri);

const myschema = new schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

const model = mongoose.model("model", myschema, "students");

const addData = function (name, age, gender) {
  const newData = new model({
    name: name,
    age: age,
    gender,
    gender,
  });
  // console.log("previewing data",newData);
  newData
    .save()
    .then((result) => {
      console.log("Data inserted ", newData);
      mongoose.connection.close();
    })
    .catch((error) => console.log("Error saving data", newData));
};

const readData = function () {
  model
    .find({}, { name: 1, age: 1, _id: 0, gender: 1 })
    .then((result) => {
      console.log("Data fetched", result);
      mongoose.connection.close();
      return result; // Return the fetched data
    })
    .catch((error) => console.log("Error sreading data", error));
};

const updateData = async function (sname, gender, age) {
  let current = {};

  model.find({}, { name: 1, age: 1, _id: 0, gender: 1 }).then((result) => {
    // console.log("new data fetched", result);
    // console.log("sname ",sname);

    current = result.find((ele) => ele.name === sname);

    if (!current) {
      console.log("no data found");
      mongoose.connection.close();
      return;
    }

    if (current) {
      model
        .updateOne({ name: sname }, { $set: { gender: gender, age: age } })
        .then((result) => {
          console.log("data updated sucesfully");
          mongoose.connection.close();
        })
        .catch((error) => console.log("Data not updated"));
    }
  });
};
const deleteData = function (param) {
  model
    .deleteOne({ name: param })
    .then((result) => {
      console.log("Data removed succesfully", param);
      mongoose.connection.close();
    })
    .catch((error) => console.log("Error removing data", param));
};

module.exports = {
  addData,
  updateData,
  readData,
  deleteData,
};

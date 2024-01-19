let db = require("./database.js");
let yargs = require("yargs");

yargs.command({
  command: "add",
  builder: {
    name: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "age",
      demandOption: true,
      type: "Number",
    },
    gender: {
      describe: "gender",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log(" adding the doc");
    db.addData(argv.name, argv.age, argv.gender);
  },
});

yargs.command({
  command: "readall",
  handler: function () {
    db.readData();
  },
});

yargs.command({
  command: "delete",
  builder: {
    name: {
      type: "string",
      describe: "Name is required",
      demandOption: true,
    },
  },
  handler: function (argv) {
    db.deleteData(argv.name);
  },
});

yargs.command({
  command: "update",
  builder: {
    name: {
      demandOption:true,
      type:"string",
      description:"Name is required"
    },
    age: {
      describe: "age",
      demandOption: false,
      type: "Number",
    },
    gender: {
      describe: "gender",
      demandOption: false,
      type: "string",
    },
  },
  handler:function(argv)
  {
    db.updateData(argv.name,argv.gender,argv.age);
  }
});

yargs.parse();

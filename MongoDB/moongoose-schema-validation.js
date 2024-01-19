db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "addr", "hobby", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "the name must required",
        },
        addr: {
          bsonType: "object",
          properties: {
            pin: {
              bsonType: "Number",
              description: "Pinode is required",
            },
            city: {
              bsonType: "string",
              description: "City is required",
            },
          },
        },
        hobby: {
          bsonType: "Array",
          description: "the hobbyis required",
        },
        age: {
          bsonType: "Number",
          minimum: 18,
          maximum: 25,
          description: "Age is required",
        },
      },
    },
  },
  validationAction: "error",
});

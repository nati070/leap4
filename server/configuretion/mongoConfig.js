const mongoose = require("mongoose");
const addressMongoDB = process.env.ADRESS_MONGODB;

mongoose.connect(addressMongoDB, (err, db) => {
  if (err) {
    throw err;
  }
  console.log("DataBase created");

});
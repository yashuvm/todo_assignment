//import packages
const mongoose = require("mongoose");
const commonFuntion=require("../utils/commonFunction/commonFunction");

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;

//connect with mongo db
connection.once("open", (err, result) => {
  if (!err) {
    console.log("MONGO DB IS CONNECTED");
    commonFuntion.addAuthuser()
  } else console.log(err);
});

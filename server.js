//import dot env
require('dotenv').config()
const http = require("http");
//import db file 
const db = require("./src/db/db");
//import index js 
const app = require("./index");
const server = http.createServer(app());
server.listen(process.env.PORT, (err, result) => {
  if (err) console.log(err);
  else console.log(`The server is running on port ${process.env.PORt}`);
});
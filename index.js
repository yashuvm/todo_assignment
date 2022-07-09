//import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

/**
 * import routes
 */
const authRoutes = require("./src/routes/authRoutes");
const todoRoutes = require("./src/routes/todoRoutes");

module.exports = (app) => {
  var app = express();
  ///adding middleware
  app.use(bodyParser.json({ type: "application/*", limit: "30mb" }));
  app.use(morgan("dev"));
  app.use(cors());
  //import all routes for path
  app.use("/api/v1", authRoutes);
  app.use("/api/v1/todos", todoRoutes);
  return app;
};

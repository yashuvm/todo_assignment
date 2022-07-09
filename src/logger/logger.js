const winston = require("winston");
const path = require("path");
const pathToStore = path.join(__dirname);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  defaultMeta: { DateTime: new Date() },
  transports: [new winston.transports.File({ filename: path.join(__dirname, "error.log"), level: "error" })],
});

module.exports = logger;

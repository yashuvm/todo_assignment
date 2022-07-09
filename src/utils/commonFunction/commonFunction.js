const logger = require("../../logger/logger");
const authTokens = require("../../models/authTokenSchema");
const bcrypt = require("bcryptjs");

async function addAuthuser() {
  try {
    const checkUserExist = await authTokens.findOne({});
    if (!checkUserExist) {
      const sale = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(process.env.DEFAULT_PASS, 10);
      const tmp = { email: process.env.DEFAULT_USER_EMAIL, password: hash };
      const saveDb = await authTokens.create(tmp);
    }
    return true;
  } catch (err) {
    errorLogs(err);
    return false;
  }
}

function errorLogs(err) {
  console.log(err);
  logger.error(err);
  return false;
}

module.exports = {
  addAuthuser,
  errorLogs,
};

const jwt = require("jsonwebtoken");
const commonFunction = require("../commonFunction/commonFunction");
const authToken = require("../../models/authTokenSchema");
const msgRes = require("../messages");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const bearerCheck = req.header("Authorization").split(" ")[0];
    if (bearerCheck != "Bearer") {
      throw new Error("Token is not valid");
    }
    const decode = jwt.verify(token, process.env.SECRET);
    const user = await authToken.findOne({ _id: decode._id, "tokens.token": token });
    if (!user) {
      return res.status(401).send({ code: "-1", msg: msgRes.AUTHENTICATION, data: "" });
    }
    req.user = user;
    next();
  } catch (err) {
    commonFunction.errorLogs(err);
    return res.status(401).send({ code: "-1", msg: msgRes.AUTHENTICATION, data: "" });
  }
};

module.exports = auth;

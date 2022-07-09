const commonFunction = require("../utils/commonFunction/commonFunction");
const msgRes = require("../utils/messages");
const authToken = require("../models/authTokenSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


exports.getToken = async (req, res) => {
  try {
    const requestObj = req.body;
    //check email
    const checkEmailExist = await authToken.findOne({ email: requestObj["email"].toLowerCase() });
    if (!checkEmailExist) return res.status(200).send({ code: "-1", msg: msgRes.WRNG_EMAIL, data: { requestObj, responseObj: null } });
    //check pass
    const pass = bcrypt.compareSync(requestObj["password"], checkEmailExist["password"]);
    if (!pass) return res.status(200).send({ code: "-1", msg: msgRes.WRNG_PASS, data: { requestObj, responseObj: null } });
    //
    const user = checkEmailExist;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET, { expiresIn: "72h" });
    user.tokens = user.tokens.concat({ token });
    const sendToken = await user.save();
    return res.status(200).send({ code: "1", msg: msgRes.SUCCESS_TOKEN, data: { requestObj, responseObj: {token:token} } });
  } catch (err) {
    commonFunction.errorLogs(err);
    return res.status(500).send({ code: "500", msg: msgRes.SERVER_ERROR, data: err });
  }
};

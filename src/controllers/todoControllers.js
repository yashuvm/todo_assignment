const commonFunction = require("../utils/commonFunction/commonFunction");
const msgRes = require("../utils/messages");
const todos = require("../models/todoSchema");
const ObjectId = require("mongoose").Types.ObjectId;

exports.create = async (req, res) => {
  try {
    const requestObj = req.body;
    const tmp = {
      studentName: requestObj["studentName"],
      studentAddress: requestObj["studentAddress"],
      studentMobile: `91${requestObj["studentMobile"]}`,
    };
    const saveDb = await todos.create(tmp);
    return res.status(201).send({ code: "1", msg: msgRes.SUCCESS_CREATE, data: { requestObj, responseObj: saveDb } });
  } catch (err) {
    commonFunction.errorLogs(err);
    return res.status(500).send({ code: "500", msg: msgRes.SERVER_ERROR, data: err });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const requestObj = null;
    const getData = await todos.find({}).sort({ _id: -1 });
    return res.status(200).send({ code: "1", msg: msgRes.GET_TODOS_LIST, data: { requestObj, responseObj: getData } });
  } catch (err) {
    commonFunction.errorLogs(err);
    return res.status(500).send({ code: "500", msg: msgRes.SERVER_ERROR, data: err });
  }
};

exports.update = async (req, res) => {
  try {
    const requestObj = req.body;
    const checkId = ObjectId.isValid(req.params.studentId);
    if (!checkId) return res.status(200).send({ code: "-1", msg: msgRes.WRNG_TODOS_ID, data: { requestObj, responseObj: null } });
    //
    const findDataDb = await todos.findById(req.params.studentId);
    if (!findDataDb) return res.status(200).send({ code: "-1", msg: msgRes.WRNG_TODOS_ID, data: { requestObj, responseObj: null } });
    //
    const tmp = {
      studentName: requestObj["studentName"],
      studentAddress: requestObj["studentAddress"],
      studentMobile: `91${requestObj["studentMobile"]}`,
    };
    const updateDb = await todos.findByIdAndUpdate(req.params.studentId, tmp, { new: true });
    return res.status(200).send({ code: "1", msg: msgRes.TODOS_UPDATE_OK, data: { requestObj, responseObj: updateDb } });
  } catch (err) {
    commonFunction.errorLogs(err);
    return res.status(500).send({ code: "500", msg: msgRes.SERVER_ERROR, data: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const requestObj = req.body;
    const checkId = ObjectId.isValid(req.params.studentId);
    if (!checkId) return res.status(200).send({ code: "-1", msg: msgRes.WRNG_TODOS_ID, data: { requestObj, responseObj: null } });
    //
    const findDataDb = await todos.findById(req.params.studentId);
    if (!findDataDb) return res.status(200).send({ code: "-1", msg: msgRes.WRNG_TODOS_ID, data: { requestObj, responseObj: null } });
    const deletedb = await todos.findByIdAndRemove(req.params.studentId);
    return res.status(200).send({ code: "1", msg: msgRes.TODOS_DEL_OK, data: { requestObj, responseObj: null } });
  } catch (err) {
    commonFunction.errorLogs(err);
    return res.status(500).send({ code: "500", msg: msgRes.SERVER_ERROR, data: err });
  }
};

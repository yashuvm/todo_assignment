const Joi = require("joi");

exports.createTodos = async (req, res, next) => {
  const schemas = Joi.object().keys({
    studentName: Joi.string().max(50).required(),
    studentAddress: Joi.string().max(200).required(),
    studentMobile: Joi.string().length(10).pattern(/^[0-9]+$/).required()
  });
  const check = schemas.validate(req.body);
  if (check.error) return res.status(400).send({ code: "400", msg: check.error.details[0].message, data: null });
  else next();
};

exports.updateTodos = async (req, res, next) => {
  const schemas = Joi.object().keys({
    studentName: Joi.string().max(50).required(),
    studentAddress: Joi.string().max(200).required(),
    studentMobile: Joi.string().length(10).pattern(/^[0-9]+$/).required()
  });
  const check = schemas.validate(req.body);
  if (check.error) return res.status(400).send({ code: "400", msg: check.error.details[0].message, data: null });
  else next();
};

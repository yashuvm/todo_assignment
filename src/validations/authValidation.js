const Joi = require("joi");

exports.getToken = async (req, res, next) => {
  const schemas = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().max(200).required(),
  });
  const check = schemas.validate(req.body);
  if (check.error) return res.status(400).send({ code: "400", msg: check.error.details[0].message, data: null });
  else next();
};

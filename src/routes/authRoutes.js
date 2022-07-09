const router = require("express").Router();
const authValidation = require("../validations/authValidation");
const authControllers = require("../controllers/authControllers");

/**
 * API: GET TOKEN
 * TYPE: GET
 * BODY_PARAMETER:- email*,password*
 */
router.post("/get/token", authValidation.getToken, authControllers.getToken);

module.exports = router;

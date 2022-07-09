const router = require("express").Router();
const todoValidation = require("../validations/todoValidation");
const todoControllers = require("../controllers/todoControllers");
const auth = require("../utils/middleware/auth");

/**
 * API: ADD TODOS
 * TYPE: POST
 * BODY_PARAMETER:- studentName*,studentAddress*,studentMobile*
 * AUTHROZIATION: Bearer <token>
 */
router.post("/create", auth, todoValidation.createTodos, todoControllers.create);

/**
 * API: GET TODOS
 * TYPE: GET
 * AUTHROZIATION: Bearer <token>
 */
router.get("/get", auth, todoControllers.getTodos);

/**
 * API: UPDATE TODOS
 * TYPE: PUT
 * BODY_PARAMETER:- studentName*,studentAddress*,studentMobile*
 * PARAMS_PARAMETER:- :/studentId
 * AUTHROZIATION: Bearer <token>
 */
router.put("/update/:studentId", auth, todoValidation.updateTodos, todoControllers.update);

/**
 * API: DELETE TODOS
 * TYPE: DELETE
 * PARAMS_PARAMETER:- :/studentId
 * AUTHROZIATION: Bearer <token>
 */
router.delete("/delete/:studentId", auth, todoControllers.delete);

module.exports = router;

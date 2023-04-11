const express = require("express");
const router = express.Router()
const auth = require("../middleware/auth")
const userController = require("../controllers/userController")
router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.get("/user/info", auth, userController.getUser)
module.exports = router
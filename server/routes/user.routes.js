const express = require("express")
const router = express.Router()
const {login} = require("../controller/user.controller")
const {otp} = require("../controller/user.controller")
const {alert} = require("../controller/user.controller")

router.post("/login", login)
router.post("/otp", otp)
router.post("/alert", alert)

module.exports = router
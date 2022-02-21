const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe
} = require("../controllers/userController.js");

router.post("/api/users", registerUser);
router.post("/api/users/login", loginUser);
router.get("/api/users/me", getMe);

module.exports = router;
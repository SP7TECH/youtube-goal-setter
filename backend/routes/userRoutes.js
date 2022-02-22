const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe
} = require("../controllers/userController.js");
const {
    protect
} = require("../middleware/authMiddlware");

router.post("/api/users", registerUser);
router.post("/api/users/login", loginUser);
router.get("/api/users/me", protect, getMe);

module.exports = router;
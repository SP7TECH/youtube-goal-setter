const express = require("express");
const router = express.Router();

const {
    protect
} = require("../middleware/authMiddlware");

const goalController = require("../controllers/goalController");

router.route("/api/goals").get(protect, goalController.getGoals).post(protect, goalController.setGoal);
router.route("/api/goals/:id").put(protect, goalController.updateGoal).delete(protect, goalController.deleteGoal);


module.exports = router;
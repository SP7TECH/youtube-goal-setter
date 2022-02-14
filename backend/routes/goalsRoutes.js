const express = require("express");
const router = express.Router();

const goalController = require("../controllers/goalController");

router.route("/api/goals").get(goalController.getGoals).post(goalController.postGoals);
router.route("/api/goals/:id").put(goalController.putGoals).delete(goalController.deleteGoals);


module.exports = router;
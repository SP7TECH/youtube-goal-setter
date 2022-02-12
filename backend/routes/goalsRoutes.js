const express = require("express");
const router = express.Router();

router.get("/api/goals", (req, res, next) => {
    res.status(200).json({
        message: "Get goals"
    });
})

router.post("/api/goals", (req, res, next) => {
    res.status(200).json({
        message: "Set goals"
    });
})

router.put("/api/goals/:id", (req, res, next) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    });
})

router.delete("/api/goals/:id", (req, res, next) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    });
})


module.exports = router;
const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res, next) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
})

const postGoals = asyncHandler(async (req, res, next) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field");
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal);
})

const putGoals = asyncHandler(async (req, res, next) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal Not Found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res, next) => {
    const goal = Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal Not Found");
    }

    await goal.remove();

    res.status(200).json({
        id: req.params.id
    });
})

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const goalRoutes = require("../backend/routes/goalsRoutes");

const app = express();

app.use(goalRoutes);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})
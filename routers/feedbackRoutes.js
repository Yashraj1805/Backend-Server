const express = require("express");
const { createFeedback, getFeedbacks } = require("../controllers/feedbackController");
const auth = require("../middlewares/auth");

const feedbackRouter = express.Router();

feedbackRouter.post("/createFeedback",auth, createFeedback);
feedbackRouter.get("/getFeedbacks", getFeedbacks);

module.exports = feedbackRouter;

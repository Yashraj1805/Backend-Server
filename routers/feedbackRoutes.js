const express = require("express");
const { createFeedback, getFeedbacks } = require("../controllers/feedbackController");


const feedbackRouter = express.Router();

feedbackRouter.post("/createFeedback", createFeedback);
feedbackRouter.get("/getFeedbacks", getFeedbacks);

module.exports = feedbackRouter;

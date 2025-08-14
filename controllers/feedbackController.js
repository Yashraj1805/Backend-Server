const Feedback = require("../models/feedbackModel");

// POST - Create new feedback
exports.createFeedback = async (req, res) => {
  try {
    const { name, email, message, mood } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send({ message: "Name, email and message are required" });
    }

    const feedback = await Feedback.create({
      name,
      email,
      message,
      mood
    });

    res.status(201).send({
      message: "Feedback submitted successfully",
      data: feedback
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET - Retrieve all feedbacks
exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.send(feedbacks);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

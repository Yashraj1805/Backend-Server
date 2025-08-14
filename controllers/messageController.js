const Message = require("../models/messageModel");

// Create new message
exports.createMessage = async (req, res) => {
  try {
    const { name, email, company, phoneNumber, subject, message } = req.body;

    if (!name || !email || !phoneNumber || !subject || !message) {
      return res.status(400).send({ message: "All required fields must be provided" });
    }

    const newMessage = await Message.create({
      name,
      email,
      company,
      phoneNumber,
      subject,
      message
    });

    res.status(201).send({
      message: "Message submitted successfully",
      data: newMessage
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const express = require("express");

const { createMessage, getMessages } = require("../controllers/messageController");

const messageRouter = express.Router();


messageRouter.post("/createMessage", createMessage);
messageRouter.get("/getMessage", getMessages);

module.exports = messageRouter;

const express = require("express");
const auth = require("../middlewares/auth");
const { createMessage, getMessages } = require("../controllers/messageController");

const messageRouter = express.Router();


messageRouter.post("/createMessage", auth, createMessage);
messageRouter.get("/getMessage", getMessages);

module.exports = messageRouter;
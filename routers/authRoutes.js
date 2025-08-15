const express = require("express");
const { register, login, getProfile,updateProfile,deleteProfile } = require("../controllers/authController");
const auth = require("../middlewares/auth");


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getProfile", auth, getProfile);
router.put('/updateprofile', auth, updateProfile);
router.delete('/deleteprofile', auth, deleteProfile);

module.exports = router;

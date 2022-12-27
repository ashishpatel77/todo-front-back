const express = require("express");
const router = express.Router();
const Users = require("../model/Users");
const usersControllers = require("../controllers/users-contollers");

router.get("/", usersControllers.allUsers);
router.post("/", usersControllers.addUser);

module.exports = router;

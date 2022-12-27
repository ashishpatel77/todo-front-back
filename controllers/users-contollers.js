const Users = require("../model/Users");

const allUsers = async (req, res, next) => {
  let userData;
  try {
    userData = await Users.find();
    console.log("first", userData);
  } catch (err) {
    console.log(err);
  }

  if (!userData) {
    return res.status(404).json({ message: "Users not Found" });
  }
  return res.status(200).json({ userData });
};

exports.allUsers = allUsers;

const addUser = async (req, res, next) => {
  const { email, first_name, last_name, avatar } = req.body;

  let users;
  try {
    users = new Users({
      email,
      first_name,
      last_name,
      avatar,
    });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(500).json({ message: "Unable to add a users" });
  }
  return res.status(201).json({ users });
};

exports.addUser = addUser;

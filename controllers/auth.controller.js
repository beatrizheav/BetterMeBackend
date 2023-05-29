const User = require("../models/user");
const { comparePassword } = require('../helpers/bcryptjs')

const signup = async (req, res) => {
  try {
    const { email, password, name, phone, birthDate, occupation, NSE, anxiety, depresion, suicide, treatment } = req.body;
    const emailToSearch = email.toLowerCase();
    const userExists = await User.findOne({ email: emailToSearch });

    if (userExists) {
      res.status(400).send({ msg: "The user with this email already exists" });
    } else {
      const user = new User({
        email,
        password,
        name,
        phone,
        birthDate,
        occupation,
        NSE,
        anxiety, 
        depresion, 
        suicide, 
        treatment
      });

      const userSavedToDB = await user.save();
      res.status(200).send({
        msg: "User created successfully",
        userSavedToDB,
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error creating the user", error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
      const isSamePassword = await comparePassword(
        password,
        userExists.password
      );
      if (isSamePassword) {
        res.status(200).send({ msg: "Successful login", userExists });
      } else {
        res.status(401).send({ msg: "Wrong password" });
      }
  } else {
    res.status(404).send({ msg: "User does not exists" });
  }
};

module.exports = {
  signup,
  login,
};

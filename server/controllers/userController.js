require('dotenv').config()
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
      // check if the user already exists
      var user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'Email already exists' });
      }

      // create new user
      var user = new User({
        firstName,
        lastName,
        email,
        password
      });

      // hash user password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // return jwt
      const payload = {
        user: {
          id: user.id,
        },
      }; 

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
      // check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Email or password incorrect' });
      }

      // check is the encrypted password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Email or password incorrect' });
      }

      // return jwt
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send({error: 'Server error'});
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({ user });
      } catch (error) {
        res.status(500).json(error);
      }
}
module.exports = {
    userRegister,
    userLogin,
    getUser
}
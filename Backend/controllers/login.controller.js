require("dotenv").config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.findOne = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ where: { email: email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if(user) {
        console.log('Userssss', password+ '   '+ user.password);
      }
      // Compare the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Generate and send a JWT token
      const token = jwt.sign({ email: user.email }, process.env.REACT_APP_JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token: token, admin: user.admin, user_id: user.user_id });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
};
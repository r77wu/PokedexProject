const User = require('../models/UserModel');

exports.signup = async (req, res, next) => {
  try{
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });
    res.status(201).json({
      status: 'scuccess',
      data: {
          newUser
      }
    });
  } catch(err) {
    res.json({
      err
    });
  }
  next();
}
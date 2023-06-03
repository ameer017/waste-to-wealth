const User = require("../models/User");
const Note = require("../models/Note");

const bcrypt  = require('bcrypt')
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB
  const users = await User.find().select("-password").lean();

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No user found" });
  }

  res.json(users);
});

const createNewUser = asyncHandler(async (req, res) => {
  const {username, password, roles } = req.body

  // confirm data
  if(!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({message: 'All fields must be provided'})
  }
  // check for duplicate
  const duplicate = await User.findOne({username}).lean().exec()
  if(duplicate) {
    return res.status(409).json({message: 'User already exist'})
  }

  // hash password
  const hashPwd = await bcrypt.hash(password, 10);
  const userObject = {
    username, password: hashPwd, roles
  }

  // create user 
  const user = await User.create(userObject)
  if(user) {
    res.status(201).json({message: `new user ${username} created successfully`})
  }else{
    res.status(400).json({message: 'user already exist'})
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const {id, username, roles, active} = req.body;

    // confirm data
    if(id || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({message: 'All fields are required.'});
    }
    const user = await User.findById(id).exec();
    if(!user) {
        return res.status(400).json({message: 'User not found '})
    }

    // check for duplicate
    const duplicate = await User.findOne({username}).lean().exec();
    if(duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({message: 'Duplicate username'})
    }
    user.username = username
    user.roles = roles
    user.active = active
    if(password) {
        // Hash password
        user.password = await bcrypt.hash(password, 10)  //salt rounds
    }
    const updateUser = await User.save()
    res.json({message: `${updateUser.username} updated`})
});

const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};

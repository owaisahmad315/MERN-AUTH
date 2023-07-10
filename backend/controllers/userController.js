import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Auth user/set token
// route    POST/api/users/auth
// @access  Public

const authUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Auth User Owais' });
});



// @desc    Register a new user
// route    POST/api/users/auth
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name);
    res.status(200).json({ message: 'Register user' });
});



// @desc    Logout user
// route    POST/api/users/logout
// @access  Public

const logoutUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Logout User  ' });
});


// @desc    Get user profile
// route    Get/api/users/profile
// @access  private

const getUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({ message: '  User Profile' });
});

// @desc    Update user profile
// route    Put/api/users/profile
// @access  private

const updateUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Update user profile  ' });
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}
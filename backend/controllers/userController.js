import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc    Auth user/set token
// route    POST/api/users/auth
// @access  Public

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.fineOne({ email });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid email or password')
    }

});



// @desc    Register a new user
// route    POST/api/users/auth
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already Exists')
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

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
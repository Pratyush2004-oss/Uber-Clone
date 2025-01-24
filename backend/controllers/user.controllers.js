import BlacklistTokenModel from "../models/blacklistToken.model.js";
import UserModel from "../models/user.models.js";
import { createUser } from "../services/user.services.js";
import { validationResult } from 'express-validator';

// Register user controller
export const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { firstName, lastName, email, password } = req.body;
        const hashPassword = await UserModel.hashPassword(password);

        let user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        user = await createUser({
            firstName,
            lastName,
            email,
            password: hashPassword
        });

        const token = user.generateAuthToken();
        res.cookie('token', token);
        res.status(201).json({
            success: true,
            user,
            token,
            message: "User registered successfully"
        })
    } catch (error) {
        console.log("Error in User register controller : ", error.message);
        next(error);
    }
}

// user login controller 
export const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid User Credentials"
            });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid User Credentials"
            });
        }

        const token = user.generateAuthToken();
        res.cookie('token', token);
        res.status(200).json({
            success: true,
            user,
            token,
            message: "User logged in successfully"
        })

    } catch (error) {
        console.log("Error in login Controller : " + error.message);
        next(error);
    }
}

// profile info controller
export const profile = async (req, res, next) => {
    try {
        res.status(200).json({ user: req.user });
    } catch (error) {
        console.log("Error in profile Controller : " + error.message);
        next(error);
    }
}

// logout route
export const logout = async (req, res, next) => {
    try {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(" ")[1];

        await BlacklistTokenModel.create({ token });
        res.status(200).json({ success: true, message: "User logged out successfully" });

    } catch (error) {
        console.log("Error in logout Controller : " + error.message);
        next(error);
    }

}

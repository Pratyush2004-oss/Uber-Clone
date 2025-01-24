import { validationResult } from "express-validator";
import CaptainModel from "../models/captains.model.js";
import { createCaptain } from "../services/captain.services.js";
import BlacklistTokenModel from "../models/blacklistToken.model.js";

// Captain register controller
export const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { firstName, lastName, email, vehicle, password } = req.body;

        let captain = await CaptainModel.findOne({ email });
        if (captain) {
            return res.status(400).json({
                success: false,
                message: "Captain already exists"
            });
        }

        const hashedPassword = await CaptainModel.hashPassword(password);

        captain = await createCaptain({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

        const token = captain.generateAuthToken();
        res.cookie('token', token);
        res.status(201).json({
            success: true,
            captain,
            token,
            message: "Captain registered successfully"
        });

    } catch (error) {
        console.log("Error in Captain register Controller : " + error.message);
        next(error);
    }
}

// Captain login controller
export const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        let captain = await CaptainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        const token = captain.generateAuthToken();
        res.cookie('token', token);
        res.status(200).json({
            success: true,
            captain,
            token,
            message: "Logged in successfully"
        })

    } catch (error) {
        console.log("Error in Captain Login Controller : " + error.message);
        next(error);
    }
}

// Captain profile controller
export const profile = async (req, res, next) => {
    try {
        res.status(200).json({ captain: req.captain });
    } catch (error) {
        console.log("Error in getting Captain profile Controller : " + error.message);
        next(error);
    }
}

// Captain logout controller
export const logout = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(" ")[1];

        await BlacklistTokenModel.create({ token });
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: "Captain logged out successfully"
        })
    } catch (error) {
        console.log("Error in logout controller");
        next(error);
    }
}
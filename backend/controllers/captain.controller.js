import { validationResult } from "express-validator";
import CaptainModel from "../models/captains.model.js";
import { createCaptain } from "../services/captain.services.js";

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

export const login = async (req, res, next) => { }

export const logout = async (req, res, next) => { }
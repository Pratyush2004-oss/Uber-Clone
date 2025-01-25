import BlacklistTokenModel from "../models/blacklistToken.model.js";
import CaptainModel from "../models/captains.model.js";
import UserModel from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const AuthentateUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access - No Token provided"
            });
        }
        const isBlacklisted = await BlacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access - Invalid Token"
            });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserModel.findById(decoded._id);
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access - Invalid User"
            });
        }
        req.user = user;
        return next();
    }
    catch (error) {
        console.log("Error in Authenticated User function : " + error.message);
        next(error);
    }
}   

export const AuthentateCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access - No Token provided"
            });
        }
        const isBlacklisted = await BlacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access - Invalid Token"
            });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const captain = await CaptainModel.findById(decoded._id);
        if(!captain){
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access - Invalid Captain"
            });
        }
        req.captain = captain;
        return next();
    } catch (error) {
        console.log("Error in Authenticated Captain function : " + error.message);
        next(error);
    }
}
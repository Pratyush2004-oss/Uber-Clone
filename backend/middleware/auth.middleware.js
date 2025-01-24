import BlacklistTokenModel from "../models/blacklistToken.model.js";
import UserModel from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const AuthentatedUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access"
            });
        }
        const isBlacklisted = await BlacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access"
            });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserModel.findById(decoded._id);
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access"
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
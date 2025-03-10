import Router from "express";
import { login, logout, profile, register } from "../controllers/captain.controller.js";
import { body } from "express-validator";
import { AuthentateCaptain } from "../middleware/auth.middleware.js";

const router = Router();
const RegistrationValidationRule = [
    body('firstName').isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate Number must be at least 3 characters long'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be at greater than 1 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.vehicleType').isLength({ min: 3 }).withMessage('Vehicle type must be at least 3 characters long'),
];

const ValidationRule = [
    body('email').isEmail().withMessage('Email is not valid'),
];

router.post('/register', RegistrationValidationRule, register);
router.post('/login', ValidationRule, login);
router.get('/logout', AuthentateCaptain, logout);
router.get('/profile', AuthentateCaptain, profile);

export default router;
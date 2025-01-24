import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.controllers.js";
import { body } from "express-validator";
import { AuthentatedUser } from "../middleware/auth.middleware.js";

const router = Router();

const ValidationRuleRegister = [
    body('firstName').isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]

const ValidationRule = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]

router.post('/register', ValidationRuleRegister, register);
router.post('/login', ValidationRule, login);
router.get('/logout', AuthentatedUser, logout);
router.get('/profile', AuthentatedUser, profile);

export default router;
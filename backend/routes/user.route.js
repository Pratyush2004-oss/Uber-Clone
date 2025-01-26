import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.controllers.js";
import { body } from "express-validator";
import { AuthentateUser } from "../middleware/auth.middleware.js";

const router = Router();

const ValidationRuleRegister = [
    body('firstName').isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]

const ValidationRule = [
    body('email').isEmail().withMessage('Email is not valid'),
]

router.post('/register', ValidationRuleRegister, register);
router.post('/login', ValidationRule, login);
router.get('/logout', AuthentateUser, logout);
router.get('/profile', AuthentateUser, profile);

export default router;
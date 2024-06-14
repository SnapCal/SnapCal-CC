const { body } = require('express-validator');

const registerValidationRules = [
    body('name')
        .notEmpty().withMessage('Name is required'),
    body('email')
        .isEmail().withMessage('Email is invalid'),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .notEmpty().withMessage('Password is required')
];

const loginValidationRules = [
    body('email')
        .isEmail().withMessage('Email is invalid'),
    body('password')
        .notEmpty().withMessage('Password is required')
];

const resetPasswordValidationRules = [
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .notEmpty().withMessage('Password is required')
];

module.exports = {
    registerValidationRules,
    loginValidationRules,
    resetPasswordValidationRules
};
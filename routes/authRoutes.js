const express = require('express');
const { register, login, logout, deleteAccount, resetPassword } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const { registerValidationRules, loginValidationRules, resetPasswordValidationRules } = require('../utils/validRules');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
    res.send('Hello World!');
});

router.post('/register', registerValidationRules, register);
router.post('/login', loginValidationRules, login);

router.post('/logout', authMiddleware, logout);
router.delete('/delete-account', authMiddleware, deleteAccount);
router.put('/reset-password', authMiddleware, resetPasswordValidationRules, resetPassword);

module.exports = router;
const { body, validationResult } = require('express-validator');

const validatePatientDetails = [
    // Name validation: must not be empty
    body('name', 'Name is required').not().isEmpty(),

    // Address validation: must be at least 10 characters
    body('address', 'Address must be at least 10 characters long').isLength({ min: 10 }),

    // Email validation: must be a valid email
    body('email', 'Invalid email').isEmail(),

    // Phone number validation: must be at least 10 digits + country code
    body('phone', 'Phone number must be at least 10 digits long').isLength({ min: 10 }),

    // Password validation: must contain at least one uppercase, one lowercase, and one number. 
    // Maximum length 15 and minimum length 8
    body('password', 'Password must be 8-15 characters long and contain at least one uppercase letter, one lowercase letter, and one number')
        .isLength({ min: 8, max: 15 })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),

    // Middleware to handle validation errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validatePatientDetails;

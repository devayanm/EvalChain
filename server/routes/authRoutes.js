const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const validateRegistration = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be at least 6 characters").isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation for login
const validateLogin = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.post("/register", validateRegistration, registerUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;

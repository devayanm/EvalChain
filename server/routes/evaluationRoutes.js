const express = require("express");
const {
  getEvaluations,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
} = require("../controllers/evaluationController");
const authMiddleware = require("../middlewares/authMiddleware");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const validateEvaluation = [
  check("title", "Title is required").notEmpty(),
  check("description", "Description is required").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", authMiddleware, getEvaluations);
router.post("/", authMiddleware, validateEvaluation, createEvaluation);
router.put("/:id", authMiddleware, validateEvaluation, updateEvaluation);
router.delete("/:id", authMiddleware, deleteEvaluation);

module.exports = router;

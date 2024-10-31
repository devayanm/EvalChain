const Evaluation = require("../models/Evaluation");

exports.getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find({ userId: req.user.id });
    res.json(evaluations);
  } catch (err) {
    res.status(500).json({ error: "Could not retrieve evaluations" });
  }
};

exports.createEvaluation = async (req, res) => {
  try {
    const evaluation = new Evaluation({ ...req.body, userId: req.user.id });
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (err) {
    res.status(400).json({ error: "Failed to create evaluation" });
  }
};

exports.updateEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(evaluation);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
};

exports.deleteEvaluation = async (req, res) => {
  try {
    await Evaluation.findByIdAndDelete(req.params.id);
    res.json({ message: "Evaluation deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Delete failed" });
  }
};

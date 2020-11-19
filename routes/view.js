// Dependencies;
// =============:
const router = require("express").Router();
const path = require("path");

// - Index;
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../pages/index.html"));
});

// - Exercise;
router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../pages/exercise.html"));
});

// - Stats;
router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../pages/stats.html"));
});

// - Exports;
module.exports = router;

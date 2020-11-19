// Dependencies;
// =============:
const router = require("express").Router();
const Workout = require("../models/Fitness.js");

// Create;
// =============: - New Workout;
router.post("/api/fitness", (req, res) => {
	Workout.create({})
		.then(fitnessDB => {
			res.json(fitnessDB);
		})
		.catch(err => {
			res.json(err);
		});
});

// Read;
// =============: - Past Workouts;
router.get("/api/fitness", (req, res) => {
	Workout.find()
		.then(fitnessDB => {
			res.json(fitnessDB);
		})
		.catch(err => {
			res.json(err);
		});
});

// Update;
// =============: - Updates Workout;
router.put("/api/fitness/:id", ({ body, params }, res) => {
	Workout.findByIdAndUpdate(
		params.id,
		{ $push: { exercises: body } },
		{ new: true, runValidators: true }
	)
		.then(fitnessDB => {
			res.json(fitnessDB);
		})
		.catch(err => res.json(err));
});

// Delete;
// =============: - Delete Workout;
router.delete("/api/fitness", ({ body }, res) => {
	Workout.findByIdAndDelete(body.id)
		.then(() => {
			res.json(true);
		})
		.catch(err => {
			res.json(err);
		});
});

// Export;
// =============:
module.exports = router;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
	day: {
		type: Date,
		unique: true
	},
	exercise: [
		{
			type: Schema.Types.ObjectId,
			ref: "Exercise"
		}
	]
});

const Fitness = mongoose.model("Fitness", FitnessSchema);
module.exports = Fitness;

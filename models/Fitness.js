const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
  day: {
    type: Date,
    unique: true
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Fitness"
    }
  ]
});

const Fitness = mongoose.model("Fitness", FitnessSchema);
module.exports = Fitness;

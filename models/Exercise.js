const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String
  },
  type: {
    type: String
  },
  type: {
    type: String
  },
  type: {
    type: String
  },
  type: {
    type: String
  },
  type: {
    type: String
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;

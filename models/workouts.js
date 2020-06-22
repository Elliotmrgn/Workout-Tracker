const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Choose an exercise type.",
      },
      name: {
        type: String,
        trim: true,
        required: "Choose a workout name",
      },
      duration: {
        type: Number,
        required: "Choose a workout duration",
      },
      weight: {
        type: Number,
        required: "Choose a resistance weight",
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          enum: ["cardio", "resistance"],
        },
        name: {
          type: String,
          trim: true,
          required: "Choose a workout name",
        },
        duration: {
          type: Number,
          minimum: 1,
          required: "Choose a valid workout duration",
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

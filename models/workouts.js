const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Choose an exercise type."
        },
        name: {
            type: String,
            trim: true,
            required: "Choose a workout name"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Choose a workout duration"
        },
        weight: {
            type: Number,
            trim: true,
            required: "Choose a resistance weight"
        },
        reps: {
            type: Number,
            trim: true,
            required: "Choose number of reps"
        },
        sets: {
            type: Number,
            trim: true,
            required: "Choose number of sets"
        },
        distance: {
            type: Number,
            trim: true,
            required: "Choose cardio distance"
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number,
                min: [1]
            },
            weight: {
                type: Number,
                min: [1]
            },
            reps: {
                type: Number,
                min: [1]
            },
            sets: {
                type: Number,
                min: [1]
            },
            distance: {
                type: Number
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
})

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
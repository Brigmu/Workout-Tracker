const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [
        {
            type: String,
            name: String,
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
            }
        }
    ]
})

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "kind of exercise: ",
      },
      name: {
        type: String,
        trim: true,
        required: "name of exercise: ",
      },
      duration: {
        type: Number,
        trim: true,
        required: "how long it should take in minutes: ",
      },
      distance: {
        type: Number,
        trim: true,
        requred: " miles: ",
      },
      weight: {
        type: Number,
        trim: true,
        required: " lbs: ",
      },
      reps: {
        type: Number,
        trim: true,
        required: "How many reps: ",
      },
      sets: {
        type: Number,
        trim: true,
        required: "number of sets: ",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
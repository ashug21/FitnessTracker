const mongoose = require('mongoose');

const AddWorkoutSchema = new mongoose.Schema({

    date : {
        type : String,
        required : true
    },
    exercise : {
        type : String,
        required : true
    },
    sets : {
        type : Number,
        required : true
    },
    reps : {
        type : Number,
        required : true
    },
    weight : {
        type : String,
        required : true
    },
});

const AddWorkout = mongoose.model('addworkout' , AddWorkoutSchema);
module.exports = AddWorkout




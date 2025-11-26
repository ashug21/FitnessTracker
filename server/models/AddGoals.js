const mongoose = require('mongoose');

const AddGoalsSchema = new mongoose.Schema({

    goal : {
        type : String,
        required : true
    },
    stepgoal : {
        type : Number,
        required : true
    },
    workoutweek : {
        type : Number,
        required : true
    },
    caloriegoal : {
        type : String,
        required : true
    },
    waterintake : {
        type : Number,
        required : true
    },
});

const AddGoals = mongoose.model('addgoals' , AddGoalsSchema);
module.exports = AddGoals




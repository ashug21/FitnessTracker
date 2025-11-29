const express = require("express");
const router = express.Router();
const {createWorkout,getUserWorkout,deleteUserWorkout , getAnalytics,getMuscleDistribution} = require('../controllers/AddWorkout');

router.post('/addWorkout' ,createWorkout );

router.get('/getWorkout' ,getUserWorkout );

router.delete('/deleteworkout/:id' ,deleteUserWorkout);

router.get('/muscle-distribution', getMuscleDistribution);

router.get('/analytics' ,getAnalytics);


module.exports = router;
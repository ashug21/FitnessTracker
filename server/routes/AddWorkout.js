const express = require("express");
const router = express.Router();
const {createWorkout,getUserWorkout,deleteUserWorkout , getAnalytics,getMuscleDistribution , updateUserWorkout} = require('../controllers/AddWorkout');

router.post('/addWorkout' ,createWorkout );

router.get('/getWorkout' ,getUserWorkout );

router.delete('/deleteworkout/:id' ,deleteUserWorkout);

router.get('/muscle-distribution', getMuscleDistribution);

router.get('/analytics' ,getAnalytics);

router.patch('/update/:id' , updateUserWorkout);

router.get("/health", (req, res) => {
    res.status(200).send("ok");
  });


module.exports = router;
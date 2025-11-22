const express = require("express");
const router = express.Router();
const {createWorkout,getUserWorkout,deleteUserWorkout} = require('../controllers/AddWorkout');

router.post('/addWorkout' ,createWorkout );

router.get('/getWorkout' ,getUserWorkout );

router.delete('/deleteworkout/:id' ,deleteUserWorkout);


module.exports = router;
const express = require("express");
const router = express.Router();
const { createGoals ,getUserGoal,deleteUserGoal  } = require('../controllers/AddGoals');

router.post('/addGoals' ,createGoals );

router.get('/getGoals' ,getUserGoal );

router.delete('/deleteGoals/:id' ,deleteUserGoal);


module.exports = router;
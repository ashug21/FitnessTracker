require('dotenv').config();
const express = require("express");
const app = express();
const addGoalRouter = require('./routes/AddGoals');
const addWorkoutRouter = require('./routes/AddWorkout');
const {connectDB} = require('./connect');
const cors = require("cors");

const PORT = process.env.PORT || 8000;



app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

connectDB(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err.message));



app.get('/' , (req,res) => {
    res.json({message : "Server is UP"});
});



app.use('/ag' , addGoalRouter);
app.use('/aw' , addWorkoutRouter);




app.listen(PORT , () => console.log(`Server Connected at ${PORT}`));

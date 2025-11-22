const AddGoals = require("../models/AddGoals");

const createGoals = async (req, res) => {
  try {
    const { goal, stepgoal, workoutweek, caloriegoal, waterintake } = req.body;

    if (!goal || !stepgoal || !workoutweek || !caloriegoal || !waterintake) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newGoal = await AddGoals.create({
      goal,
      stepgoal,
      workoutweek,
      caloriegoal,
      waterintake,
    });

    return res.status(201).json({
      success: true,
      message: "Goal created successfully",
      data: newGoal,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getUserGoal = async (req, res) => {
  try {
    const data = await AddGoals.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteUserGoal = async (req, res) => {
  try {
    const { id } = req.params;

    const goal = await AddGoals.findByIdAndDelete(id);

    if (!goal) {

      return res.status(404).json({success: false,message: "Goal not found",});
    }

    return res.status(200).json({success: true,message: "Goal deleted successfully"});

  } catch (error) {

    return res.status(500).json({success: false,message: error.message,});
  }
};

module.exports = {
  createGoals,
  getUserGoal,
  deleteUserGoal
};

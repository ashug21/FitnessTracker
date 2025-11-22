const AddWorkout = require('../models/AddWorkout');


const createWorkout = async (req, res) => {
  try {
    const { date, exercise, sets, reps, weight } = req.body;

    if (!date || !exercise || !sets || !reps || !weight) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newWorkout = await AddWorkout.create({
        date,
        exercise,
        sets,
        reps,
        weight,
    });

    return res.status(201).json({
      success: true,
      message: "Goal created successfully",
      data: newWorkout,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getUserWorkout = async (req, res) => {
  try {
    const data = await AddWorkout.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteUserWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    const goal = await AddWorkout.findByIdAndDelete(id);

    if (!goal) {

      return res.status(404).json({success: false,message: "Info not found",});
    }

    return res.status(200).json({success: true,message: "Exercise Info deleted successfully"});

  } catch (error) {

    return res.status(500).json({success: false,message: error.message,});
  }
};

module.exports = {
    createWorkout,
    getUserWorkout,
    deleteUserWorkout
};

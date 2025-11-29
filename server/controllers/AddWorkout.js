const AddWorkout = require('../models/AddWorkout');


const MUSCLE_MAP = {

  /* CHEST */
  "bench press": "chest",
  "flat bench press": "chest",
  "incline bench press": "chest",
  "decline bench press": "chest",
  "push ups": "chest",
  "wide push ups": "chest",
  "incline press": "chest",
  "chest press": "chest",
  "dumbbell press": "chest",
  "incline dumbbell press": "chest",
  "decline dumbbell press": "chest",
  "dips": "chest",
  "chest dips": "chest",
  "cable fly": "chest",
  "machine fly": "chest",
  "pec deck": "chest",

  /* BACK */
  "deadlift": "back",
  "romanian deadlift": "back",
  "rld": "back",
  "lat pulldown": "back",
  "pull ups": "back",
  "chin ups": "back",
  "barbell row": "back",
  "dumbbell row": "back",
  "inverted row": "back",
  "t-bar row": "back",
  "seated row": "back",
  "machine row": "back",
  "cable row": "back",
  "face pull": "back",
  "shrug": "back",
  "barbell shrug": "back",
  "dumbbell shrug": "back",

  /* LEGS */
  "squat": "legs",
  "back squat": "legs",
  "front squat": "legs",
  "leg press": "legs",
  "lunges": "legs",
  "walking lunges": "legs",
  "bulgarian split squat": "legs",
  "romanian deadlift": "legs",
  "hamstring curl": "legs",
  "leg curl": "legs",
  "seated leg curl": "legs",
  "lying leg curl": "legs",
  "leg extension": "legs",
  "calf raise": "legs",
  "standing calf raise": "legs",
  "seated calf raise": "legs",
  "hip thrust": "legs",
  "glute bridge": "legs",

  /* SHOULDERS */
  "overhead press": "shoulders",
  "shoulder press": "shoulders",
  "military press": "shoulders",
  "arnold press": "shoulders",
  "lateral raise": "shoulders",
  "side lateral raise": "shoulders",
  "front raise": "shoulders",
  "upright row": "shoulders",
  "upright barbell row": "shoulders",
  "machine shoulder press": "shoulders",

  /* ARMS */
  "bicep curl": "arms",
  "barbell curl": "arms",
  "dumbbell curl": "arms",
  "incline curl": "arms",
  "hammer curl": "arms",
  "hammer curls": "arms",
  "preacher curl": "arms",
  "cable curl": "arms",
  "rope curl": "arms",

  "tricep pushdown": "arms",
  "triceps pushdown": "arms",
  "rope pushdown": "arms",
  "tricep extension": "arms",
  "overhead tricep extension": "arms",
  "skullcrusher": "arms",
  "skull crushers": "arms",
  "close grip bench press": "arms",

  /* ABS / CORE (optional but useful) */
  "crunch": "core",
  "crunches": "core",
  "sit ups": "core",
  "leg raise": "core",
  "hanging leg raise": "core",
  "plank": "core",
  "cable crunch": "core",
  "russian twist": "core",
  "mountain climber": "core"
};



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

const getAnalytics = async (req, res) => {
  try {
    const workouts = await AddWorkout.find();


    workouts.forEach(w => {
      if (typeof w.exercise === "string") {
        w.exercise = w.exercise.trim().toLowerCase();
      }
    });

    const totalWorkouts = workouts.length;

    const totalVolume = workouts.reduce((acc, w) => {
      const sets = Number(w.sets) || 0;
      const reps = Number(w.reps) || 0;


      const weight = Number(
        String(w.weight).replace(/[^0-9.]/g, "")
      ) || 0;

      return acc + sets * reps * weight;
    }, 0);


    let exerciseCount = {};
    workouts.forEach(w => {
      exerciseCount[w.exercise] = (exerciseCount[w.exercise] || 0) + 1;
    });

    const topExercise =
      Object.keys(exerciseCount).length > 0
        ? Object.keys(exerciseCount).reduce((a, b) =>
            exerciseCount[a] > exerciseCount[b] ? a : b
          )
        : "none";

    // Convert back to title case
    const topExerciseFormatted = topExercise.replace(/\w\S*/g, word =>
      word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    );

    return res.json({
      success: true,
      totalWorkouts,
      totalVolume,
      topExercise: topExerciseFormatted
    });

  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
};


const getMuscleDistribution = async (req, res) => {
  try {
    const workouts = await AddWorkout.find();

    const muscleVolume = {
      chest: 0,
      back: 0,
      legs: 0,
      shoulders: 0,
      arms: 0
    };

    workouts.forEach(w => {
      const exercise = String(w.exercise).trim().toLowerCase();
      

      const muscle = MUSCLE_MAP[exercise];
      if (!muscle) return;
      
      const sets = Number(w.sets) || 0;
      const reps = Number(w.reps) || 0;
      const weight = Number(String(w.weight).replace(/[^0-9.]/g, "")) || 0;

      const volume = sets * reps * weight;

      muscleVolume[muscle] += volume;
    });

    return res.json({
      success: true,
      muscleVolume
    });

  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
};


module.exports = {
    createWorkout,
    getUserWorkout,
    deleteUserWorkout,
    getAnalytics,
    getMuscleDistribution
};

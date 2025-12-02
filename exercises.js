import img1 from './src/assets/exercises/BenchPress.jpg'
import img2 from './src/assets/exercises/InclineDumbell.jpg'
import img3 from './src/assets/exercises/PushUps.jpg'
import img4 from './src/assets/exercises/LatPulldown.png'
import img5 from './src/assets/exercises/PullUps.png'
import img6 from './src/assets/exercises/BarbellRows.png'
import img7 from './src/assets/exercises/deadlift.png'
import img8 from './src/assets/exercises/Squats.png'
import img9 from './src/assets/exercises/Lunges.png'
import img10 from './src/assets/exercises/LegPress.png'
import img11 from './src/assets/exercises/calf2.png'
import img12 from './src/assets/exercises/HipThrust.png'
import img13 from './src/assets/exercises/ShoulderPress.png'
import img14 from './src/assets/exercises/LateralRaises.png'
import img15 from './src/assets/exercises/ArnoldPress.png'
import img16 from './src/assets/exercises/Upright.png'
import img17 from './src/assets/exercises/BicepCurl.png'
import img18 from './src/assets/exercises/HammerCurl.png'
import img19 from './src/assets/exercises/PreacherCurl.png'
import img20 from './src/assets/exercises/TricepPushdown.png'

import img21 from './src/assets/exercises/OverheadTricep.png'
import img22 from './src/assets/exercises/skullcrusher.png'
import img23 from './src/assets/exercises/closeGrip.png'
import img24 from './src/assets/exercises/crunches.png'
import img25 from './src/assets/exercises/plank.png'
import img26 from './src/assets/exercises/HangingLeg.png'
import img27 from './src/assets/exercises/RussianTwist.png'
import img28 from './src/assets/exercises/Mountain.png'
import img29 from './src/assets/exercises/Dips.png'
import img30 from './src/assets/exercises/cableFly.png'


export const exercises = [
  {
    id: 1,
    name: "Bench Press",
    muscle: "Chest",
    equipment: "Barbell",
    image: img1,
    url: "https://www.youtube.com/watch?v=U4BS9EXvfyg", // Buff Dudes — ~2:10
    instructions:
      "Lie on a flat bench and grip the bar slightly wider than Shoulder width. Lower it to your Chest with control, then press upward. Keep your feet planted and Core tight throughout the movement."
  },

  {
    id: 2,
    name: "Incline Dumbbell Press",
    muscle: "Chest",
    equipment: "Dumbbell",
    image: img2,
    url: "https://www.youtube.com/watch?v=8iPEnn-ltC8", // ScottHermanFitness — ~2:20
    instructions:
      "Set a bench to a 30–45 degree incline. Press dumbbells upward while keeping elbows slightly angled. Lower slowly under control. Keep your Chest lifted and avoid flaring your elbows too wide."
  },

  {
    id: 3,
    name: "Push Ups",
    muscle: "Chest",
    equipment: "Bodyweight",
    image: img3,
    url: "https://www.youtube.com/watch?v=_l3ySVKYVJ8", // Buff Dudes — ~1:50
    instructions:
      "Place hands Shoulder-width apart and keep your body straight. Lower your Chest to the floor under control, then press up. Maintain a tight Core and avoid letting hips sag or rise."
  },

  {
    id: 4,
    name: "Lat Pulldown",
    muscle: "Back",
    equipment: "Machine",
    image: img4,
    url: "https://www.youtube.com/watch?v=CAwf7n6Luuc", // ScottHermanFitness — ~2:00
    instructions:
      "Sit upright with knees secured. Pull the bar down to your upper Chest, squeezing Shoulder blades. Control the bar upward without leaning Back excessively. Keep elbows pointed downward."
  },

  {
    id: 5,
    name: "Pull Ups",
    muscle: "Back",
    equipment: "Bodyweight",
    image: img5,
    url: "https://www.youtube.com/watch?v=eGo4IYlbE5g", // Buff Dudes — ~2:15
    instructions:
      "Hang from a bar with a Shoulder-width grip. Pull yourself upward until your chin passes the bar. Lower smoothly without swinging. Keep Core tight and avoid using momentum."
  },

  {
    id: 6,
    name: "Barbell Row",
    muscle: "Back",
    equipment: "Barbell",
    image: img6,
    url: "https://www.youtube.com/watch?v=vT2GjY_Umpw", // ScottHermanFitness — ~2:05
    instructions:
      "Lean forward with a flat Back and grip the bar. Pull it toward your lower ribs while keeping elbows close. Lower slowly. Maintain Core tension and avoid rounding your spine."
  },

  {
    id: 7,
    name: "Deadlift",
    muscle: "Back",
    equipment: "Barbell",
    image: img7,
    url: "https://www.youtube.com/watch?v=1ZXobu7JvvE", // Buff Dudes — ~2:30 (deadlift tips)
    instructions:
      "Stand with feet hip-width apart and grip the bar. Lift by extending hips and knees together, keeping the bar close. Lower with control. Maintain a neutral spine throughout."
  },

  {
    id: 8,
    name: "Squat",
    muscle: "Legs",
    equipment: "Barbell",
    image: img8 ,
    url: "https://www.youtube.com/watch?v=YOgu_2b3iys", // Buff Dudes — ~2:05 (squat cues)
    instructions:
      "Stand with feet Shoulder-width apart. Lower your hips until thighs are parallel while keeping Chest high. Push upward through your heels. Keep your Core braced and Back straight."
  },

  {
    id: 9,
    name: "Lunges",
    muscle: "Legs",
    equipment: "Bodyweight",
    image: img9,
    url: "https://www.youtube.com/watch?v=wrwwXE_x-pQ", // Livestrong — ~1:40 (clean tutorial)
    instructions:
      "Step forward and lower your Back knee toward the floor. Push through the front heel to return. Maintain an upright torso and avoid letting your knee cave inward."
  },

  {
    id: 10,
    name: "Leg Press",
    muscle: "Legs",
    equipment: "Machine",
    image: img10,
    url: "https://www.youtube.com/watch?v=IZxyjW7MPJQ", // ScottHermanFitness — ~2:25
    instructions:
      "Sit with your feet Shoulder-width on the platform. Press the weight upward, then lower slowly with control. Do not lock your knees. Maintain consistent breathing."
  },

  {
    id: 11,
    name: "Calf Raise",
    muscle: "Legs",
    equipment: "Bodyweight",
    image: img11,
    url: "https://www.youtube.com/watch?v=YMmgqO8Jo-k", // Bodybuilding.com (stable) — ~1:30
    instructions:
      "Stand tall and rise onto your toes while squeezing your calves. Pause at the top before lowering slowly. Keep your body stable and avoid bouncing."
  },

  {
    id: 12,
    name: "Hip Thrust",
    muscle: "Legs",
    equipment: "Barbell",
    image: img12,
    url: "https://www.youtube.com/watch?v=LM8XHLYJoYs", // Bret Contreras — ~2:40 (classic tutorial)
    instructions:
      "Rest your upper Back on a bench and place a bar across your hips. Drive your hips upward, squeezing glutes. Lower under control. Keep your Core tight and avoid overextending."
  },

  {
    id: 13,
    name: "Overhead Press",
    muscle: "Shoulders",
    equipment: "Barbell",
    image: img13,
    url: "https://www.youtube.com/watch?v=B-aVuyhvLHU", // ScottHermanFitness — ~2:10
    instructions:
      "Hold the bar at Shoulder height. Press overhead while keeping Core tight. Lower with control. Avoid arching your Back or flaring elbows excessively."
  },

  {
    id: 14,
    name: "Lateral Raise",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    image: img14,
    url: "https://www.youtube.com/watch?v=3VcKaXpzqRo", // ScottHermanFitness — ~1:45
    instructions:
      "Lift dumbbells outward until Arms reach Shoulder height. Lower slowly. Keep elbows slightly bent and avoid swinging your torso for momentum."
  },

  {
    id: 15,
    name: "Arnold Press",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    image: img15,
    url: "https://www.youtube.com/watch?v=vj2w851ZHRM", // Buff Dudes — ~2:00
    instructions:
      "Start with palms facing you. Rotate wrists outward as you press overhead. Reverse the movement while lowering. Keep movement smooth and torso stable."
  },

  {
    id: 16,
    name: "Upright Row",
    muscle: "Shoulders",
    equipment: "Barbell",
    image: img16,
    url: "https://www.youtube.com/watch?v=17C6iROOsR4", // ScottHermanFitness — ~1:50
    instructions:
      "Hold a narrow grip and pull the bar upward toward your collarbone. Lead with elbows. Lower slowly. Keep Shoulders stable and avoid shrugging excessively."
  },

  {
    id: 17,
    name: "Bicep Curl",
    muscle: "Arms",
    equipment: "Dumbbell",
    image: img17,
    url: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo", // ScottHermanFitness — ~2:05
    instructions:
      "Curl the dumbbells upward while keeping elbows close. Lower with control. Avoid swinging your torso and maintain steady tension on the biceps."
  },

  {
    id: 18,
    name: "Hammer Curl",
    muscle: "Arms",
    equipment: "Dumbbell",
    image: img18,
    url: "https://www.youtube.com/watch?v=zC3nLlEvin4", // ScottHermanFitness — ~1:40
    instructions:
      "Keep palms facing inward throughout the curl. Lift with controlled motion and lower slowly. Avoid swinging and ensure elbows stay close to your torso."
  },

  {
    id: 19,
    name: "Preacher Curl",
    muscle: "Arms",
    equipment: "Machine",
    image: img19,
    url: "https://www.youtube.com/watch?v=3mtXqrkbEfI", // ScottHermanFitness — ~2:15
    instructions:
      "Rest Arms fully on the pad. Curl the weight upward while squeezing biceps. Lower slowly until Arms almost extend. Keep movement smooth and controlled."
  },

  {
    id: 20,
    name: "Tricep Pushdown",
    muscle: "Arms",
    equipment: "Cable",
    image: img20,
    url: "https://www.youtube.com/watch?v=2-LAMcpzODU", // ScottHermanFitness — ~1:25
    instructions:
      "Push the cable handle down while keeping elbows pinned to your sides. Extend fully and squeeze. Return upward slowly without letting elbows flare."
  },

  {
    id: 21,
    name: "Overhead Tricep Extension",
    muscle: "Arms",
    equipment: "Dumbbell",
    image: img21,
    url: "https://www.youtube.com/watch?v=_gsUck-7M74", // ScottHermanFitness — ~2:00
    instructions:
      "Hold a dumbbell overhead with both hands. Lower behind your head and press upward with control. Keep elbows tight and Core engaged."
  },

  {
    id: 22,
    name: "Skullcrusher",
    muscle: "Arms",
    equipment: "Barbell",
    image: img22,
    url: "https://www.youtube.com/watch?v=d_KZxkY_0cM", // ScottHermanFitness — ~2:10
    instructions:
      "Lower the bar toward your forehead by bending elbows. Extend upward while keeping Arms stable. Avoid letting elbows drift outward."
  },

  {
    id: 23,
    name: "Close Grip Bench Press",
    muscle: "Arms",
    equipment: "Barbell",
    image: img23,
    url: "https://www.youtube.com/watch?v=UYJsFzqdgK4", // ScottHermanFitness — ~1:50
    instructions:
      "Grip the bar narrowly and lower to your Chest. Press upward while emphasizing triceps. Keep Core tight and elbows close to your body."
  },

  {
    id: 24,
    name: "Crunches",
    muscle: "Core",
    equipment: "Bodyweight",
    image: img24,
    url: "https://www.youtube.com/watch?v=MKmrqcoCZ-M", // Livestrong / short tutorial — ~1:15
    instructions:
      "Lift your upper torso by contracting your abs. Lower smoothly without dropping your head. Keep movement controlled and avoid pulling your neck."
  },

  {
    id: 25,
    name: "Plank",
    muscle: "Core",
    equipment: "Bodyweight",
    image: img25,
    url: "https://www.youtube.com/watch?v=pSHjTRCQxIw", // Buff Dudes or short tutorial — ~1:20
    instructions:
      "Hold a straight-body position with foreArms on the floor. Keep Core tight, glutes squeezed, and Back neutral. Avoid sagging hips."
  },

  {
    id: 26,
    name: "Hanging Leg Raise",
    muscle: "Core",
    equipment: "Bar",
    image: img26,
    url: "https://www.youtube.com/watch?v=_jLskVdzS4o", 
    instructions:
      "Hang from a bar and lift Legs upward while keeping your Core tight. Lower with control. Avoid swinging or using momentum."
  },

  {
    id: 27,
    name: "Russian Twist",
    muscle: "Core",
    equipment: "Bodyweight",
    image: img27,
    url: "https://www.youtube.com/watch?v=wkD8rjkodUI", 
    instructions:
      "Sit with knees bent and twist your torso side-to-side while keeping Core tight. Maintain balance and avoid rounding your lower Back."
  },

  {
    id: 28,
    name: "Mountain Climbers",
    muscle: "Core",
    equipment: "Bodyweight",
    image: img28,
    url: "https://www.youtube.com/watch?v=nmwgirgXLYM", // short demo — ~1:10
    instructions:
      "Start in a plank and drive your knees alternately toward your Chest. Keep Core tight and maintain steady rhythm without bouncing."
  },

  {
    id: 29,
    name: "Dips",
    muscle: "Chest",
    equipment: "Bodyweight",
    image: img29,
    url: "https://www.youtube.com/watch?v=2z8JmcrW-As", // Buff Dudes or short demo — ~1:55
    instructions:
      "Lower your body by bending elbows while keeping torso slightly forward. Press upward and squeeze Chest at the top. Avoid shrugging your Shoulders."
  },

  {
    id: 30,
    name: "Cable Fly",
    muscle: "Chest",
    equipment: "Cable",
    image: img30,
    url: "https://www.youtube.com/watch?v=8Um35Es-ROE", // short form demo — ~1:50
    instructions:
      "With Arms slightly bent, bring cable handles together in front of your Chest. Squeeze at the midpoint and return slowly. Keep Chest lifted."
  }
];

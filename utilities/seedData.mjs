const seedData = [
  {
    name: "Push-up",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 6, max: 12 },
      },
      {
        goal: "endurance",
        sets: { min: 2, max: 3 },
        reps: { min: 15, max: 30 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Squat",
    recs: [
      {
        goal: "strength",
        sets: { min: 4, max: 6 },
        reps: { min: 3, max: 8 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Deadlift",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 4, max: 8 },
      },
      {
        goal: "endurance",
        sets: { min: 2, max: 3 },
        reps: { min: 10, max: 15 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 6, max: 10 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Bench Press",
    recs: [
      {
        goal: "strength",
        sets: { min: 4, max: 6 },
        reps: { min: 4, max: 10 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Pull-up",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 4, max: 10 },
      },
      {
        goal: "endurance",
        sets: { min: 2, max: 3 },
        reps: { min: 10, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 6, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Lunge",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 6, max: 12 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Shoulder Press",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 5, max: 8 },
      },
      {
        goal: "endurance",
        sets: { min: 2, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Barbell Row",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 4, max: 8 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 10, max: 15 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Lat Pulldown",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 6, max: 10 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Bicep Curl",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 4 },
        reps: { min: 5, max: 10 },
      },
      {
        goal: "endurance",
        sets: { min: 2, max: 3 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Tricep Dips",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 6, max: 12 },
      },
      {
        goal: "endurance",
        sets: { min: 2, max: 3 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Leg Press",
    recs: [
      {
        goal: "strength",
        sets: { min: 4, max: 6 },
        reps: { min: 5, max: 8 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Calf Raise",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 8, max: 12 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 15, max: 25 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Chest Fly",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 5, max: 10 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Leg Curl",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 4, max: 8 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 12, max: 20 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 8, max: 12 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Russian Twist",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 10, max: 20 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 20, max: 30 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 15, max: 25 },
      },
    ],
    similarExercises: [],
  },
  {
    name: "Plank",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 4 },
        reps: { min: 30, max: 60 }, // Time in seconds
      },
      {
        goal: "endurance",
        sets: { min: 2, max: 3 },
        reps: { min: 60, max: 120 }, // Time in seconds
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 45, max: 90 }, // Time in seconds
      },
    ],
    similarExercises: [],
  },
  {
    name: "Mountain Climber",
    recs: [
      {
        goal: "strength",
        sets: { min: 3, max: 5 },
        reps: { min: 15, max: 30 },
      },
      {
        goal: "endurance",
        sets: { min: 3, max: 4 },
        reps: { min: 30, max: 50 },
      },
      {
        goal: "hypertrophy",
        sets: { min: 3, max: 4 },
        reps: { min: 20, max: 40 },
      },
    ],
    similarExercises: [],
  },
];

export default seedData;

'use strict'
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const durations = mondayTasks.map(task => (task.duration)/60);
const total = durations.reduce(function (first, next) {
  return first + next
},0)

function calculateRate(total , hourlyRate) {
  return    total * hourlyRate;
};
console.log(`\u20AC`+calculateRate(total,25).toFixed(2));

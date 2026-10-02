let speed = 640;
let droneClass;

if (speed <= 500) {
  droneClass = "slow";
} else if (speed <= 1000) {
  droneClass = "standard";
} else {
  droneClass = "fast";
}

console.log(speed + " -> " + droneClass);



const flaggedDroneId = "DRN-1300";
const incomingId = "DRN-1300";

if (incomingId === flaggedDroneId) {
  console.log("Hold for inspection");
}



speed = 1300;
const priority = speed > 1000 ? "priority" : "regular";

console.log(priority);

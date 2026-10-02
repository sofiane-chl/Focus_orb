const distanceKm = 12;
const baseFeePerKm = 0.85;

// Target output:
// Base fee: 10.2

console.log("base fee =", distanceKm * baseFeePerKm)

const baseFee = 10.2;
const taxRate = 0.2;

// Target output:
// Tax: 2.04
// Total with tax: 12.24
const tax = baseFee * taxRate

console.log("tax = ", tax )
console.log("total + tax=" , baseFee + tax);


const totalWithTax = 12.24;
const prioritySurcharge = "5"; // arrived from a form field

// What naive addition produces:
// Final total: 12.245    <-- wrong: JavaScript is concatenating strings

// What you need:
// Final total: 17.24

console.log("final total =",totalWithTax+ Number(prioritySurcharge))


const monthlyFleetBudget = 48000;
let activeDrones = 16;

// Target output:
// Cost per drone: 3000
// One drone offline for maintenance.
// Updated cost per drone: 3200

console.log("cout par drone = ", monthlyFleetBudget/activeDrones)
activeDrones= activeDrones - 1
console.log("new cost = ",monthlyFleetBudget/activeDrones)

const flightLog = [142, 89, "37", 210];

// Target output:
// First flight: 142
// Last flight: 210
// Number of flights: 4

console.log("first flight = ", flightLog[0])
//console.log("first flight =:  flightLog[0]")
console.log("last flight = ", flightLog[3])
console.log("last flight = ", flightLog[flightLog.length -1])


// Naive attempt:
console.log("Subtotal:", flightLog[0] + flightLog[1] + Number(flightLog[2]));
// Prints:   Subtotal: 23137    <-- wrong

// Target:
// Subtotal: 268


// After your changes:
// typeof flightLog[2]: number
// Flights logged: 5
// Average distance: 131.2

console.log("flightlog[2] = ", typeof(flightLog[2]))

flightLog.push(178)
console.log("flightlog", flightLog)

console.log("avg = " , (flightLog[0]+ flightLog[1]+Number(flightLog[2])+flightLog[3]+flightLog[4])/ flightLog.length)

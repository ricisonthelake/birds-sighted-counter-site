// *************************************
// Sum and Log laps Lap Counter function
// *************************************
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// let totalTime = lap1 + lap2 + lap3;
// console.log(totalTime);

// *************************************
// Create Lap Time Counter function
// *************************************
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }

// logLapTime();

// *******************************************
// Create Lap Counter increment function
// *******************************************
// let lapsCompleted = 0;

// function incrementLaps() {
//     while (lapsCompleted < 4) {
//         console.log(lapsCompleted);
//         lapsCompleted++;
//     }
// }
// incrementLaps();

let welcomeEl = document.getElementById("welcome-el");

let myName = "riconthelake";
let greeting = "Welcome back ";

welcomeEl.innerText = greeting + myName;
welcomeEl.innerText += "👋";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}


function save() {
    let countStr = count + " - ";
    count = 0;
    countEl.textContent = count;

    saveEl.textContent += countStr;

    console.log(count);
}
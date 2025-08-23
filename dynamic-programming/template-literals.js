// this file explains how template-literals work and provides examples for usecases 
    // template literals allow you to create strings that can dynamically include variables, expressions, and multi-line text
    // they make it easy and readable to insert variable values or expressions directly into strings 
// --------------------------------------------------------------------
// example #1: demonstrates usecase of including a template literal to dynamically insert variables
const name = "Hannah"; 
const timeNow = new Date(); 

// function adjustHours(time) {
//     if (time.getHours() === 0) {
//         adjustedTime = (time.getHours() + 12) + ":" + time.getMinutes() + " AM, enjoy your night."; 
//     } else if (time.getHours() < 6) {
//         adjustedTime = time.getHours() + ":" + time.getMinutes() + " AM, enjoy your night."; 
//     } else if (time.getHours() < 12) { 
//         adjustedTime = time.getHours() + ":" + time.getMinutes() + " AM, enjoy your morning."; 
//     } else if (time.getHours() < 18) {
//         adjustedTime = (time.getHours() - 12) + ":" + time.getMinutes() + " PM, enjoy your afternoon."; 
//     } else if (time.getHours() < 24) {
//         adjustedTime = (time.getHours() - 12) + ":" + time.getMinutes() + " PM, enjoy your evening."; 
//     }
//     return adjustedTime; 
// }

// improved function for efficiency and readability via template literals!

function adjustHours(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    let period = "AM";
    let greeting = "";

    if (hours === 0) {
        hours = 12;
        greeting = "enjoy your night";
    } else if (hours < 6) {
        greeting = "enjoy your night";
    } else if (hours < 12) {
        greeting = "enjoy your morning";
    } else if (hours < 18) {
        period = "PM";
        hours -= 12;
        greeting = "enjoy your afternoon";
    } else {
        period = "PM";
        hours -= 12;
        greeting = "enjoy your evening";
    }
    return `${hours}:${minutes} ${period}, ${greeting}.`;
    // notice how we can dynamically insert each variable into our message 
    // rather than repetitively writing a modified print statement for each if-statement case.
    // this makes our code much cleaner and legible!
}

const message = `Welcome ${name}, the time is ` + adjustHours(timeNow); 
console.log(message);

let date = new Date();
let greeting;

if (date.getHours() < 12) {
  greeting = "Good morning";
} else if (date.getHours() < 18) {
  greeting = "Good Afternoon";
} else if (date.getHours() < 20) {
  greeting = "Good Evening"; // Fixed spelling
} else {
  greeting = "Good Night"; // Simplified condition
}

document.querySelector(".greeting").innerHTML =
  "Hey <span>&#x1F44B;</span> " + greeting; // Added missing semicolon

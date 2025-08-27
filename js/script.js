let age = 20;
let message = "";

if (age >= 18) {
  message = "You are above 18. Welcome.";
} else {
  message = "You are below 18. Access is restricted.";
}

document.getElementById("result1").textContent = message;

function calculateTotal() {
  const price = 100;
  const taxRate = 0.08;
  const total = price + price * taxRate;
  document.getElementById("functionResult").textContent = `Total with tax: $${total.toFixed(2)}`;
}

function formatName(firstName, lastName) {
  const formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  return `${formattedFirst} ${formattedLast}`;
}

console.log(formatName("jOhN", "dOE")); // Logs: John Doe

const sports = ["Football", "Basketball", "Volleyball"];
const loopList = document.getElementById("loopList");

for (let i = 0; i < sports.length; i++) {
  const li = document.createElement("li");
  li.textContent = sports[i];
  loopList.appendChild(li);
}

let count = 5;
const countdownElement = document.getElementById("loopCountdown");

while (count > 0) {
  countdownElement.textContent += count + " ";
  count--;
}
countdownElement.textContent += "Liftoff!";

const toggleButton = document.getElementById("toggleButton");
const toggleMessage = document.getElementById("toggleMessage");

toggleButton.addEventListener("click", function () {
  if (toggleMessage.style.display === "none") {
    toggleMessage.style.display = "block";
  } else {
    toggleMessage.style.display = "none";
  }
});

const textInput = document.getElementById("textInput");
const dynamicText = document.getElementById("dynamicText");

textInput.addEventListener("input", function () {
  dynamicText.textContent = "Your Message: " + textInput.value;
});

document.body.addEventListener("click", function () {
  document.body.style.backgroundColor = document.body.style.backgroundColor === "lightgrren" ? "white" : "lightgreen";
});
const nameInput = prompt("Enter your name:");
const surnameInput = prompt("Enter your surname:");
const emailInput = prompt("Enter your email:");
const ageInput = prompt("Enter your age:");
const genderInput = prompt("Enter your gender:");

const rationalInput = prompt("Enter your rational:");
const doaInput = prompt("Enter your DOA:");
const taskInput = prompt("Enter your task:");
const placeInput = prompt("Enter your place:");

const studyInput = prompt("Enter your area of study:");
const degreeInput = prompt("Enter your highest degree:");
const universityInput = prompt("Enter your university:");
const yearInput = prompt("Enter your completion year:");


document.getElementById("name").textContent = nameInput;
document.getElementById("surname").textContent = surnameInput;
document.getElementById("email").textContent = emailInput;
document.getElementById("age").textContent = ageInput;
document.getElementById("gender").textContent = genderInput;
document.getElementById("rational").textContent = rationalInput;
document.getElementById("doa").textContent = doaInput;
document.getElementById("task").textContent = taskInput;
document.getElementById("place").textContent = placeInput;
document.getElementById("study").textContent = studyInput;
document.getElementById("degree").textContent = degreeInput;
document.getElementById("university").textContent = universityInput;
document.getElementById("year").textContent = yearInput;


const progress = document.getElementById("progress-bar");
const nextBtn = document.getElementById("next-btn");
const skipBtn = document.getElementById("skip-btn");

let step = 1;
nextBtn.addEventListener("click", () => {
    if (step === 1) {
        progress.style.width = "33.33%";
        step++;
    } else if (step === 2) {
        progress.style.width = "66.66%";
        step++;
    } else if (step === 3) {
        progress.style.width = "100%";
        step++;
        nextBtn.textContent = "Complete";
    } else {
        alert("Profile completed!");
    }
});

skipBtn.addEventListener("click", () => {
    if (step === 1) {
        progress.style.width = "33.33%";
        step++;
    } else if (step === 2) {
        progress.style.width = "66.66%";
        step++;
    } else if (step === 3) {
        progress.style.width = "100%";
        step++;
        nextBtn.textContent = "Complete";
    } else {
        alert("Profile completed!");
    }
});
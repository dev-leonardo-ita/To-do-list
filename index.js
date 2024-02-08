"use strict";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorBox = document.getElementById("errorBoxTest");

console.log(errorBox);

function addTask() {
  if (inputBox.value === "") {
    errorBox.style.display = "block";
  } else {
    errorBox.style.display = "none";
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

document.addEventListener("keydown", function (pressedKey) {
  console.log(pressedKey.key);
  if (pressedKey.key === "Enter" && inputBox.value !== "") {
    errorBox.style.display = "none";
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

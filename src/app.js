import { alert, success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const keys = ["a", "s", "d", "f", "j", "k", "l", "m", "q", "w"];
let currentKeyIndex = 0;

function startKey() {
  document.querySelector("#key").textContent = keys[currentKeyIndex];
}

function start() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  startKey();
  success({
    text: "Гра розпочата! Натисніть клавішу.",
  });
}

document.addEventListener("keydown", (event) => {
  const pressed = event.key.toLowerCase();
  const required = keys[currentKeyIndex].toLowerCase();

  if (pressed === required) {
    success({
      text: `Правильно! Ви натиснули "${event.key}"`,
    });
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    startKey();
  } else {
    error({
      text: `Помилка! Ви натиснули "${event.key}"`,
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

document.querySelector(".btn").addEventListener("click", start);


"use strict";
//Selecting elements

const rollBall = document.querySelector(".btn-roll");
const ballE1 = document.querySelector(".ball");
const current = document.getElementById("current1");

let playing;

//starting conditions

const init = function () {
  playing = true;
  ballE1.classList.add("hidden");
};

init();

// rolling ball functionality

rollBall.addEventListener("click", function () {
  if (playing) {
    //generating random ball number

    let ball = Math.floor(Math.random() * 4) + 1;

    //displaying ball
    ballE1.classList.remove("hidden");
    ballE1.src = `ball-${ball}.webp`;

    if (ball === 1) {
      document.getElementById("current1").textContent = "YES HE IS!";
    } else if (ball === 2) {
      document.getElementById("current1").textContent = "HE MOST CERTANLY IS!";
    } else if (ball === 3) {
      document.getElementById("current1").textContent = "HE IS A LITTLE BIT.";
    } else if (ball === 4) {
      document.getElementById("current1").textContent = "OPEN FOR SUGESTIONS.";
    }
  }
});

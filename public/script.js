"use strict";

// Variables & Functions
// VARIABLES
const player0 = document.getElementById(`player-0`);
const player1 = document.getElementById(`player-1`);

const player0Title = document.querySelector(`.player-0-title`);
const player1Title = document.querySelector(`.player-1-title`);

const overlay = document.getElementById(`overlay`);
const modalWindow = document.getElementById(`rules-modal`);
const modalCloseBtn = document.getElementById(`modal-close-btn`);

const newBtn = document.getElementById(`new-btn`);
const rulesBtn = document.getElementById(`rules-btn`);
const rollBtn = document.getElementById(`roll-btn`);
const holdBtn = document.getElementById(`hold-btn`);

const dice = document.getElementById(`dice-image`);

let playingStatus = true;

let activePlayer = 0;

let currentScore = 0;

let scores = [0, 0];

// FUNCTIONS
const reloadPage = function () {
  window.location.reload();
};

const showModal = function () {
  modalWindow.classList.remove(`invisible`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modalWindow.classList.add(`invisible`);
  overlay.classList.add(`hidden`);
};

const switchPlayer = function () {
  // Reset the current score
  document.querySelector(`.current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Switch player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Switch the "active player" UI
  player0.classList.toggle(`bg-white/40`);
  player1.classList.toggle(`bg-white/40`);

  player0Title.classList.toggle(`font-semibold`);
  player1Title.classList.toggle(`font-semibold`);
};

// APPLICATION
// "NEW" Button
newBtn.addEventListener(`click`, reloadPage);

// Rules Modal Window
// "RULES" Button
rulesBtn.addEventListener(`click`, showModal);

// Rules Modal "X" close button
modalCloseBtn.addEventListener(`click`, closeModal);

// Rules Modal Overlay close
overlay.addEventListener(`click`, closeModal);

// "Roll Dice" Button
rollBtn.addEventListener(`click`, function () {
  if (playingStatus) {
    // Secret Number Generator
    const secretNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(secretNumber);

    // Dice Image
    dice.classList.remove(`hidden`);
    dice.src = `images/dice-${secretNumber}.png`;

    // Current Tab Score
    if (secretNumber !== 1) {
      currentScore = currentScore + secretNumber;
      document.querySelector(`.current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// "Hold" Button
holdBtn.addEventListener(`click`, function () {
  if (playingStatus) {
    // Current score transfer
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Player Score >= 100
    // Player win
    if (scores[activePlayer] >= 100) {
      playingStatus = false;
      document.querySelector(`.current--${activePlayer}`).textContent = 0;
      document
        .getElementById(`player-${activePlayer}`)
        .classList.remove(`bg-white/40`);
      document
        .getElementById(`player-${activePlayer}`)
        .classList.add(`bg-green-500`);
      document
        .querySelector(`.player-${activePlayer}-title`)
        .classList.toggle(`animate-bounce`);
      dice.classList.add(`hidden`);
    } else {
      // Player Score < 100
      // Switch the player
      switchPlayer();
    }
  }
});

// Keyboard Feature
document.addEventListener(`keydown`, function (event) {
  if (event.key === "Escape") {
    // "ESC" key => close modal window
    event.preventDefault();
    modalCloseBtn.click();
  } else if (event.key === `Enter`) {
    // "ENTER" key => roll the dice
    event.preventDefault();
    rollBtn.click();
  } else if (event.key === ` `) {
    // "SPACE" bar => hold the current score
    event.preventDefault();
    holdBtn.click();
  }
});

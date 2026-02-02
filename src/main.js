"use strict";

// Import images from "src" folder
const diceImages = import.meta.glob(`/src/assets/images/dice-*.png`, {
  eager: true,
  import: `default`,
});

// Variables & Functions
// VARIABLES
const player0 = document.getElementById(`player-0`);
const player1 = document.getElementById(`player-1`);

const player0Title = document.querySelector(`.player-0-title`);
const player1Title = document.querySelector(`.player-1-title`);

const overlay = document.getElementById(`overlay`);
const modalWindow = document.getElementById(`rules-modal`);
const modalCloseBtn = document.getElementById(`modal-close-btn`);

const maxScoreModal = document.getElementById(`max-score-modal`);
const maxScore25 = document.getElementById(`max-score-25`);
const maxScore50 = document.getElementById(`max-score-50`);
const maxScore75 = document.getElementById(`max-score-75`);
const maxScore100 = document.getElementById(`max-score-100`);

const newBtn = document.getElementById(`new-btn`);
const rulesBtn = document.getElementById(`rules-btn`);
const maxScoreBtn = document.getElementById(`max-score-btn`);
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

const maxScoreCloseModal = function () {
  maxScoreModal.classList.toggle(`scale-y-0`);
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

const maxScoreActiveBtn = function () {
  maxScoreBtn.classList.toggle(`bg-white/80`);
  maxScoreBtn.classList.toggle(`bg-white`);
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

// Max Score Feature
// Max Score button
maxScoreBtn.addEventListener(`click`, function () {
  maxScoreCloseModal();
  maxScoreActiveBtn();
});

// Max Score "25" option
maxScore25.addEventListener(`click`, () => {
  maxScoreCloseModal();
});

// Max Score "50" option
maxScore50.addEventListener(`click`, () => {
  maxScoreCloseModal();
});

// Max Score "75" option
maxScore75.addEventListener(`click`, () => {
  maxScoreCloseModal();
});

// Max Score "100" option
maxScore100.addEventListener(`click`, () => {
  maxScoreCloseModal();
});

// "Roll Dice" Button
rollBtn.addEventListener(`click`, function () {
  // Winning score button
  maxScoreBtn.classList.add(`hidden`);
  maxScoreModal.classList.add(`hidden`);

  if (playingStatus) {
    // Secret Number Generator
    const secretNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(secretNumber);

    // Dice Image
    dice.classList.remove(`hidden`);
    dice.src = diceImages[`/src/assets/images/dice-${secretNumber}.png`];

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

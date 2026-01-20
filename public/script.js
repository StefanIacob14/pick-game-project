"use strict";

// Variables & Functions
// Variables
const overlay = document.getElementById(`overlay`);
const modalWindow = document.getElementById(`rules-modal`);
const modalCloseBtn = document.getElementById(`modal-close-btn`);

const newBtn = document.getElementById(`new-btn`);
const rulesBtn = document.getElementById(`rules-btn`);
const rollBtn = document.getElementById(`roll-btn`);
const holdBtn = document.getElementById(`hold-btn`);

// Functions
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

// Application

// Rules Modal Window
// "RULES" Button
rulesBtn.addEventListener(`click`, showModal);

// Rules Modal "X" close button
modalCloseBtn.addEventListener(`click`, closeModal);

// Rules Modal Overlay close
overlay.addEventListener(`click`, closeModal);

// Keyboard Feature
document.addEventListener(`keydown`, function (event) {
  if (event.key === "Escape") {
    event.preventDefault();
    modalCloseBtn.click();
  }
});

// "NEW" Button
newBtn.addEventListener(`click`, reloadPage);

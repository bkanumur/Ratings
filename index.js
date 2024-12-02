const starsEl = document.querySelectorAll(".fa-star");
const emojiDisplayEl = document.querySelector(".emoji-display i");
const feedbackTextEl = document.querySelector(".feedback-text");
const resetBtn = document.querySelector(".reset-btn");
const body = document.body;

const colorsArray = [
  "radial-gradient(circle, #ff4e50, #f9d423)",
  "radial-gradient(circle, #fbc2eb, #a6c1ee)",
  "radial-gradient(circle, #ffecd2, #fcb69f)",
  "radial-gradient(circle, #76b852, #8dc26f)",
  "radial-gradient(circle, #43cea2, #185a9d)"
];

const emojiClasses = [
  "fa-angry",
  "fa-frown",
  "fa-meh",
  "fa-smile",
  "fa-laugh"
];

const feedbackMessages = [
  "Very Bad",
  "Bad",
  "Okay",
  "Good",
  "Excellent"
];

resetBtn.addEventListener("click", resetRating);

starsEl.forEach((starEl, index) => {
  starEl.addEventListener("mouseover", () => updateRating(index));
  starEl.addEventListener("click", () => lockRating(index));
});

function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    starEl.classList.toggle("active", idx <= index);
  });

  emojiDisplayEl.className = `far ${emojiClasses[index]} fa-8x`;
  feedbackTextEl.textContent = feedbackMessages[index];
  body.style.background = colorsArray[index];
}

function lockRating(index) {
  starsEl.forEach((starEl, idx) => {
    starEl.classList.add("locked");
  });
}

function resetRating() {
  starsEl.forEach(starEl => {
    starEl.classList.remove("active", "locked");
  });
  emojiDisplayEl.className = "far fa-meh fa-6x";
  feedbackTextEl.textContent = "Hover over stars to rate!";
  body.style.background = "radial-gradient(circle, #ffffff, #f0f8ff)";
}
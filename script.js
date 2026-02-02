// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

noBtn.addEventListener("mouseover", () => {
  const rect = noBtn.getBoundingClientRect();

  const padding = 20;

  const minDistance = 80;
  const maxDistance = 180;

  const distance =
    Math.random() * (maxDistance - minDistance) + minDistance;
  const angle = Math.random() * Math.PI * 2;

  let moveX = Math.cos(angle) * distance;
  let moveY = Math.sin(angle) * distance;

  if (rect.left + moveX < padding) {
    moveX = padding - rect.left;
  }
  if (rect.right + moveX > window.innerWidth - padding) {
    moveX = window.innerWidth - padding - rect.right;
  }

  if (rect.top + moveY < padding) {
    moveY = padding - rect.top;
  }
  if (rect.bottom + moveY > window.innerHeight - padding) {
    moveY = window.innerHeight - padding - rect.bottom;
  }

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

noBtn.addEventListener("mouseenter", () => {
  const rect = noBtn.getBoundingClientRect();

  const padding = 20;

  const minDistance = 80;
  const maxDistance = 180;

  const distance =
    Math.random() * (maxDistance - minDistance) + minDistance;
  const angle = Math.random() * Math.PI * 2;

  let moveX = Math.cos(angle) * distance;
  let moveY = Math.sin(angle) * distance;

  if (rect.left + moveX < padding) {
    moveX = padding - rect.left;
  }
  if (rect.right + moveX > window.innerWidth - padding) {
    moveX = window.innerWidth - padding - rect.right;
  }

  if (rect.top + moveY < padding) {
    moveY = padding - rect.top;
  }
  if (rect.bottom + moveY > window.innerHeight - padding) {
    moveY = window.innerHeight - padding - rect.bottom;
  }

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

noBtn.addEventListener("click", () => {
  const rect = noBtn.getBoundingClientRect();

  const padding = 20;

  const minDistance = 80;
  const maxDistance = 180;

  const distance =
    Math.random() * (maxDistance - minDistance) + minDistance;
  const angle = Math.random() * Math.PI * 2;

  let moveX = Math.cos(angle) * distance;
  let moveY = Math.sin(angle) * distance;

  if (rect.left + moveX < padding) {
    moveX = padding - rect.left;
  }
  if (rect.right + moveX > window.innerWidth - padding) {
    moveX = window.innerWidth - padding - rect.right;
  }

  if (rect.top + moveY < padding) {
    moveY = padding - rect.top;
  }
  if (rect.bottom + moveY > window.innerHeight - padding) {
    moveY = window.innerHeight - padding - rect.bottom;
  }

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
  title.textContent = "Love You So Much Babe 😘";

  // Create video element
  const video = document.createElement("video");
  video.src = "/mine_gif.mp4";
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.id = "vide_gif";

  // Replace image with video
  catImg.replaceWith(video);

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});


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

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

function moveNoButton() {
  const windowEl = document.querySelector(".letter-window");
  const rect = windowEl.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Maksymalny ruch tak, by przycisk pozostał w oknie
  const maxX = (rect.width / 2) - (btnRect.width / 2) - 12;
  const maxY = (rect.height / 2) - (btnRect.height / 2) - 12;

  // Losuj przesunięcie w bezpiecznych granicach
  const moveX = (Math.random() * 2 - 1) * Math.max(40, maxX);
  const moveY = (Math.random() * 2 - 1) * Math.max(30, maxY);

  // Clamp (żeby nie wyszło poza okno)
  const clampedX = Math.max(-maxX, Math.min(maxX, moveX));
  const clampedY = Math.max(-maxY, Math.min(maxY, moveY));

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
}

noBtn.addEventListener("pointerenter", moveNoButton); // PC
noBtn.addEventListener("pointerdown", (e) => {        // telefon
  e.preventDefault();
  moveNoButton();
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
    title.textContent = "Reeeeaaaaalllyyy?";

    catImg.src = "after_yes.jpg";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

function nextStep() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function playMusic() {
  document.getElementById("music").src =
    "https://www.youtube.com/watch?v=MqazV4hbu8E&list=RDMqazV4hbu8E&start_radio=1";
}

function yesClicked() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
  confetti();
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

/* Confetti hearts */
function confetti() {
  for (let i = 0; i < 80; i++) {
    const span = document.createElement("span");
    span.innerHTML = "💖";
    span.style.position = "fixed";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "-10px";
    span.style.fontSize = "24px";
    span.style.animation = "fall 3s linear";
    document.body.appendChild(span);

    setTimeout(() => span.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}`;
document.head.appendChild(style);

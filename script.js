
//tutte le variabili disponibili- id
const disco = document.getElementById("disco");
const canzone = document.getElementById("canzone");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnPause = document.getElementById("pausa");

btnStart.addEventListener("click", function () {
  canzone.play();
  disco.classList.add("ruota");
  disco.style.animationPlayState = "running";

  btnStart.disabled = true;
  btnStop.disabled = false;
  btnPause.disabled = false;
  btnPause.textContent = "PAUSA";
});

btnStop.addEventListener("click", function () {
  canzone.pause();
  canzone.currentTime = 0;
  disco.classList.remove("ruota");

  btnStart.disabled = false;
  btnStop.disabled = true;
  btnPause.disabled = true;
  btnPause.textContent = "PAUSA";
});

btnPause.addEventListener("click", function () {
  if (canzone.paused) {
    canzone.play();
    disco.style.animationPlayState = "running";
    btnPause.textContent = "PAUSA";
  } else {
    canzone.pause();
    disco.style.animationPlayState = "paused";
    btnPause.textContent = "RIPRENDI";
  }
});
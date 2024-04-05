const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let intervalId;
let startTime;
let elapsedTime = 0;

function updateTimer() {
  const totalSeconds = Math.floor((Date.now() - startTime) / 1000) + elapsedTime;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  if (!intervalId) {
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime += (Date.now() - startTime) / 1000;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  elapsedTime = 0;
  timer.textContent = '00:00:00';
});
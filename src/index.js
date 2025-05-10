const timerElement = document.querySelector('#timer-1');
const daysElement = timerElement.querySelector('[data-value="days"]');
const hoursElement = timerElement.querySelector('[data-value="hours"]');
const minsElement = timerElement.querySelector('[data-value="mins"]');
const secsElement = timerElement.querySelector('[data-value="secs"]');

const targetDate = new Date('Jun 17, 2025');

function updateTimer() {
  const currentTime = new Date();
  const time = targetDate - currentTime;
  
  if (time <= 0) {
    clearInterval(timerInterval);
    displayTime(0, 0, 0, 0);
    return;
  }
  
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  
  displayTime(days, hours, mins, secs);
}

function displayTime(days, hours, mins, secs) {
  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minsElement.textContent = mins.toString().padStart(2, '0');
  secsElement.textContent = secs.toString().padStart(2, '0');
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();


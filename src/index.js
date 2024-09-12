// 1

// const btn = document.querySelector('.btn');
// const display = document.querySelector('.display');

// btn.addEventListener('click', initTimer);

// let totalMinutes = 60;
// let intervalId = null;

// function timeFormat(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const minutesLeft = minutes % 60;

//   const formatHours = hours.toString().padStart(2, '0');
//   const formatminutes = minutesLeft.toString().padStart(2, '0');
//   return `${formatHours} : ${formatminutes}`;
// }

// function updateDisplay() {
//   display.textContent = timeFormat(totalMinutes);
// }

// function initTimer() {
//   if (intervalId) {
//     return;
//   }

//   btn.disable = true;

//   intervalId = setInterval(() => {
//     totalMinutes--;
//     updateDisplay();

//     if (totalMinutes === 30) {
//       alert('30 minutes left!');
//     }
//     if (totalMinutes === 0) {
//       clearInterval(intervalId);
//       intervalId = null;
//       btn.disable = false;
//       console.log("Times's up!");
//     }
//   }, 1000);
// }

// 2

// const btn = document.querySelector('.btn');
// const display = document.querySelector('.display');

// btn.addEventListener('click', initTimer);

// let totalMinutes = 30000;
// let intervalId = null;
// let isAnimated = false;

// function timeFormat(miliseconds) {
//   const seconds = Math.floor(miliseconds / 1000);
//   const milisecondsLeft = miliseconds % 1000;

//   const formatSeconds = seconds.toString().padStart(2, '0');
//   const formatMiliseconds = milisecondsLeft.toString().padStart(3, '0');
//   return `${formatSeconds}.${formatMiliseconds}`;
// }

// function updateDisplay() {
//   display.textContent = `00:${timeFormat(totalMinutes)}`;
// }

// function initTimer() {
//   if (intervalId) {
//     return;
//   }

//   btn.disable = true;

//   intervalId = setInterval(() => {
//     totalMinutes--;
//     updateDisplay();

//     if (totalMinutes <= 10000) {
//       display.classList.add('animate');
//       isAnimated = true;
//     }
//     if (totalMinutes === 0) {
//       clearInterval(intervalId);
//       intervalId = null;
//       btn.disable = false;
//       display.classList.remove('animate');
//       console.log("Times's up!");
//     }
//   }, 1);
// }

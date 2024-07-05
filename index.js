let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
// let endDate = new Date(2025, 0, 1, 0, 0);
// let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  console.log(todayDate)
  let endDate_new = todayDate.getFullYear();
  endDate_new += 1;
  let endDate_new_date = new Date(endDate_new, 0, 1, 0, 0);
  let endTime = endDate_new_date.getTime();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  const heading = document.getElementById('year_id');
  heading.textContent = endDate_new;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown Has Expired</h1>`;
  } else {
    console.log("remaining_time is: ")
    console.log(remainingTime)
    let daysLeft = Math.floor(remainingTime / oneDay);
    console.log(daysLeft);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    console.log(hrsLeft)
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

let i = setInterval(countdown, 1000);
countdown();

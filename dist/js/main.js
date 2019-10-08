const countdown = document.querySelector(".countdown");

//set launch date
const launchDate = new Date("Oct 20, 2019 13:00:00").getTime();

//update every second
const intvl = setInterval(() => {
  //todays date
  const now = new Date().getTime();

  //distance from now to launch date
  const distance = launchDate - now;

  //time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  //display result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>hours</span></div>
    <div>${mins}<span>mins</span></div>
    <div>${secs}<span>secs</span></div>
  `;
  //if launchdate passed
  if (distance < 0) {
    //stop countdown
    clearInterval(intvl);
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = `Launched!`;
  }
}, 1000);

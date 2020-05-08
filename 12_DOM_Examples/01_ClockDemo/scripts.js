function setClock() {
  const hoursHand = document.querySelector(".hours");
  const minutesHand = document.querySelector(".minutes");
  const secondsHand = document.querySelector(".seconds");

  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let hoursAngle = (360 * hours) / 12;
  let minutesAngle = (360 * minutes) / 60;
  let secondsAngle = (360 * seconds) / 60;

  hoursHand.style.transform = `rotate(${hoursAngle}deg) translate(0, -50%)`;
  minutesHand.style.transform = `rotate(${minutesAngle}deg) translate(0, -50%)`;
  secondsHand.style.transform = `rotate(${secondsAngle}deg) translate(0, -50%)`;
}

setInterval(setClock, 1000);

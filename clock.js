function showTime() {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let am_pm = hour >= 12 ? "PM" : "AM";

  // convert to 12 hour format
  hour = hour % 12;
  hpur = hour ? hour : 12;

  // If the time is less than 10, add a 0 before it
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  // display the time in the element with id="clock"

  document.getElementById("clock").innerHTML =
    hour + ":" + minute + ":" + second + " " + am_pm;
  setTimeout(showTime, 1000);
}
showTime();

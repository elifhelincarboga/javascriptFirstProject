let person = prompt("Please enter your name", "");
document.getElementById('myName').innerHTML = person

function showTime() {
  let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let dayAsNumber = currentDate.getDay();
  let dayAsString = days[dayAsNumber];

  let totalDate = `${hours}:${minutes}:${seconds} ${dayAsString}`
  document.getElementById('myClock').innerHTML = totalDate
  setInterval(showTime, 1000);
}
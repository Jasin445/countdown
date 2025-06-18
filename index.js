
let container = document.querySelectorAll(".overall-container h1");
let container1 = document.querySelector(".overall-container");

let dates = document.querySelector(".dates");

let theDate = new Date(2025, 7, 12, 12, 0, 0);
 
 dates.innerHTML = `This Giveaway is ongoing and ends on ${theDate.toUTCString()}`;
  

function displayTime() {
  let currentDate = new Date();
  const countdown = theDate - currentDate;


  let oneday = (24 * 60 * 60 * 1000);
  let days = Math.floor(countdown / oneday);
  let daysMs = countdown % oneday;
  let hoursMs =  countdown % (60 * 60 * 1000);
  let minMs = countdown % (60 * 1000);
  let hours = Math.floor(daysMs  / (60 * 60 * 1000));
  let minutes = Math.floor(hoursMs / (60 * 1000));
  let seconds = Math.floor(minMs / 1000);
 

  let timeArray = [days, hours, minutes, seconds];

 
  // let p = tag.join("");
  
  
  container.forEach((time, index) => {
    time.innerHTML = padStart(timeArray[index]);
  })

  function padStart(item) {
    if (item < 10) {
      item = `0${item}`
    }
    return item;
    
  }
  
  if (countdown < 0) {
    clearInterval(theCountdown);
  container1.innerHTML = `<p class="expired">Sorry, the Giveaway has expired!!</p>`;
    dates.innerHTML = "";
  }
  
 
}
// displayTime();

let theCountdown = setInterval(displayTime, 1000)

displayTime();

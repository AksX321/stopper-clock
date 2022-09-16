let h = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

let hour = 0
let minutes = 0
let seconds = 0

var myInterval = setInterval(myTimer, 1000)
clearInterval(myInterval)

document.getElementById("start").addEventListener("click", start)

function start() {
   window.myInterval = setInterval(myTimer, 1000)
   document.getElementById("stop").addEventListener("click", stop)
   document.getElementById("start").removeEventListener("click", start)
}

function myTimer() {
    seconds++
    sec.innerText = seconds;
    if(seconds >= 60) {
      minutes++
      min.innerText = minutes + ":" 
      seconds -= seconds
      sec.innerText ="0"
    }
      
      if(minutes >= 60) {
        min.innerText = minutes + ":" 
        hour++
        min.innerText = "0"
        h.innerText = hour + ":" 
        minutes -= minutes
        minutes.innerText ="0"
      }
      if(hour >= 1) {
        min.innerText = minutes + ":"
      }

      if(seconds < 10) {
        sec.textContent = "0" + seconds
      }

      if(minutes < 10) {
        min.textContent = `0${minutes}:`
      }

      if(hour < 10) {
        h.textContent = `0${hour}:`
      }
} 

document.getElementById("pause").addEventListener("click", pause)
function pause() {
  clearInterval(myInterval);
  document.getElementById("start").addEventListener("click", start)
}



function stop() {
  clearInterval(myInterval);
  seconds -= seconds
  minutes -= minutes
  hour -= hour
  document.getElementById("start").addEventListener("click", start)
  document.getElementById("stop").removeEventListener("click", stop)
  sec.innerText = "00"
  min.innerText = "00:"
  h.innerText = "00:"
}
document.getElementById("save").addEventListener("click", save)

function save() {
const box = document.getElementById('saves');
const date = new Date()
const el = document.createElement('div');
const savedtime = document.createElement("p")
el.textContent = document.getElementById("hour").innerHTML+document.getElementById("min").innerHTML+document.getElementById("sec").innerHTML;
savedtime.textContent = date.toLocaleString()
el.setAttribute('id', `localStorage-time`)
savedtime.setAttribute('id', `localStorage-date`)
box.appendChild(el);
box.appendChild(savedtime)
}

document.getElementById("clear").addEventListener("click", clear)

function clear() {
  const box = document.getElementById('saves');
  while(box.childElementCount > 0) {
    box.removeChild(box.firstChild)
  }
}
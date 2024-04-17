const modal = document.querySelector(".container");
const btn_abrir = document.getElementById("btn-open");

const horas = document.getElementById("horas");

function onOpen() {
    modal.classList.add("active");
    btn_abrir.disabled = true;
}

function onClose() {
    modal.classList.remove("active");
    btn_abrir.disabled = false;
}
  
  function startTime(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
  
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
  
    if (hour < 7) {
      document.body.style.backgroundColor = "#add8e6"; 
      horas.innerHTML = `Está de manhã - Agora são: ${hour}:${minutes}:${seconds}`;
    } else if (hour < 18) {
      document.body.style.backgroundColor = "#3498db"; 
      horas.innerHTML = `Está de tarde - Agora são: ${hour}:${minutes}:${seconds}`;
    } else {
      document.body.style.backgroundColor = "#293738"; 
      horas.innerHTML = `Está de noite - Agora são: ${hour}:${minutes}:${seconds}`;
    }
  
    time = setTimeout('startTime()', 500);
}
  
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
  
startTime();
  


function onOpen() {
    modal.classList.add("active");
    btn_abrir.disabled = true;
}
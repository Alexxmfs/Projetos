window.onload = function() {

  var segundos = 00;
  var mileseg = 00;
  var appendmileseg = document.getElementById("mileseg")
  var appendsegundos = document.getElementById("segundos")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function() {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function(){
    clearInterval(Interval);
  }

  buttonReset.onclick = function() {
    clearInterval(Interval);
    mileseg = "00";
    segundos = "00";
    appendmileseg.innerHTML = mileseg;
    appendsegundos.innerHTML = segundos;
  }

  function startTimer () {
    mileseg++;
  
  if(mileseg <= 9){
    appendmileseg.innerHTML = "0" + mileseg;
  }

  if(mileseg > 9){
    appendmileseg.innerHTML = mileseg;

  }

  if(mileseg > 99){
    console.log("seconds");
    segundos++;
    appendsegundos.innerHTML = "0" + segundos;
    mileseg = 0;
    appendmileseg.innerHTML = "0" + 0;
  }

  if(segundos > 9){
    appendsegundos.innerHTML = segundos;

  }  
  
  }

}
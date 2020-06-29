document.getElementById("Generate").addEventListener("click", Generate);
document.getElementById("Decode").addEventListener("click", Decode);

function Generate(){
  var inputTxt = document.getElementById('txt');

  if (!inputTxt.value){
      alert('digite ');

      return;
  }
  var Base64 = btoa(inputTxt.value);
  var span = document.createElement('span');

  span.innerHTML = Base64;

  var result = document.getElementById('result');
  result.appendChild(span);
}

function Decode(){
  var inputTxt = document.getElementById('txt');

  if (!inputTxt.value){
      alert('digite ');

      return;
  }
  var Base64 = atob(inputTxt.value);
  var span = document.createElement('span');

  span.innerHTML = Base64;

  var result = document.getElementById('result');
  result.appendChild(span);
  }
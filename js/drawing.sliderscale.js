var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;


function setStampScale(){

     stampScale = rangeslider.value;
     stampSize = 250 * stampScale;
     output.innerHTML = rangeslider.value;

}





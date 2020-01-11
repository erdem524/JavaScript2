//  not finished, still working on it!!!
let secMin = 25;
let sessSec = 0; 

let breakMin = 5;
let breakSec = 0;

let currMin = sessMin;
let currSec= sessSec;

let running = false;
let intID; 
let session = true; 

$(document).ready(function(){

  $('#bdown').click(function(e){
e.preventDefault()
if(running){
  let curr = parseInt($('#b').text())
  if(curr > 0) {
    curr--
  }
  breakMin = curr;
  $('#b').text(curr)
}
  })
}

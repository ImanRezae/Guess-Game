                                                    // none graphic
const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const in3 = document.getElementById("in3");
const body = document.getElementById("body");
const btn1 = document.querySelector("btn1");


let min;
let max;
let guess = Math.floor( (min+max)-((min+max)/2) );
let answer = 25; // I chose it number
var isEqual = false;


window.alert("Please do not enter (negative number) and two number equal...");
  resun1 = prompt(`please enter lover number :`);
  min = Number(resun1);
  resun2 = prompt(`please enter hihger number :`);
  max = Number(resun2);
  
  window.alert(`number of guesses required : ${Math.ceil(Math.log2(max - min))}times`);

function newGuess() {

  guess = Math.floor( (min+max)-((min+max)/2) );
  return guess;
}


while (true) {
  
  if ( min === max || min < 0 || max < 0 || max < min) {
    alert("error! try again...");
    
    break;
  }
  
  newGuess();
  response = prompt(`is this a your number ${guess} or lover/higher/yes?
     higher : H , Lover : L , Yes : Y`);
  if ( response === "y") {
    
    alert(`your number is ${guess}...`);
    break;
  }else if ( response === "h" ) {

    min = guess;
    
  }else if ( response === "l" ) {
    
    max = guess;
  }

}


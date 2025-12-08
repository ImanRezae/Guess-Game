const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const in3 = document.getElementById("in3");
const body = document.getElementById("body");
const btn1 = document.querySelector(".btn1");
const h3 = document.querySelector(".h3");
const h33 = document.querySelector(".h33");


let min;
let max;
let guess = Math.floor( (min+max)-((min+max)/2) );
var isEqual = false;


  min = Number(in1.value);
  max = Number(in2.value);


btn1.addEventListener('click' , () => {
  
  h3.innerHTML = "Please do not enter (negative number) and two number equal...";
  setTimeout(() =>{
    h3.innerHTML = `number of guesses required : ${Math.ceil(Math.log2(max - min))}times`;
  } , 7000);
  main(); // get value
  main(); // run function with new value
})
function newGuess() {

  guess = Math.floor( (min+max)-((min+max)/2) );
  return guess;
}

function main(){

  input = in3.value;
while (true) {
  
  if ( min === max || min < 0 || max < 0 || max < min) {
    h3.innerHTML = "error! try again...";
    
    break;
  }
  
  newGuess();
  h33.innerHTML = `is this your number ${guess} or lover/higher/yes?
     higher : H , Lover : L , Yes : Y`;
     if ( input === "") {
      break;
      
     }
  if ( input === "y") {
    
    h33.innerHTML = `your number is ${guess}...`;
    in3.value = "";
    break;
  }else if ( input === "h" ) {

    min = guess;
    in3.value = "";
    console.log(in3.value);
    
    break;
    
  }else if ( in3.value === "l" ) {
    
    max = guess;
    in3.value = "";
    break;
    
  }

}
}

    // Use Enter for start
in3.addEventListener('keydown' , (e) => {

  if (e.key == "Enter") {

    btn1.click();
  }
})

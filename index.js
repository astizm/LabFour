/*LabFour - functioning binary converter

function decimalNumber(x){

x = x / (2 ^ 10)
console.log(Math.floor(x))

}

console.log(decimalNumber(1101)) 

first attempt*/

// Second attempt
function decimalNumber(x){
    var x = 1010101111
    console.log(parseInt(x, 2)) //687
   console.log(Math.pow(2, 10)) //1024

}
console.log(decimalNumber(1010))

//Probably should have done some sort of array and an if/while loop. my braind hurts and it's dinner time...
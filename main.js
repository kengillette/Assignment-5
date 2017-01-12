/*=========================================================
    Exercies 1
*/
function addNumbers(numberA, numberB) {
  return(numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

/*=========================================================
    Exercies 2-1
*/

function yell (sentence){
  return(sentence.toUpperCase())
}
var awesome = yell("This is awesome")

console.log(awesome)

/*=========================================================
    Exercies 2-2
*/
setInterval(oneSecond, 1000);
function yell (sentence){
  return(sentence.toUpperCase())
}
var awesome = yell("This is awesome")
var number = 1;
function oneSecond () {
  if(number <= 10) {
console.log(awesome)
    number++;
  }
};

/*=========================================================
    Exercies 3
*/
function longest(string){
  var string1 = "This is a short string";
  var string2 = "This is a very long string";
  var longestString = 0;
  if(string1.length > string2.length){
    longestString = string1;
  } else {
    longestString = string2;
    }
  return longestString;
}
console.log(longestString)

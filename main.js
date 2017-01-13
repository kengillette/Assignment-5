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
  return sentence.toUpperCase();
}
var awesome = yell("This is awesome")

console.log(awesome)

/*=========================================================
    Exercies 2-1-1
*/

function yell (sentence){
  return sentence.toUpperCase();
}
var awesome = yell("This is awesome");
for (var i = 0; i <= 9; i++) {
console.log(awesome)
}

/*=========================================================
    Exercies 2-2
*/
setInterval(oneSecond, 1000);
function yell (sentence){
  return sentence.toUpperCase();
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
function longest(string1, string2){
  var longestString = 0;

    if(string1.length > string2.length){
      longestString = string1;
    } else {
      longestString = string2;
      }
return longestString;
}
console.log(longest("Short","Long String"))

/*=========================================================
    Exercies 3
*/

function isVowel(letter) {

var isAVowel;
var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];
for (var i = 0; i <= vowels.length, i++)


}
  return isAVowel;
}
isVowel("i")



var inputString = "Hello World";
var resultString = "";
for (var i = inputString.length - 1; i >= 0; i--)
{ 
    resultString += inputString[i];
}
console.log(resultString);

function palindrom(str) {
  var re = /[\W_]/g;
  var strLow = str.toLowerCase().replace(re, '');
  var reverseStr = strLow.split('').reverse().join(''); 
  return reverseStr === strLow;
}
var isPal = palindrom("A man, a plan, a canal. Panama");
if (isPal) {
   console.log(`strings are equals`);
} else {
    console.log(`strings not equal`);
}
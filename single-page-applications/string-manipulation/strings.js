var userString = (function(stringManipulation){

  stringManipulation.validateForm = function(input){
      var alphaExp = /^[a-zA-Z]+$/;
      var string = document.getElementById("string").value.trim();
      if(!(string.match(alphaExp))) {
        return alert("Please enter only alphabetical characters");
      } else {
        return " ";
      }
  };

  stringManipulation.reversal = function(input) {
    var reversedString = input.split("").reverse().join("");
    return reversedString;
  };

  stringManipulation.alphabits = function(input) {
    var newString = input.split('').sort().join('');
    return newString;
  };

  stringManipulation.palindrome = function(input) {
    var stringLength = input.length;
    var tester = [];
    console.log(input[0])
    console.log(input[stringLength-1])
    for (i=0; i<Math.floor(stringLength/2); i++){
      if (input[i] === input[stringLength-1-i]) {
        tester.push('a');
        console.log(tester)
      }
    }
    if (tester.length === Math.floor(stringLength/2)) {
      return "Your string is a palindrome"
    } else {
      return " "
    }
  };

  return stringManipulation;

}) (userString || {});


document.getElementById("submit").addEventListener("click", (e)=>{
    var stringValue = document.getElementById("string").value;
    var output = document.getElementById("output");
    userString.validateForm(stringValue);
    output.innerHTML =
      `<p> Here is your text reversed: </p>
        ${userString.reversal(stringValue)}
        <p> Here is your text in alphabetical order: </p>
        ${userString.alphabits(stringValue)}
        <p> ${userString.palindrome(stringValue)} </p>`
  });





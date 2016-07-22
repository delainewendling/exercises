var Mathematics = (function(operation){
  operation.multiplication = function (firstNum, secondNum) {
      return Math.round(firstNum*secondNum,2);
  };
  operation.division = function (firstNum, secondNum) {
      return Math.round(firstNum/secondNum,2);
  };
  operation.addition = function (firstNum, secondNum) {
      return Math.round(firstNum+secondNum,2);
  };
  operation.subtraction = function (firstNum, secondNum) {
      return Math.round(firstNum-secondNum,2);
  };
  return operation
}) (Mathematics || {});


var Mathematics = (function(buttonClick){
  buttonClick.getValues = function(){
    return output = {
      Number1: Number(document.getElementById("firstNumber").value),
      Number2: Number(document.getElementById("secondNumber").value)
    }
  }

  buttonClick.checkFields = function(firstNumber, secondNumber) {
    if (!firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber)) {
      return output.innerHTML += "Make sure you are entering a number in both fields"
    }
  };

  buttonClick.add = function (firstNumber, secondNumber) {
    document.getElementById("output").innerHTML += Mathematics.addition(firstNumber, secondNumber)
  };

  buttonClick.subtract = function (firstNumber, secondNumber) {
    document.getElementById("output").innerHTML += Mathematics.subtraction(firstNumber, secondNumber)
  };

  buttonClick.multiply = function (firstNumber, secondNumber) {
    document.getElementById("output").innerHTML += Mathematics.multiplication(firstNumber, secondNumber)
  };

  buttonClick.divide = function (firstNumber, secondNumber) {
    document.getElementById("output").innerHTML += Mathematics.division(firstNumber, secondNumber)
  };

  var inputcollection = document.getElementsByClassName("inputBtn");
  console.log("inputcollection", inputcollection)

  for (var i = inputcollection.length - 1; i >= 0; i--) {
    inputcollection[i].addEventListener("click", (e) => {
      console.log("event", e.target.id)
      var nums =buttonClick.getValues()
      console.log("values", nums)
      buttonClick.checkFields(nums.Number1, nums.Number2);
      buttonClick[e.target.id](nums.Number1, nums.Number2);
    });
  }

  return buttonClick;

})(Mathematics || {});


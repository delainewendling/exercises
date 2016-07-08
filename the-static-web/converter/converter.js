function toCelsius () {
  var tempValue = document.getElementById('temperature').value;
  var celsius = Math.round(tempValue*(9/5)+32);
  return celsius;
}

function toFahrenheit () {
  var tempValue = document.getElementById('temperature').value;
  var fahrenheit = Math.round((tempValue-32)*(5/9));
  return fahrenheit;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if(document.getElementById('celsius').checked) {
    document.getElementById('convertedTemp').innerHTML(toCelsius());
  } else if (document.getElementById('fahrenheit').checked) {
    document.getElementById('convertedTemp').innerHTML(toFahrenheit());
  } 
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// input.addEventListener("keydown", function (event) {
//   VK_RETURN
//   if (event.defaultPrevented) {
//     return; // Should do nothing if the key event was already consumed.
//   }

// Converted Temperature
var convertedTemp = document.getElementById("convertedTemp");

// Get a reference to the button element in the DOM
var buttonSubmit = document.getElementById("converter");
var buttonClear = document.getElementById("clear");

//Function that converts to Celsius
function toCelsius () {
  var tempValue = Number(document.getElementById('temperature').value);
  var celsius = Math.round((tempValue-32)*(5/9));
  return celsius;
}

//Function that converts to Fahrenheit
function toFahrenheit () {
  var tempValue = Number(document.getElementById('temperature').value);
  var fahrenheit = Math.round(tempValue*(9/5)+32);
  return fahrenheit;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  clickEvent.preventDefault();
  if(document.getElementById('celsius').checked) {
    var temp = toCelsius();
    if (temp > 32) {
      convertedTemp.innerHTML += "<p> It's hot outside! </p>";
      convertedTemp.style.backgroundColor = "rgba(217, 53, 49, .8)";
    } else if (temp < 0) {
      convertedTemp.innerHTML += "<p> Brrrr it's cold </p>";
      convertedTemp.style.backgroundColor = "rgba(40, 102, 123, .7)";
    }
  } else if (document.getElementById('fahrenheit').checked) {
    var temp = toFahrenheit();
    if (temp > 90) {
      convertedTemp.innerHTML += "<p> It's hot outside! </p>";
      convertedTemp.style.backgroundColor = "rgba(217, 53, 49, .8)";
    } else if (temp < 32) {
      convertedTemp.innerHTML += "<p> Brrrr it's cold </p>";
      convertedTemp.style.backgroundColor = "rgba(40, 102, 123, .7)";
    }
  }
convertedTemp.innerHTML += "<h4> The temperature would be: " + temp + "&deg; </h4>";
convertedTemp.style.border = "2px solid #999"
  console.log("event", clickEvent);
}

//Function that clears the form
function clearForm (clear) {
  document.getElementById("convertedTemp").innerHTML = " ";
  document.getElementById("convertedTemp").style.border = "none";
  document.getElementById("convertedTemp").style.backgroundColor = "#fff";
}



// Assign a function to be executed when the button is clicked
buttonSubmit.addEventListener("click", determineConverter);
buttonClear.addEventListener("click", clearForm);



// document.getElementById("temperature").addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("converter").click();
//     }
// });
// input.addEventListener("keydown", function (event) {
//   VK_RETURN
//   if (event.defaultPrevented) {
//     return; // Should do nothing if the key event was already consumed.
//   }
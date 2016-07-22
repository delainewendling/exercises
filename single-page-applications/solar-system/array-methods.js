var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];


var capitalized = planets.map((element)=>{
    return element.substring(0,1).toUpperCase() + element.substring(1);
}).forEach((element)=>{
  document.getElementById("planetContainer").innerHTML +=
  `<p> ${element} </p>`;
})

console.log(capitalized)

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];


var capitalized = planets.map((element)=>{
    return element.substring(0,1).toUpperCase() + element.substring(1);
})

capitalized.forEach((element)=>{
  document.getElementById("planetContainer").innerHTML +=
  `<p> ${element} </p>`;
})

var filteredPlanets = planets.filter((element)=>{
  return element.includes("e");
}).map((element)=>{
  return element.substring(0,1).toUpperCase() + element.substring(1);
})

console.log(filteredPlanets);

filteredPlanets.forEach((element)=>{
  document.getElementById("ePlanets").innerHTML +=
    `<p> ${element} </p>`
})

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce((previousValue, currentValue)=> {
  return previousValue + " " + currentValue;
})

document.getElementById("randomSentence").innerHTML +=
    `<p> ${sentence} </p>`


// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array
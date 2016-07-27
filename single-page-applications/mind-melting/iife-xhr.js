var Predator = (function(animals) {


function showCarnivores (carnivores) //_carnivores is now the array that we created in the Predator.js file
 {
  var carnivoreContainer = document.querySelector(".carnivores");
  console.log("carnivores", carnivores)
  var carnivore = carnivores.carnivores;
  carnivore.forEach((carn)=>{
    carnivoreContainer.innerHTML += `<li> Name: ${carn.name} </li>
      <li> Family: ${carn.family} </li>`
  });

}

function showHerbivores (herbivores) {
  var herbivoreContainer = document.querySelector(".herbivores");
  var herbivore = herbivores.herbivores;
  herbivore.forEach((herb) =>{
    herbivoreContainer.innerHTML += `<li> Name: ${herb.name} </li>
      <li> Family: ${herb.family} </li>`
  });
}

Predator.loadCarnivores(showCarnivores); //We're passing the function showCarnivores into the loadCarnivores function
Predator.loadHerbivores(showHerbivores);

}) (Predator || {});
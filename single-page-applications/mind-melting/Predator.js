var Predator = (function () {
  var carnivores; //private variables, naming convention says to place the underscore in front
  var herbivores;

  return { //public interface, all functions below are public
    loadHerbivores: function (cb) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json")
      loader.addEventListener("load", function (evt) {
        // Set the value of the private array
        cb(JSON.parse(evt.target.responseText)); //you can use evt.target because that is the thing you are targeting here
      });
      loader.send()
    },
    loadCarnivores: function (cb) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json")
      loader.addEventListener("load", function () {
        // Set the value of the private array
        cb(JSON.parse(this.responseText));//this is a reference to the execution context. It is different in different contexts.

      });
      loader.send();
    }
  }
})(Predator || {});


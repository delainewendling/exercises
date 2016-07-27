var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadHerbivores: function (callback) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json")
      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
      });
    },
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json")
      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        callbackToInvoke(carnivores)

      });
    }
  }
})(Predator || {});
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

var cLength = colors.length;
var rLength = reindeer.length;

for(i=0; i<cLength; i++) {
  if (i >= rLength) {
    var remainder = i % rLength;
    hohohoElement.innerHTML += "<p>"+ colors[i] + " " + reindeer[remainder]+ "</p>";
  } else {
    hohohoElement.innerHTML += "<p>"+ colors[i] + " " + reindeer[i]+ "</p>";
 }
}
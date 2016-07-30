var emptyHeight = document.getElementById("height").value 
var emptyChar = document.getElementById("character");

function enter () {
  if(!emptyHeight.match(/\S/) && !emptyChar.match(/\S/)) {
    document.getElementById("grow").addEventListener("click", growTree);
  } else {
    alert("Both the height and character fields must have a value")
  }
}

function growTree() {
  var height = Number(document.getElementById("height").value);
  var character = document.getElementById("character").value;
  for(i=0; i<=height; i++) {
    var oneLess = i-1;
    var space = " ";
    console.log(space.repeat(height-oneLess)+character.repeat(2*i+1));
  }
}

enter();




// var tree = {
// }

// tree.height = Number(document.getElementById("height").value);
// tree.character = document.getElementById("character").value;







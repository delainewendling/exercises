var alpha = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]

var show = document.getElementById("alphabet");

function stackLetters() {
  for(var i=0, string = " "; i<alpha.length; i++) {
    if((i+1)%5===0) {
      string += alpha[i] + " ";
    }
    else {
      string += alpha[i];
    }
    show.innerHTML +=  string + "<br>";
  }
}

stackLetters();

//To the console

// function stackLetters() {
//   var string = "";
//   for(i=0; i<alpha.length; i++) {
//     string += alpha[i];
//     if((i+1)%5===0) {
//       string += " ";
//     }
//     console.log(string);
//   }
// }

// stackLetters();

//Old attempt

// function stackLetters() {
//   for (i=0; i<alpha.length; i++) {
//     if (i%5 === 0) {
//       console.log("<p>"+alpha.slice(0, i).join("")+ " " + alpha.slice(i, i+1) +"</p>");
//     } else {
//       console.log("<p>"+alpha.slice(0, i+1).join("")+"</p>");
//     }
//  }
// }

// stackLetters();

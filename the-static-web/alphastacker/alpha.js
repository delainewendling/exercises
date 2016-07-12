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

function stackLetters() {
  for (i=0; i<alpha.length; i++) {
  var output = "<p>"+alpha.slice(0, i+1).join("")+"</p>";
  console.log(output);
 }
}

stackLetters();

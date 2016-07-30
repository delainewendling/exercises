var sonnetElement = document.getElementById("sonnet");
var sonnetWords = document.getElementById("sonnet").innerHTML;
console.log("The words orphans starts at the " + sonnetWords.indexOf("orphans") + " character");
console.log("There are "+sonnetWords.length+" characters in the sonnet");
sonnetElement.innerHTML = sonnetWords.replace("winter", "yuletide");
sonnetElement.innerHTML = sonnetWords.replace(/\sthe\s/gi, " a large ");

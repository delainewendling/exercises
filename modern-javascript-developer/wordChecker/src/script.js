var text;
var wordCount = [];
$("#submit").click((e)=>{
  text = $(".text").val()
  checkWordCount(text)
  duplicateCheck(text)
  verifyAlphaNumeric(text)
})

function checkWordCount(text){
  var wordCount = text.split(" ").length
  if (wordCount > 100){
    return false
  } else {
    return true
  }
}

function duplicateCheck (text) {
  var words = text.toLowerCase().split(" ")
  var duplicateWords = []
  for (i=0; i<words.length; i++){
    for (j=0; j<words.length; j++){
      if(words[i] === words[j]) {
        duplicateWords.push(words[j])
      }
    }
  }
  if (duplicateWords.length > words.length){
    return false
  } else {
    return true
  }
}

function verifyAlphaNumeric (text) {
  console.log(text)
  if (text.search(/[^a-zA-Z0-9_\s]/g) == -1) {
    console.log("true")
    return true
  } else {
    console.log("false")
    return false
  }
}


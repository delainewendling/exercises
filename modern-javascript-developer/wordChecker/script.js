var text;
var wordCount = [];
$("#submit").click((e)=>{
  text = $(".text").val()
  wordCount = text.split(" ")
  console.log("word Count array and length", wordCount + " " wordCount.length)
  checkWordCount(wordCount.length)
})

function checkWordCount(text){
  if (text > 100){
    return false
  } else {
    return true
  }
}

// function duplicateWordCount
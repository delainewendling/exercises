var sections = document.querySelectorAll(".article-section");
for( i=0; i<sections.length; i++) {
sections[i].addEventListener("click", (e) =>{
  var outputBox = document.getElementById("output-target")
  outputBox.innerHTML = `You clicked on the ${e.target.innerText} section`
  outputBox.className ="section";
  console.log(e)
  })
}

document.getElementById("page-title").addEventListener("mouseover", (e)=>{
  var outputBox = document.getElementById("output-target")
  outputBox.innerHTML = "You moved your mouse over the header"
  outputBox.className = "onHeader"
})

document.getElementById("page-title").addEventListener("mouseleave", (e)=>{
  var outputBox = document.getElementById("output-target")
  outputBox.innerHTML = "You left me!"
  outputBox.className = "offHeader"
})

document.getElementById("keypress-input").addEventListener("keydown", (e)=>{
  var inputValue = document.getElementById("keypress-input").value
  if(inputValue){
    var outputBox = document.getElementById("output-target");
    outputBox.innerHTML = inputValue;
  }
})

document.getElementById("add-color").addEventListener("click", (e)=>{
  var guineaPig = document.getElementById("guinea-pig");
  guineaPig.classList.toggle("colorBlue");
})

document.getElementById("make-large").addEventListener("click", (e)=>{
  var guineaPig = document.getElementById("guinea-pig");
  guineaPig.classList.toggle("makeLarge");
})

document.getElementById("add-border").addEventListener("click", (e)=>{
  var guineaPig = document.getElementById("guinea-pig");
  guineaPig.classList.toggle("addBorder");
})

document.getElementById("add-rounding").addEventListener("click", (e)=>{
  var guineaPig = document.getElementById("guinea-pig");
  guineaPig.classList.toggle("addRound");
})


document.addEventListener("click", (e)=>{
  var random = Math.round(Math.random()+1);
  console.log("number", random)
  getArrow(random)
});

function getArrow(random) {
  var imageContainer = document.getElementById("image");
  if(random === 1){
    imageContainer.innerHTML = "<img src='images/rightArrow.png'>";
  } else {
    imageContainer.innerHTML = "<img src='images/leftArrow.png'>";
  }
}

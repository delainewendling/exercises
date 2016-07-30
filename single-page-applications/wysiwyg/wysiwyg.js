function getJSON (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', function() {
    var data = JSON.parse(xhr.responseText)
    callback(data)
  })
  xhr.send()
}

getJSON('people.json', function(data){
  var pContainer = document.getElementById("peopleContainer");
  var people = data.people;
  people.forEach(function(person) {
    pContainer.innerHTML += createPerson(person)
  });
});

function createPerson(person) {
  return `<div class="row people">
  <div class="name col-sm-2"> ${person.title} ${person.name} </div>
        <div class="col-sm-3"> <img src = "${person.image}"} class="image"> </div>
        <div class="col-sm-7">
        <div class="row">
        <div class="bio col-sm-8"> ${person.bio} </div>
        <div class="lifespan col-sm-4">
          <p> Birth: ${person.lifespan.birth} </p>
          <p> Death: ${person.lifespan.death} </p>
        </div>
      </div>
      </div>`
    clickPeople();
};

function clickPeople () {
  var peopleCards = document.querySelectorAll('.people');
  for(i=0; i<peopleCards.length; i++) {
    peopleCards[i].addEventListener("click", (e)=> {
      console.log("clicked")
      // e.target.style.border = "1px dotted black"
    })
  }
}


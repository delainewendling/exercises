// var xhr = new XMLHttpRequest() //the name of the variable is not necessary but the right side must remain the same
// xhr.open('GET', 'data.json') //you add two items, the "verb" and the url. However, open does not actually initiate the request. It sets it up though.
// xhr.addEventListener('load', function () {
//   var data = JSON.parse(xhr.responseText).fruits //This gives and object that you can then parse
//   var tbody = document.getElementById("fruits")
//   data.forEach(function(fruit){ //you can call the element whatever you want and it will grab the current element
//     tbody.innerHTML +=
//       `<tr>
//         <td> ${fruit.name} </td>
//         <td> ${fruit.quantity}</td>
//       </tr>` //Here we are using fruit as the element variable
//   })
// })
// xhr.send(); //This is actually what initiates the request

var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://api.randomuser.me/?results=50') //getting data from an api on the Internet
xhr.addEventListener('load', function() {

  var people = JSON.parse(xhr.responseText).results

  var pTable = document.getElementById("people")
  people.forEach(function(person) {
    pTable.innerHTML +=
    `<tr>
        <td> <img src= "${person.picture.thumbnail}" </td>
        <td> ${person.name.first} ${person.name.last}</td>
        <td> ${person.phone} </td>
      </tr>`
  })
})
xhr.send()

// ASYNC getJSON function (URL, CALLBACK)

// function getJSON (url, callback) {
//   var xhr = new XMLHttpRequest()
//   xhr.open('GET', url)
//   xhr.addEventListener('load', function() {
//     var data = JSON.parse(xhr.responseText)
//     callback(data)
//   })
//   xhr.send()
// }

// getJSON('http://api.randomuser.me/?results=50', function(data){
//   var pTable = document.getElementById("people")
//   var people = data.results
//   people.forEach(function(person) {
//     pTable.innerHTML += createRowHTML(person)
// });

// function createRowHTML (person) {
//   return
//      `<tr>
//         <td> <img src= "${person.picture.thumbnail}" </td>
//         <td> ${person.name.first} ${person.name.last}</td>
//         <td> ${person.phone} </td>
//       </tr>`
// };











$(document).ready(function(){
  var API_URL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
  $.getJSON(API_URL, function(res){
    console.log("loaded")
    var images = res.data;
    images.forEach(function(img){
      $('.imgContainer').append(`<img src="${img.images.original.url}" class="giphy">`);
      console.log("images")
    })
    $("img").first().addClass("active")
  })
})
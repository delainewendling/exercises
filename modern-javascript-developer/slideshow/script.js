$(function(){
  var numberOfImages = $('.imgContainer').length
  var index = 0;
  $('#arrowLeft').click((e)=>{
    if(index <= 0){
      index=6;
      console.log("left index w/ reset")
    }
    var remainder = index%numberOfImages;
    if (remainder === 0){
      $('.imgContainer').eq(remainder).addClass('hidden')
      $('.imgContainer').eq(5).removeClass('hidden')
      index--
   } else {
      $('.imgContainer').eq(remainder).addClass('hidden')
      $('.imgContainer').eq(remainder).prev(".imgContainer").removeClass('hidden')
      index--
   }
  })
   $('#arrowRight').click((e)=>{
    var remainder = index%numberOfImages;
    if (remainder === 5){
      $('.imgContainer').eq(remainder).addClass("hidden")
      $('.imgContainer').eq(0).removeClass("hidden")
      index++
    } else {
      $('.imgContainer').eq(remainder).addClass("hidden")
      $('.imgContainer').eq(remainder).next('.imgContainer').removeClass("hidden")
      index++
    }
  })
});
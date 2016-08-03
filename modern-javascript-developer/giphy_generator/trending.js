$(function(){
  var numberOfImages = $('.giphy').length
  var index = 0;
  $('#arrowLeft').click((e)=>{
    console.log('clicked')
    if(index <= 0){
      index=numberOfImages;
      console.log("left index w/ reset")
    }
    var remainder = index%numberOfImages;
    if (remainder === 0){
      $('.giphy').eq(remainder).addClass('hidden')
      $('.giphy').eq(numberOfImages-1).removeClass('hidden')
      index--
   } else {
      $('.giphy').eq(remainder).addClass('hidden')
      $('.giphy').eq(remainder).prev(".giphy").removeClass('hidden')
      index--
   }
  })
   $('#arrowRight').click((e)=>{
    console.log("right click")
    console.log($('.giphy').eq(remainder))
    var remainder = index%numberOfImages;
    if (remainder === numberOfImages-1){
      $('.giphy').eq(remainder).addClass("hidden")
      $('.giphy').eq(0).removeClass("hidden")
      index++
    } else {
      $('.giphy').eq(remainder).addClass("hidden")
      $('.giphy').eq(remainder).next('.giphy').removeClass("hidden")
      index++
    }
  })
})
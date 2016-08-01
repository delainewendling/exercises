$(function(){
  var index = 0
  var numberOfImages = $('.imgContainer').length
  // $('.imgContainer').eq(index).removeClass("hidden");
  // $('#arrowLeft').click((e)=>{
  //   console.log("index from left", index)
  //   var remainder = index%numberOfImages;
  //   console.log("remainder from left", remainder)
  //   $('.imgContainer').eq(index).addClass('hidden')
  //   $('.imgContainer').eq(remainder).prev('.imgContainer').removeClass('hidden')
  //   console.log("left clicked")
  //   index--
  //   console.log("index from left", index)
  // })
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
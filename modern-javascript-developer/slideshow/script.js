$(function(){
  var numberOfImages = $('.imgContainer').length
  var index = 0;
  $('.imgContainer').mouseenter((e)=>{
    var target = $(e.currentTarget)
    $(target).find(".caption").removeClass("hidden")
  })
  $('.imgContainer').mouseleave((e)=>{
    var target = $(e.currentTarget)
    $(target).find(".caption").addClass("hidden")
  })

//   $('#arrowLeft').click((e)=>{
//     if(index <= 0){
//       index=6;
//       console.log("left index w/ reset")
//     }
//     var remainder = index%numberOfImages;
//     if (remainder === 0){
//       $('.imgContainer').eq(remainder).addClass('hidden')
//       $('.imgContainer').eq(5).removeClass('hidden')
//       index--
//    } else {
//       $('.imgContainer').eq(remainder).addClass('hidden')
//       $('.imgContainer').eq(remainder).prev(".imgContainer").removeClass('hidden')
//       index--
//    }
//   })
//    $('#arrowRight').click((e)=>{
//     var remainder = index%numberOfImages;
//     if (remainder === 5){
//       $('.imgContainer').eq(remainder).addClass("hidden")
//       $('.imgContainer').eq(0).removeClass("hidden")
//       index++
//     } else {
//       $('.imgContainer').eq(remainder).addClass("hidden")
//       $('.imgContainer').eq(remainder).next('.imgContainer').removeClass("hidden")
//       index++
//     }
//   })
// });


  //If left arrow is clicked
  $('#arrowLeft').click((e)=>{
    if(index <= 0){
      index=6;
      console.log("left index w/ reset")
    }
    var remainder = index%numberOfImages;
    if (remainder === 0){
      $('.imgContainer').eq(remainder).fadeOut(500,function() {
        $('.imgContainer').eq(remainder).addClass('hidden')
        $('.imgContainer').eq(5).fadeIn(0, function(){
          $('.imgContainer').eq(5).removeClass("hidden")
        })
      })
      index--
   } else {
      $('.imgContainer').eq(remainder).fadeOut(500,function() {
        $('.imgContainer').eq(remainder).addClass("hidden");
        $('.imgContainer').eq(remainder).prev(".imgContainer").fadeIn(0, function(){
          $('.imgContainer').eq(remainder).prev(".imgContainer").removeClass("hidden")
        })
      })
      index--
   }
  })
  //If right arrow is clicked
  $('#arrowRight').click((e)=>{
    var remainder = index%numberOfImages;
    if (remainder === 5){
      $('.imgContainer').eq(remainder).fadeOut(500,function(){
        $('.imgContainer').eq(remainder).addClass("hidden");
        $('.imgContainer').eq(0).fadeIn(0, function(){
          $('.imgContainer').eq(0).removeClass("hidden")
        })
      })
      index++
    } else {
      $('.imgContainer').eq(remainder).fadeOut(500,function(){
        $('.imgContainer').eq(remainder).addClass("hidden");
        $('.imgContainer').eq(remainder).next('.imgContainer').fadeIn(0, function(){
        $('.imgContainer').eq(remainder).next('.imgContainer').removeClass("hidden")
        })
      })
      index++
    }
  })
});
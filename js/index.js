
$(function () {
    var cacheQuery = null;
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical',  
      onTouchMove:function (mySwiper) {
        var index = mySwiper.activeIndex
        $(mySwiper.slides).each(function (i,v) {
          if (i!==index) {
            $(v).find('.once').hide()
          }
        })
      }, 
      onSlideChangeStart: function (mySwiper) {
            var index = mySwiper.activeIndex
            cacheQuery = $(mySwiper.slides[index]).find('.once')
            cacheQuery.hide()
        },
        onSlideChangeEnd: function (mySwiper) {
            // var scrollTop = $("#child").scrollTop()
            // if (scrollTop !== 80) {
            //     document.body.scrollTop = 80
            //     $("#child").animate({
            //         scrollTop: 80
            //     }, 500);
            // }
            cacheQuery.show()
        }
    })    
    // 音乐
    $('.music img').click(function () {
      if ($(this).hasClass('animateRotating')) {
        $(this).removeClass('animateRotating')
        $('#mp3').get(0).pause()
      }else{
        $(this).addClass('animateRotating')
        $('#mp3').get(0).play()
      }
    })  
  })
  
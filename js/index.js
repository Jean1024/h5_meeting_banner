
$(function () {
    var cacheQuery = null;
    var mySwiper = new Swiper ('.container1', {
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
            if (index === 4) {
              $('.swiper4 .person:eq(4)').hide()
            }else{
              $('.swiper4 .person:eq(4)').show()
            }
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
    var mySwiper2 = new Swiper ('.container2', {
      pagination: '.swiper-pagination',
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
    $('#turnTo li').click(function () {
      var index = $(this).index()
      mySwiper.slideTo((+index + 5), 1000, true);
    })
  })
  

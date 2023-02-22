$(document).ready(function(){
    $(".sliderhead").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });


      $(".ui").hover(function(){
        $(".xi").slideToggle(1000)
      })
      $(".yi").hover(function(){
        $(".zi").slideToggle(1000)
      })

      $(window).scroll(function(){
        let uo=$(window).scrollTop();
        if(uo>=100){
          $(".navbar").addClass('ouv')
        }else{
          $(".navbar").removeClass("ouv")
        }
      })

      // data
      $('.countdown').dsCountDown({
        endDate: new Date("December 24, 2023 23:59:00")
        });
      // sale
     
      $('.only').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
     
      // nav
      $("#search").click(function(){
        $(".form-group").slideToggle(400)
      })
     $("#mark").click(function(){
      $(".form-group").slideUp(400)
     })
    //  arrow
    $(window).scroll(function(){
      let arr = $(window).scrollTop()
      if(arr>550){
        $("#arrow").fadeIn(400)
      }else{
        $("#arrow").fadeOut(400)
      }
    })
    $("#arrow").click(function(){
      $("html").animate({scrollTop:'0'},2000)
    })
    $('.loading').fadeOut(1000,function(){
      $('body').css({overflow:'auto'})
    })
   
    // href
    $('.navbar .nav-link').click(function(){
      let th=$(this).attr('href')
      $("html,body").animate({scrollTop:$(th).offset().top-120},2000)
    })
  })

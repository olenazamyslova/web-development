
$('.burger').on('click', function () {

    $('.nav_menu').toggleClass('nav_menu_active');
    $('.burger').toggleClass('burger-active');

});

// _______________________________________________________

var items = $('.faq_item');
var arrow = $('.faq_item_arrow');

// for(i = 0; i < items.length; i++){
$('.faq_item').on('click', function () {


    if ($(this).hasClass('faq_item-active')) {
        $(this).removeClass('faq_item-active');
    } else {
        $(this).addClass('faq_item-active');
    }

});

// ______________________________________

$(function() {
 
   $(".nav_menu li a").on('click', function(e) {
    e.preventDefault();
    var link = $(this).attr("href");
    var el = $(link).offset().top;

      $("html, body").animate({
         scrollTop: el - 100 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
 
});

// _________________________________________________

$(function () {
    $(document).scroll(function () {
      var $nav = $(".header_container");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

//   ________________________________________________

var owl = $('.slider').owlCarousel({
    loop: true,
    margin: 100,
    nav: false,
    dots: true,
    items: 1,
    responsive:{
        // 0:{
        //     items:1
        // },
        // 600:{
        //     items:3
        // },
        // 1000:{
        //     items:5
        // }
    }
});


$('.gallery_arrow-left').on('click',function(){
    owl.trigger('prev.owl.carousel')
});

$('.gallery_arrow-right').on('click',function(){
    owl.trigger('next.owl.carousel')
});

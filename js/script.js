$(document).ready(function($) {
    'use strict';

    $('.test-caro').owlCarousel({
        autoplay: true,
        loop:true,
        responsiveClass:true,
        items: 1
    })
   $('.sign_logo').owlCarousel({
       loop:true,
       margin:10,
       nav:false,
       responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },
        992:{
            items:4
        }
       }
   })

   //counter jq code==
   $('.counter').counterUp({
    delay:14,
    time:2000
   });

   //Wow content animate==
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

});
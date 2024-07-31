	// ----------------- Variables


 jQuery(document).ready(function ($) {
			$(window).scroll(function () {
				if ($(this).scrollTop() >0) {
					$('.header-sticky').addClass("sticky");		
				}
				else {
					$('.header-sticky').removeClass("sticky");
				}

				
			});		
		

	
	
		$( document ).ready(function() {
    $(document).on('click', '.mobile_nav_icon-close', function(){
    	$('.navbarResponsive2').fadeOut();
    });
    $(document).on('click', '.mobile_nav_icon', function(){
    	$('.navbarResponsive2').fadeIn();
    });
});
	


 
    lozad('.lozad').observe();
 
 $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
	
	$( document ).ready(function() {
    $(document).on('click', '.search-close', function(){
    	$('.search-box').fadeOut();
    });
    $(document).on('click', '.open-search', function(){
    	$('.search-box').fadeIn();
    });
});

	

$(".dropdown").hover(
  function () {
    $(this).parent().parent().parent().addClass('top-mega-menu');
  },
  function () {
   $(this).parent().parent().parent().removeClass('top-mega-menu');
  }
);

	
	
	


			   wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();	
	});
		

					$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1'});
				$(".group2").colorbox({rel:'group2', transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
				$(".ajax").colorbox();
				$(".youtube").colorbox({iframe:true,innerWidth:640, innerHeight:390});
				$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409,width:"100%", height:"100%"});
				$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});

//Events  Details Slider

	$('#events_gallery .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
//News  Details Slider 
	$('body .news_details .parle_legacy_section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//About us Slider 

$('.parle-history .owl-carousel').owlCarousel({
    loop:false,
    margin:15,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }

    }
})//

/*************Parle Update Silider*************/

$('.parle-update-sec').owlCarousel({
    loop:true,
    margin:20,
    dots:true,
    nav:false,
    autoplay:true,   
    smartSpeed: 1000, 
    responsive:{
        0:{
            items:1
        },
        479:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
})//

/*************Parle Update Silider*************/

$('.tv-commercial').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 1000, 
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:1
        }
    }
})//



$('.parleg-insta').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:false,
    autoplay:true,   
    smartSpeed: 1000, 
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:1
        }
    }
})//




/*************Parle Campaign-Gallery*************/

$('.campaign-slider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true, 
    smartSpeed: 2000, 
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:1
        }
    }
})//

/*************Parle Campaign-Gallery*************/

$('.mob-campaign-slider ul').owlCarousel({
    loop:false,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true, 
    smartSpeed:1500, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

/* ==========================================================================
    Brands Parle G (discover Section Slider)
========================================================================== */

  $(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    autoplay: true,
    items: 3,
    margin:20,
    nav: false,
    dots: false,
    smartSpeed:1000,
    slideBy: 1,
    loop: true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:3
        }
    }
 
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    autoplay:true,
    items: 1,
    dots: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    loop: true,
    slideBy: 1,
    navText: [
      '<i class="lnr lnr-chevron-left"></i>',
      '<i class="lnr lnr-chevron-right"></i>'
    ],
     responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});
		

/*************Home Banner*************/

$(document).ready(function (){
  var owl = $('.banner .owl-carousel');
  owl.owlCarousel({
      loop:true,
      margin:0,
      navSpeed:3000,
      nav:false,
      mouseDrag: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay:2500, 
      autoplayTimeout:9500,
      smartSpeed:2500, 
      items:1
    });
}); 

/*************Home Mobile Banner*************/

$(document).ready(function (){
  var owl = $('.mob-banner');
  owl.owlCarousel({
      loop:true,
      autoplay:true, 
      margin:0,
      nav:false,
      smartSpeed:1500, 
      items:1
    });
}); 


/*************Home Page Brands*************/

$(document).ready(function (){
  var owl = $('.owl-carousel1');
  owl.owlCarousel({
      loop:false,
      margin:0,
      navSpeed:3000,
      nav:true,
      autoplay:1500, 
      autoplayTimeout:5500,
      smartSpeed:1500, 
      dots: false, 
      responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },
        768:{
            items:4
        },
        1000:{
            items:5
        }
    }
  });
}); 

/*************Home Page Brands*************/

$(document).ready(function (){
  var owl = $('.mobile-pro-brand');
  owl.owlCarousel({
      loop:false,
      margin:10,
      navSpeed:3000,
      nav:true,
      autoplay:1500, 
      autoplayTimeout:5500,
      smartSpeed:1500, 
      dots: false, 
      responsive:{
        0:{
            items:2
        },
        570:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
}); 


/*************Home Mobile Banner*************/

$(document).ready(function (){
  var owl = $('.olympic-sec');
  owl.owlCarousel({
      loop:true,
      autoplay:true, 
      margin:0,
      nav:false,
      smartSpeed:1500, 
      items:1
    });
}); 


/*************Parle Update Mobile Event*************/

$('.update-mob').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true, 
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
    }
})

/* ==========================================================================
   Mobile Menu Css
========================================================================== */

$(document).ready(function(){
  $(".mobile_nav_icon").click(function(){
    $(".mobile-menu").toggleClass("menu-show");
  });
   $(".cros-icon").click(function(){
    $(".mobile-menu").removeClass("menu-show");
  });
   $(".dropdown-toggle").click(function(){
     $(this).next('.dropdown-menu').slideToggle('slow');
  });
   $(".dropdown-menu .dropdown-toggle").click(function(){
     $(this).next('.sub-menu').slideToggle('slow');
  });

   $(".dropdown-toggle").click(function(){
     $(this).toggleClass('open');
  });

});


/*==================================================
  Closed button (Megamenu) 
 ==================================================*/

jQuery(document).ready(function(){
  jQuery(".menu-closed").click(function(){
    jQuery(".navigation-sec").removeClass("top-mega-menu");
    jQuery(".megamenu").css("display","none");
  });
});

jQuery(document).ready(function(){
  jQuery(".dropdown").hover(function(){     
    jQuery(".megamenu").css("display","block");
  })
});
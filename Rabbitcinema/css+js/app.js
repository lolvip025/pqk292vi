// add-sub
$(document).ready(function(){
    $('.sub-menu').parent('li').addClass('add-sub');
});
// scroll
$(function() {
  var logo_text = $("#header");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
          logo_text.removeClass('offscroll').addClass("onscroll");
      } else {
          logo_text.removeClass("onscroll").addClass('offscroll');
      }
  });
});

$(function() {
    var logo_text = $(".logo-text");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            logo_text.removeClass('cinema-text-off').addClass("cinema-text-on");
        } else {
            logo_text.removeClass("cinema-text-on").addClass('cinema-text-off');
        }
    });
});

// slider banner

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides-banner");
  var dots = document.getElementsByClassName("b-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-b", "");
  }
  slides[slideIndex-1].style.display = " block";  
  dots[slideIndex-1].className += " active-b";

  return false;
};

// phim dang chieu , sap chieu

$(document).ready(function()
{
    function activeTab(obj)
    {
        $('.showphim-b ul li').removeClass('active-b-phim');
 
        $(obj).addClass('active-b-phim');
 
        var id = $(obj).find('a').attr('href');
 
        $('.tab-show').hide();
 
        $(id) .show();
    }
 
    $('.nut-phim-phu li').click(function(){
        activeTab(this);
        return false;
    });
 
    activeTab($('.nut-phim-phu li:first-child'));
});

// show/hide

function myFunction() {
    var x = document.getElementById("tt-xacnhan");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function myCancel() {
    var x = document.getElementById("tt-xacnhan");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
// Xem phim tabs

$(document).ready(function() {
  $("#xp-block-content").find("[id^='tab']").hide();
  $("#nav-xemphim li:first").attr("id","current");
  $("#xp-block-content #tabxp1").fadeIn();
   
  $('#nav-xemphim a').click(function(e) {
      e.preventDefault();
      if ($(this).closest("li").attr("id") == "current"){ 
       return;       
      }
      else{             
        $("#xp-block-content").find("[id^='tab']").hide();
        $("#nav-xemphim li").attr("id","");
        $(this).parent().attr("id","current");
        $('#' + $(this).attr('name')).fadeIn();
      }
  });
});
function adaptNav(){
	var topNav = document.getElementById('topNav');
	if (topNav.classList.contains('nav')){
		topNav.classList.add('responsive');
	}
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}


//Кнопка UP top
let upbtn = document.getElementById('upbtn');
let timer;
let scroll;


function upBtn(){
	scroll = window.pageYOffset;
	console.log(scroll);
	func1();
}

function func1(){
	if (scroll>0){
		window.scrollTo(0, scroll);
		scroll=scroll-300;
		timer = setTimeout(func1, 50);
	}
	else{
		clearTimeout(timer);
		window.scrollTo(0, 0);
	}
}

// modal window1
$(document).ready(function(){
  $('.open1').on('click', function() {
     $(".modalwindow1").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".modalwindow1").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".modalwindow1").hide(0);
    $(".main-fade").remove();
    return false;
  });

// modal window2
$(document).ready(function(){
  $('.open2').on('click', function() {
     $(".modalwindow2").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".modalwindow2").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".modalwindow2").hide(0);
    $(".main-fade").remove();
    return false;
  });

// modal window3
$(document).ready(function(){
  $('.open3').on('click', function() {
     $(".modalwindow3").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".modalwindow3").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".modalwindow3").hide(0);
    $(".main-fade").remove();
    return false;
  });

// gallery window1
$(document).ready(function(){
  $('.gradient1').on('click', function() {
     $(".galleryWindow1").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".galleryWindow1").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".galleryWindow1").hide(0);
    $(".main-fade").remove();
    return false;
  });


// gallery window2
$(document).ready(function(){
  $('.gradient2').on('click', function() {
     $(".galleryWindow2").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".galleryWindow2").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".galleryWindow2").hide(0);
    $(".main-fade").remove();
    return false;
  });


// gallery window3
$(document).ready(function(){
  $('.gradient3').on('click', function() {
     $(".galleryWindow3").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".galleryWindow3").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".galleryWindow3").hide(0);
    $(".main-fade").remove();
    return false;
  });


// gallery window1
$(document).ready(function(){
  $('.gradient4').on('click', function() {
     $(".galleryWindow4").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".galleryWindow4").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".galleryWindow4").hide(0);
    $(".main-fade").remove();
    return false;
  });


// gallery window5
$(document).ready(function(){
  $('.gradient5').on('click', function() {
     $(".galleryWindow5").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".galleryWindow5").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".galleryWindow5").hide(0);
    $(".main-fade").remove();
    return false;
  });


// gallery window6
$(document).ready(function(){
  $('.gradient6').on('click', function() {
     $(".galleryWindow6").show().after('<div class="main-fade">');
    return false;
  })
  $('.close').on('click', function() {
    $(".galleryWindow6").hide(0);
    $(".main-fade").remove();
    return false;
  })
})

$('body').on('click', '.close, .main-fade', function(){
    $(".galleryWindow6").hide(0);
    $(".main-fade").remove();
    return false;
  });
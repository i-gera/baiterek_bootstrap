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
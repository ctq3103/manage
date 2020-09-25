const btnHamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
	if (header.classList.contains('open')) {
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElems.forEach((e) => {
			e.classList.remove('fade-in');
			e.classList.add('fade-out');
		});
	} else {
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach((e) => {
			e.classList.remove('fade-out');
			e.classList.add('fade-in');
		});
	}
});

let swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});

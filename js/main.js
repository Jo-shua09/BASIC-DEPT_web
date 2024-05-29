// CLOSE AND OPEN RESPONSIVE NAVBAR
const openNav = document.querySelector(".open_nav");
const closeNav = document.querySelector(".close_menu");
const respNav = document.querySelector(".responsive_navbar");

openNav.addEventListener("click", () => {
	respNav.classList.add("show");
});

closeNav.addEventListener("click", () => {
	respNav.classList.remove("show");
});

// CLOSE AND OPEN SECTIONS
const openInit = document.querySelectorAll("#open_initiative");
const closeInit = document.querySelector(".close_initiative");
const initiative = document.querySelector(".initiative");

openInit.forEach((element) => {
	element.addEventListener("click", () => {
		initiative.classList.add("show");
	});
});

closeInit.addEventListener("click", () => {
	initiative.classList.remove("show");
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: "2",
	spaceBetween: 30,
	autoplay: true,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 1.2,
			spaceBetween: 25,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 2.5,
			spaceBetween: 35,
		},
		1200: {
			slidesPerView: 2.5,
			spaceBetween: 40,
		},
	},
});

var swiper = new Swiper(".mySwiper2", {
	slidesPerView: "3",
	spaceBetween: 50,
	// autoplay: true,
	// loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 1.1,
			spaceBetween: 25,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 2.5,
			spaceBetween: 35,
		},
		1200: {
			slidesPerView: 3.2,
			spaceBetween: 40,
		},
	},
});

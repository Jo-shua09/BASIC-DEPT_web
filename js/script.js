// TO SWITCH BETWEEN TABS
const tabs = document.querySelectorAll("[data-target]"),
	tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("active_tab");
		});

		target.classList.add("active_tab");

		tabs.forEach((tab) => {
			tab.classList.remove("active_tab");
		});
		tab.classList.add("active_tab");
	});
});

// TO ADD ANIMATION TO THE WORK HOME SECTION  HEAD
document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll(".fade_up");
	elements.forEach((element, index) => {
		element.classList.add("active");
	});
});

// TO OPEN AND CLOSE THE INITIATIVE PAGE
document.addEventListener("DOMContentLoaded", () => {
	const element = document.getElementById("initiative");
	const addButton = document.getElementById("open_initiative");
	const removeButton = document.getElementById("close_initiative");

	addButton.addEventListener("click", () => {
		element.classList.add("show");
	});

	removeButton.addEventListener("click", () => {
		element.classList.remove("show");
	});
});

// TO MAKE THE NAVBAR DO WHAT ITS DOING WWHEN  YOU SCROLL
const targetDiv = document.querySelector(".header");
let prevScrollPosition = 0;

const handleScroll = () => {
	const scrollPosition = window.scrollY;
	const windowHeight = window.innerHeight;

	if (scrollPosition === 0) {
		targetDiv.classList.remove("sticky");
	} else if (scrollPosition > prevScrollPosition) {
		// Scrolling down, remove the class if it's already added
		targetDiv.classList.remove("sticky");
	} else {
		// Scrolling up, add the class if it's not already added
		if (!targetDiv.classList.contains("sticky")) {
			targetDiv.classList.add("sticky");
		}
	}
	prevScrollPosition = scrollPosition;
};
window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", function () {
	const playButton = document.getElementById("play-button");
	const backgroundVideo = document.getElementById("background-video");
	const home_hide = document.getElementById("move_section");

	// Set the initial video time to 10 seconds
	backgroundVideo.currentTime = 10;

	let isPlaying = false;

	// Play the full video when the play button is clicked
	playButton.addEventListener("click", function () {
		if (!isPlaying) {
			backgroundVideo.currentTime = 0;
			backgroundVideo.play();
			home_hide.classList.add("remove");
			isPlaying = true;
		} else {
			backgroundVideo.pause();
			backgroundVideo.currentTime = 10;
			home_hide.classList.remove("remove");
			isPlaying = false;
		}
	});

	// Loop the video when it ends, starting from 10 seconds
	backgroundVideo.addEventListener("ended", function () {
		backgroundVideo.currentTime = 10;
		backgroundVideo.pause();
	});
});

// TO CHANGE THE BACKGROUNFD COLOUR OF THE SECTION
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("change");
		} else {
			entry.target.classList.remove("change");
		}
	});
});
const secTion = document.querySelectorAll("#spotlight");
secTion.forEach((el) => observer.observe(el));

const section = document.querySelector("#spotlight");
const element2 = document.querySelector(".header");

window.addEventListener("scroll", () => {
	const sectionTop = section.offsetTop;
	const sectionHeight = section.offsetHeight;
	const windowHeight = window.innerHeight;
	const scrollPosition = window.scrollY;

	if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
		element2.classList.add("new-class");
	} else {
		element2.classList.remove("new-class");
	}
});

// TO MAKE THE ARROW ICON DO ITS ANIMATION
const targetBox = document.querySelector("#target_feature");
const targetArrow = document.querySelector(".target_arrow");

targetBox.addEventListener("mouseover", () => {
	targetArrow.classList.add("fa-shake");
});
targetBox.addEventListener("mouseout", () => {
	targetArrow.classList.remove("fa-shake");
});

// // CLOSE AND OPEN RESPONSIVE NAVBAR
// const openNav = document.querySelector(".open_nav");
// const closeNav = document.querySelector(".close_menu");
// const respNav = document.querySelector(".responsive_navbar");

// openNav.addEventListener("click", () => {
// 	respNav.classList.add("show");
// });

// closeNav.addEventListener("click", () => {
// 	respNav.classList.remove("show");
// });

// // CLOSE AND OPEN SECTIONS
// const openInit = document.querySelectorAll("#open_initiative");
// const closeInit = document.querySelector(".close_initiative");
// const initiative = document.querySelector(".initiative");

// openInit.forEach((element) => {
// 	element.addEventListener("click", () => {
// 		initiative.classList.add("show");
// 	});
// });

// closeInit.addEventListener("click", () => {
// 	initiative.classList.remove("show");
// });

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

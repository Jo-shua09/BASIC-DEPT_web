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

// TO MAKE THE BACKGROUND VIDEO PLAY FROM BEGINNING ONCLICK OF THE BUTTON
// document.addEventListener("DOMContentLoaded", function () {
// 	const playButton = document.getElementById("play-button");
// 	const backgroundVideo = document.getElementById("background-video");
// 	const home_hide = document.getElementById("move_section");

// 	// Set the initial video time to 10 seconds
// 	backgroundVideo.currentTime = 10;

// 	// Play the full video when the play button is clicked
// 	playButton.addEventListener("click", function () {
// 		backgroundVideo.currentTime = 0;
// 		backgroundVideo.play();
// 		home_hide.classList.toggle("remove");
// 	});

// 	// Loop the video when it ends, starting from 10 seconds
// 	backgroundVideo.addEventListener("ended", function () {
// 		backgroundVideo.currentTime = 10;
// 		backgroundVideo.play();
// 	});
// });

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
const section = document.querySelector("#spotlight");
const element1 = document.querySelector("#spotlight");
const element2 = document.querySelector(".header");

window.addEventListener("scroll", () => {
	const sectionTop = section.offsetTop;
	const sectionHeight = section.offsetHeight;
	const windowHeight = window.innerHeight;
	const scrollPosition = window.scrollY;

	if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
		element1.classList.add("new-class");
		element2.classList.add("new-class");
	} else {
		element1.classList.remove("new-class");
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

// CLOSE AND OPEN THE INITIATIVE SECTION
const openInit = document.querySelector(".open_initiative");
const closeInit = document.querySelector(".close_initiative");
const initiative = document.querySelector(".initiative");

openInit.addEventListener("click", () => {
	initiative.classList.add("show");
});

closeInit.addEventListener("click", () => {
	initiative.classList.remove("show");
});

// window.onscroll = function () {
// 	initiative.classList.remove("show");
// };

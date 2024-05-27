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

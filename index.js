const slider = document.querySelector(".circular-slider");
const image = document.querySelector(".slider .img");
const indicator = document.querySelector(".indicator");
const menuItems = document.querySelectorAll(".menu span");
const description = document.querySelectorAll(".text");

const rotationValues = [-58, -32, 0, 32, 58];

const colors = [
	"radial-gradient(#74255,#440412)",
	"radial-gradient(#74255,#440412)",
	"radial-gradient(#74255,#440412)",
	"radial-gradient(#74255,#440412)",
	"radial-gradient(#74255,#440412)",
];

const images = ["img1", "img2", "img3", "img4", "img5"];

let itemIndex = 2;
function rotate(rotationValue) {
	image.style.transform = `rotate(${rotationValue}deg)`;
	indicator.style.transform = `translate(-50%, -50%) rotate(${rotationValue}deg)`;
}

menuItems.forEach((menuItem, i) => {
	menuItem.addEventListener("click", () => {
		// Update the background image
		image.style.backgroundImage = "url(images/" + images[i] + ".png)";

		// Update the slider background color
		slider.style.background = colors[i];

		// Rotate based on the item index
		if (i > itemIndex) {
			rotate(rotationValues[itemIndex] - 10);
		} else if (i < itemIndex) {
			rotate(rotationValues[itemIndex] + 10);
		} else {
			return "";
		}

		// Set timeout to rotate back to the current item's rotation value
		setTimeout(() => {
			rotate(rotationValues[i]);
		}, 300);

		// Hide all descriptions
		description.forEach((text) => {
			text.style.display = "none";
		});

		// Show the description for the clicked item
		description[i].style.display = "block";

		// Update the current item index
		itemIndex = i;
	});
});

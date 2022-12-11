const leftButton = document.getElementById("left--button");
const rightButton = document.getElementById("right--button");

const items = document.getElementsByClassName("carousel-item");

let activeItem = 0;

let itemIds = [];

for (let i = 0; i < items.length; i++) {
	const id = `carousel-item-${i}`;
	items[i].setAttribute("id", id);
	itemIds.push(id);
}

const nextItem = () => {
	if (activeItem === itemIds.length - 1) {
		activeItem = 0;
	} else {
		activeItem += 1;
	}
	const element = document.getElementById(itemIds[activeItem]);
	element.scrollIntoView({ behavior: "smooth" });
};

const lastItem = () => {
	if (activeItem === 0) {
		activeItem = itemIds.length - 1;
	} else {
		activeItem -= 1;
	}
	const element = document.getElementById(itemIds[activeItem]);
	element.scrollIntoView({ behavior: "smooth" });
};

rightButton.addEventListener("click", nextItem);
leftButton.addEventListener("click", lastItem);

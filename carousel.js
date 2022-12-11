const leftButton = document.getElementById("left--button");
const rightButton = document.getElementById("right--button");

let activeEmployee = 0;

const employeeIds = [
	"employee-0",
	"employee-1",
	"employee-2",
	"employee-3",
	"employee-4",
	"employee-5",
	"employee-6",
];

const nextEmployee = () => {
	if (activeEmployee === employeeIds.length - 1) {
		activeEmployee = 0;
	} else {
		activeEmployee += 1;
	}
	const element = document.getElementById(employeeIds[activeEmployee]);
	element.scrollIntoView({ behavior: "smooth", block: "end" });
};

const lastEmployee = () => {
	if (activeEmployee === 0) {
		activeEmployee = employeeIds.length - 1;
	} else {
		activeEmployee -= 1;
	}
	const element = document.getElementById(employeeIds[activeEmployee]);
	element.scrollIntoView({ behavior: "smooth", block: "end" });
};

rightButton.addEventListener("click", nextEmployee);
leftButton.addEventListener("click", lastEmployee);

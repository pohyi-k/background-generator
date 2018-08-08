var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// 1. Write code so that the colour inputs match the background generated on the first page load. 
setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

var random = document.createElement("button");
random.innerText = "random";
document.body.appendChild(random);

function randomColor() {

	var r1 = Math.floor(Math.random() * 256).toString();
	var g1 = Math.floor(Math.random() * 256).toString();
	var b1 = Math.floor(Math.random() * 256).toString();
	var r2 = Math.floor(Math.random() * 256).toString();
	var g2 = Math.floor(Math.random() * 256).toString();
	var b2 = Math.floor(Math.random() * 256).toString();

	body.style.background= "linear-gradient(to right, rgb("+r1+","+
	g1+","+ b1+"), rgb("+ r2+","+g2+","+b2+"))";
	css.textContent= body.style.background + ";";
}

random.onclick = randomColor;

// Defining my variables by selecting the DOM elements by ID that the user will interact with.
const height = document.getElementById("inputHeight").value;
const width = document.getElementById("inputWidth").value;
const table = document.getElementById("pixelCanvas");

//

function makeGrid() {
	/* Declaring my variable inside the function 
	  Create a grid of squares by:
  	  selecting int $width - number of squares representing the width of the grid
      selecting int $height - number of squares representing the height of the grid
	  then we create a Table representing that grid 
	*/

	let height = inputHeight.value;
	let width = inputWidth.value;

	html = "";

	for (var i = 0; i < height; i++) {
		html += "<tr>";

		for (var j = 0; j < width; j++) {
			html += "<td onclick='this.style.backgroundColor=setColor()'></td>";
		}
		html += "</tr>";
	}
	table.innerHTML = html;
	return false;
}
// function to return color every time we pick a color from Design Canvas "Pick A Color"
function setColor() {
	const color = document.getElementById("colorPicker").value;
	return color;
}

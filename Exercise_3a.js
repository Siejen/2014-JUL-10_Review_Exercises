//3.) Listen for a click on div_1 through div_5 and each time something is clicked update the last_clicked element 
// with the content from the div that was clicked.

window.onload =  function(event){ 
	var divOne = document.getElementById("div_1");
	var divTwo = document.getElementById("div_2");
	var divThree = document.getElementById("div_3");
	var divFour = document.getElementById("div_4");
	var divFive = document.getElementById("div_5");
	var lastClicked = document.getElementById("last_clicked");

	divOne.onclick = function(event) {
		lastClicked.innerHTML = divOne.innerHTML;
	}

	divTwo.onclick = function(event) {
		lastClicked.innerHTML = divTwo.innerHTML;
	}

	divThree.onclick = function(event) {
		lastClicked.innerHTML = divThree.innerHTML;
	}

	divFour.onclick = function(event) {
		lastClicked.innerHTML = divFour.innerHTML;
	}

	divFive.onclick = function(event) {
		lastClicked.innerHTML = divFive.innerHTML;
	}
}

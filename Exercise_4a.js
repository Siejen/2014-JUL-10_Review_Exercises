//4.) Listen for a click on div_1 through div_5 and each time something is clicked update the last_clicked 
// element with the content from the div that was clicked, and take the old last clicked to update the previously_clicked

window.onload =  function(event){ 
	var divOne = document.getElementById("div_1");
	var divTwo = document.getElementById("div_2");
	var divThree = document.getElementById("div_3");
	var divFour = document.getElementById("div_4");
	var divFive = document.getElementById("div_5");
	var lastClicked = document.getElementById("last_clicked");
	var previousClicked = document.getElementById("previously_clicked");

	divOne.onclick = function(event) {
		previousClicked.innerHTML = lastClicked.innerHTML;		
		lastClicked.innerHTML = divOne.innerHTML;
	}

	divTwo.onclick = function(event) {
		previousClicked.innerHTML = lastClicked.innerHTML;	
		lastClicked.innerHTML = divTwo.innerHTML;
	}

	divThree.onclick = function(event) {
		previousClicked.innerHTML = lastClicked.innerHTML;
		lastClicked.innerHTML = divThree.innerHTML;
	}

	divFour.onclick = function(event) {
		previousClicked.innerHTML = lastClicked.innerHTML;
		lastClicked.innerHTML = divFour.innerHTML;
	}

	divFive.onclick = function(event) {
		previousClicked.innerHTML = lastClicked.innerHTML;
		lastClicked.innerHTML = divFive.innerHTML;
	}
}

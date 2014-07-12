//2.) Listen for a click on the div_1 id and update the count div's innerHTML count.

window.onload =  function(event){ 
	var divOne = document.getElementById("div_1");
	var divTwo = document.getElementById("div_2");
	var count = 0;

	divOne.onclick = function(event) {
		count++;
		divOne.innerHTML = count;
	}

	divTwo.onclick = function(event) {
		count++;
		divTwo.innerHTML = count;
	}

}

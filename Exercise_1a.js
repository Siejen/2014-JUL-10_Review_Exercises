//1.) Listen for a click on the div_1 id and alert with the innerHTML of the count id div.

window.onload =  function(event){ 
	var divOne = document.getElementById("div_1");
	var count = 0;

	divOne.onclick = function(event) {
		count++;
		alert("This has been clicked " + count + " time(s)!");
	}
}
 
      // var lastClicked = document.getElementById("last_clicked");
      
      // var divOne = document.getElementById("div_1");
      // divOne.onclick = function(event){
      //   lastClicked.innerHTML = divOne.innerHTML;
      // }
      
      //  var divTwo = document.getElementById("div_2");
      // divTwo.onclick = function(event){
      //  lastClicked.innerHTML = divTwo.innerHTML;
      // }
      
      //  var divThree = document.getElementById("div_3");
      // divThree.onclick = function(event){
      //   lastClicked.innerHTML = divThree.innerHTML;
      // }

      // var divFour = document.getElementById("div_4");
      // divFour.onclick = function(event){
      //   lastClicked.innerHTML = divFour.innerHTML;
      // }

      // var divFive = document.getElementById("div_5");
      // divFive.onclick = function(event){
      //   lastClicked.innerHTML = divFive.innerHTML;
      // }

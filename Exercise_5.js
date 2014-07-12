//5.) Listen for a click on div_1 through div_5 and 
//each time something is clicked change its color to blue element with the content from the div. 
//On each click update the previously_clicked element with content from the last clicked element.

window.onload =  function(event){ 
  var divOne = document.getElementById("div_1");
  var divTwo = document.getElementById("div_2");
  var divThree = document.getElementById("div_3");
  var divFour = document.getElementById("div_4");
  var divFive = document.getElementById("div_5");
  var lastClicked = document.getElementById("last_clicked");
  var previousClicked = document.getElementById("previously_clicked");

  divOne.onclick = function(event) {
    divOne.style.color = "blue";
    previousClicked.innerHTML = lastClicked.innerHTML;
    lastClicked.innerHTML = divOne.innerHTML;
  }

  divTwo.onclick = function(event) {
    divTwo.style.color = "blue";   
    previousClicked.innerHTML = lastClicked.innerHTML;
    lastClicked.innerHTML = divTwo.innerHTML;
  }

  divThree.onclick = function(event) {
    divThree.style.color = "blue"; 
    previousClicked.innerHTML = lastClicked.innerHTML;
    lastClicked.innerHTML = divThree.innerHTML;
  }

  divFour.onclick = function(event) {
    divFour.style.color = "blue"; 
    previousClicked.innerHTML = lastClicked.innerHTML;
    lastClicked.innerHTML = divFour.innerHTML;
  }

  divFive.onclick = function(event) {
    divFive.style.color = "blue"; 
    previousClicked.innerHTML = lastClicked.innerHTML;
    lastClicked.innerHTML = divFive.innerHTML;
  }
}

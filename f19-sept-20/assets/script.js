
var j = 0; // to keep track of how many times you want to loop, you have to simulate a for loop:

var myAppendingFunction = function(){

	var rotation = Math.round((j/10) * 360);
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="square" style="transform:rotate(${rotation}deg);"></div>
		setInterval has run ${j} times <br>`);

	if(j >= 10){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	j++;
}


var myAnimating = setInterval(myAppendingFunction, 500);


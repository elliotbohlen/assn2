

var j = 0; // to keep track of how many times you want to loop, you have to simulate a for loop:

var myAppendingFunction = function(){

	var rotation = Math.round((j/10) * 360);
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="patternUnit" style="
    position:absolute;
    right:${j*20}px;
    display:inline-block;
    height:700px;
    width: 700px;
    border-radius: 50%;
    border: 2px solid white;"
        ></div>`);

	if(j >= 6000){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	j++;
}


var myAnimating = setInterval(myAppendingFunction, 500);











var i = 0; // to keep track of how many times you want to loop, you have to simulate a for loop:

var myAppendingFunction = function(){
document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="patternUnit" style="
    animation: infinite 20s animateMe2;
    position:absolute;
    top:40px;
    left:${i*20}px;
    display:inline-block;
    height:800px;
    width: 800px;
    border-radius: 50%;
    border: ${i+.5}px solid white;"
        ></div>`);

	if(j >= 6000){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	j++;
}


var myAnimating = setInterval(myAppendingFunction, 500);










/*
var myWrapper = document.getElementById("wrapper");

var Num = i; 
  for (var i = 0; i < 60; i++) { //this value is the number of circles
    Num = Num + 20;
  var myModule = `
<div class="patternUnit" style="
    position:absolute;
    right:${i*20}px;
    display:inline-block;
    height:50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid white;
    transform:rotate(10deg);"
        ></div>`; 
myWrapper.insertAdjacentHTML('beforeend', myModule) 
};
*/


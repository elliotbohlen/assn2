
//NUMBER 1 circles function
var i = 1;
var appendcircleFunction = function(){

    var circle = `<div class="patternunit" style="
    left:${i*20}px;
    animation: infinite 20s animateMe2;"></div>`;

 document.getElementById("box").insertAdjacentHTML('beforeend', circle);

if(i >= 10){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	i++;
}
var myCircle = setInterval(appendcircleFunction, 100);









/*
//MOUSE
// 1. Store interface element in a variable
var element3 = document.querySelector('#linebox');
// 2. Define the functionality that will happen on click
var example3Event = function(event) {
    // x and y coordinates for cursor
  var x = event.offsetX * 50;
  var y = event.offsetY * 50;
    // print to console for debugging
  console.log(x, y);

    // string coordinates together
  var text = 'X: ' + x + ' Y: ' + y;

    // Add cursor coordinates to DOM
var elem = document.getElementsByClassName("patternunit");
    elem.style.transform = 'scale('+ x + ')';


};
   // 3. Connect function and click event to interface element
element3.addEventListener('mousemove', example3Event);
*/

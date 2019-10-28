//NUMBER 1 circles function 

var i = 1;   
var appendcircleFunction = function(){
    
    var circle = `<div class="patternunit" style="
    right:${i*20}px;"></div>`;
    
 document.getElementById("box").insertAdjacentHTML('beforeend', circle);
 
if(i >= 100){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	i++;
}
var myCircle = setInterval(appendcircleFunction, 500);

///////

//NUMBER 2 circles function 
  
var appendcircleFunction = function(){
    
    var circle = `<div class="patternunit" style="
    right:${i*20}px;"></div>`;
    
 document.getElementById("box2").insertAdjacentHTML('beforeend', circle);
 
if(i >= 100){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	i++;
}
var myCircle = setInterval(appendcircleFunction, 500);

  
var appendcircleFunction = function(){
    
    var circle = `<div class="patternunit" style="
    right:${i*20}px;"></div>`;
    
 document.getElementById("box2").insertAdjacentHTML('beforeend', circle);
 
if(i >= 100){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	i++;
}
var myCircle = setInterval(appendcircleFunction, 500);

  
var appendcircleFunction = function(){
    
    var circle = `<div class="patternunit" style="
    right:${i*20}px;"></div>`;
    
 document.getElementById("box3").insertAdjacentHTML('beforeend', circle);
 
if(i >= 100){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	i++;
}
var myCircle = setInterval(appendcircleFunction, 500);

  
var appendcircleFunction = function(){
    
    var circle = `<div class="patternunit" style="
    right:${i*20}px;"></div>`;
    
 document.getElementById("box4").insertAdjacentHTML('beforeend', circle);
 
if(i >= 100){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	i++;
}
var myCircle = setInterval(appendcircleFunction, 500);







// color




//MOUSE

// 1. Store interface element in a variable
var element3 = document.querySelector('#bg');
// 2. Define the functionality that will happen on click
var example3Event = function(event) {  
    // x and y coordinates for cursor
  var x = event.offsetX / 50;
  var y = event.offsetY / 50;  
    // print to console for debugging
  console.log(x, y);  
  
    // string coordinates together
  var text = 'X: ' + x + ' Y: ' + y;
  
    // Add cursor coordinates to DOM
var elem = document.getElementById("bg");
    elem.style.transform = 'rotate('+ y +'deg)';
   
      
};
   // 3. Connect function and click event to interface element
element3.addEventListener('mousemove', example3Event);

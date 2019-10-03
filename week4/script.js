



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

//MOUSE







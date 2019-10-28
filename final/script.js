// 1. Store interface element in a variable
var element3 = document.querySelector('#move');
// 2. Define the functionality that will happen on click
var example3Event = function(event) {
   // x and y coordinates for cursor
 var x = event.offsetX / 5;
 var y = event.offsetY / 5;

var elem = document.getElementById("wrapper");
   elem.style.transform = 'skew('+ x +'deg)';

};
 // 3. Connect function and click event to interface element
    element3.addEventListener('mousemove', example3Event);




//NUMBER 1 circles function
var i = 1;
var appendcircleFunction = function() {
 var circle = `<div class="patternunit" style="
   left:${i * 20}px;
   animation: infinite 20s animateMe2;"></div>`;
 document.getElementById("box").insertAdjacentHTML("beforeend", circle);

 if (i >= 10) {
   // defining the maximum amount of cycles
   clearInterval(myAnimating);
 }
 i++;

};
var myCircle = setInterval(appendcircleFunction, 100);


///



var i = 1;
var appendlineFunction = function() {
 var line = `<div class="patternunit2" style="

   animation: infinite 20s animateMe;"></div>`;
 document.getElementById("box2").insertAdjacentHTML("beforeend", line);

 if (i >= 10) {
   // defining the maximum amount of cycles
   clearInterval(myAnimating);
 }
 i++;
};
var myLine = setInterval(appendlineFunction, 100);


//



function classToggle() {
   this.classList.toggle('class1');
   this.classList.toggle('class2');
}
document.querySelector('#box').addEventListener('click', classToggle);

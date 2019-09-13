/* This is a comment */
// this is also a comment

/* this javascript document contains two examples: */

/****************** EXAMPLE 1: ******************/
// example 1 outputs in the console

// my array:
var myExampleArray = [
        44,
        ['inception', 'nested string'],
        'string'
      ];

// to access a specific value within an array use the square
// brackets to identify which index you want to access:

// first value (i.e. '44' of myExampleArray)
console.log(myExampleArray[0])

// third value (i.e. 'string' of myExampleArray)
console.log(myExampleArray[2])


// a for loop cycling through myExampleArray:
for (var i = 0; i < myExampleArray.length; i++) {

  if(Array.isArray(myExampleArray[i])){
    // this value of myExampleArray is a nested array
    for (var j = 0; j < myExampleArray[i].length; j++) {
      console.log(myExampleArray[i][j])
    }

  }else{
    // this value of myExampleArray is NOT an array
    console.log(myExampleArray[i])
  }
}


/****************** EXAMPLE 2: ******************/

// example 2 outputs in our html document
// the line below searches our HTML document for our element by its id
var myWrapper = document.getElementById("box1");

for (var i = 0; i < 300; i++) {
  // the for loop runs 50 times, so it adds the div below 50 times
  // the string below contains a div, which is added (+=) to our wrapper with each for loop cycle.
  // within our string, we are using the variable "i" to generate numbers that output inline css values
  myWrapper.innerHTML += '<div class="patternUnit" style="transform: skew('+ (i * 300) +'deg); ">⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤</div>';

}

/*
var myotherWrapper = document.getElementById("box2");

for (var i = 0; i < 100; i++) {
  // the for loop runs 50 times, so it adds the div below 50 times
  // the string below contains a div, which is added (+=) to our wrapper with each for loop cycle.
  // within our string, we are using the variable "i" to generate numbers that output inline css values
  myWrapper.innerHTML += '<div class="patternUnit" style="backgroaund-color: hsl('+ (120 + i) +',100%, 50%); transform: skew(-'+ (i * 20) +'deg);"> </div>';

}
*/

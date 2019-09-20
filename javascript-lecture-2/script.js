/*
for (var i = 0; i < array.length; i++) {
  console.log(i)
}


var myVar = '<h1>string';
var newVar = myVar + ' another string </h1>';
console.log(newVar);
//combines vars to make a new string


  //myWrapper.innerHTML = newVar; //inner html appendss


/******** TEMPLATE LITERALS********/
//math
/*
var randomnum = Math.random();
  console.log("random number:", Math.round(randomnum * 15));
//produces decimal unless u multiply by ten

  Math.round()
  Math.ciel(rounds up), Math.floor(round down)
*/
var myWrapper = document.getElementById("wrapper");

var changingColor = 10; //global variable, starts at 10. every time loop runs, updated by value of twenty
  for (var i = 0; i < 10; i++) {

    changingColor = changingColor + 20;
    var degrees = (i/10) * 360; //gives a max #
    if (i % 2 === 0){
      //even
    }else{
      ((i-1)/10 * 360) //odd
    }

  var myModule = `
    <div class="module" style="background-color: rgb(${changingColor},0,0);">
      <div class="module_child" style="
      background-color:rgb(255,${changingColor},0);
      transform:rotate(${degrees}deg);">
      ${i}
        </div>
    </div>`; //under esape key, backticks allows to enter
          // ${ puts variable in here}
    //myWrapper.innerHTML =+ myModule; //= overrides/ adds to
    if (i % 2 === 0){
      myWrapper.insertAdjacentHTML('beforeend', myModule); //even =adds to the end
    }else{
      ((i-1)/10 * 360) //odd
        myWrapper.insertAdjacentHTML('afterend', myModule) //technically could put another template module with a diff variable
    }
          //instead of append child- use insertAdjacentHTML
          //'beforebegin' beore a specific element starts
          //'afterbegin' after the start of wrapper
          //'beforeend' before end of wrapper
          //'afterend' before an element is completed
};



/*
//while statements
var i = 0;
var myString = "hey"

while (i < 10 && myString === "hey") { //two conditionals
    console.log("The number is " + i, myString); //runs forever, can break page

    if (i == 4) {
      myString += "!"; //runs four times beause it changes

    }
    i++;
}
*/

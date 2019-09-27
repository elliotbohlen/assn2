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
    
      <div class="module_child" style="
    position:relative;
    display:inline-block;
      background-color:rgb(255,${changingColor},0);
      transform:rotate(${degrees}deg);">
      ${i}
        </div>
    </div>`; //under esape key, backticks allows to enter
          // ${ puts variable in here}
    //myWrapper.innerHTML =+ myModule; //= overrides/ adds to
    
        myWrapper.insertAdjacentHTML('beforeend', myModule) //technically could put another template module with a diff variable
    
          //instead of append child- use insertAdjacentHTML
          //'beforebegin' beore a specific element starts
          //'afterbegin' after the start of wrapper
          //'beforeend' before end of wrapper
          //'afterend' before an element is completed
};



/*

<div class="module" style="background-color: rgb(${changingColor},0,0);">



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

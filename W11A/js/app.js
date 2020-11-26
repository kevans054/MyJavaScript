// Assignment W11A 
// Karen Evans
// November 24, 2020

// change the color of the button when it is clicked
document.getElementById('ClrBtn').addEventListener("click", myColorFunction);

function myColorFunction() {
  document.getElementById("ClrBtn").style.backgroundColor = "red";
}

//  on mouse enter
document.getElementById('mouseOn').addEventListener('mouseenter', mouseEnter);
function mouseEnter() { //onmouseover
  let enter = document.getElementById('mouseOn');
  enter.innerHTML = "You are in the zone!"
}

// on mouse exit
document.getElementById('mouseOn').addEventListener('mouseleave', mouseExit);
function mouseExit() { //onmouseout
  let exit = document.getElementById('mouseOn');
  exit.innerHTML = "Come back!"
}


//  capture the pressed key to see if it is the spacebar
document.getElementById("press").addEventListener("keypress", myFunction);

function myFunction(keypress) {
  let x = keypress.keyCode;
  let message = document.getElementById("press")
  if(x == 32) {
    alert('You pressed the spacebar');
   
  } else {
    alert('That is not the spacebar. Oops! Try again.');
  }
}

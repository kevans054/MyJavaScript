
var color = Cookies.get("selection");


console.log(color);

if (color == "Red" || color == "Blue" || color == "Green") {
    console.log(color);
    var UserMsg = document.createElement('h1');
    UserMsg.innerHTML = ("You've selected " + color);
    var target = document.querySelector("body>div");
    target.appendChild(UserMsg);
    document.body.style.backgroundColor = color;
    Cookies.remove("Selection");
}

else {
    console.log(color);
    var UserMsg2 = document.createElement('h2');
    UserMsg2.innerHTML = ("We did not receive your selection. Please return to the previous page and make your selection.");
    var target = document.querySelector("body>div");
    target.appendChild(UserMsg2);
    document.body.style.backgroundColor = 'orange';
    Cookies.remove("Selection");
}

function goBack() {
    window.history.back()
  }
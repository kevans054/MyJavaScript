var color = Cookies.get("selection");
console.log(color);

var UserSelection = document.createElement("p");
UserSelection.innerHTML = ("You've selected the " + color);
var target = document.querySelector(".body>div");
document.body.appendChild(UserSelection);     
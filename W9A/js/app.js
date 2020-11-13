// Assignment W9B
//  Karen Evans
// November 12, 2020

var ages = [12, 18, 25];
var is_subscribed = ["yes", "No", "Yes"];


if (age < 18 && is_subscribed == false) {
    console.log(age + " is too young and you are not subscribed to this site!");
}
else if (age >= 18 && is_subscribed == false) {
    console.log(age + " is permitted but you are not subscribed to this site.");
}
else if (age < 18 && is_subscribed == true) {
    console.log(age  + " is too young but you are subscribed to this site.");
}

else {
    console.log(age + " is the correct age and you are subscribed to this site.");
}
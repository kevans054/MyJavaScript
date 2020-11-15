// Assignment W9B
//  Karen Evans
// November 12, 2020

var age = 12;
var is_subscribed = true;



if(age < 18 && is_subscribed==false) {
    console.log(age  + " is too young and you are not subscribed to this site!");
}

else if(age < 18 && is_subscribed==true) {
    console.log(age  + " is too young but you are subscribed to this site.");
}

else if(age > 18 && is_subscribed ==false) {
    console.log(age + " you are of age but you are not subscribed to this site.");
}
else if(age > 18 && is_subscribed==true) {
    console.log(age + " you are of age and you are subscribed to this site.");
}

else{
    console.log(age + " uh oh.");   
}

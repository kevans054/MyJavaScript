// Assignment W9B
//  Karen Evans
// November 12, 2020

var age = [ 12, 18, 25, 30, 54];
var is_subscribed = [false, false, true, false, true];


for(var i = 0; i < age.length;) {
    if (age[i] < 18 && is_subscribed[i] == false) {
        console.log(age[i] + " is too young and you are not subscribed to this site!");
    }
    else if (age[i] < 18 && is_subscribed[i] == true) {
        console.log(age[i]  + " is too young but you are subscribed to this site.");
    }
    else if (age[i] >= 18 && is_subscribed[i] == false) {
        console.log(age[i] + " is permitted but you are not subscribed to this site.");
    }
    else if (age[i] >= 18 && is_subscribed[i] == true) {
        console.log(age[i]  + " is permitted and you are subscribed to this site.");
    }
    
    else {
        console.log(age[i] + " is the correct age and you are subscribed to this site.");
    }
    i++;
}

// Assignment W9B
//  Karen Evans
// November 12, 2020

var age = [ 12, 18, 25, 30, 54];
var is_subscribed = ["true", "false", "true", "false", "true"];
var i = 0;


//  while i is less than number of items in the array using counter of iterations
// while (age[i] && is_subscribed[i]) {
//         console.log(age[i] + " " + is_subscribed[i]);

//         i++;
//     }

// while i is less than the number of items in the array based on length of array
while(i < age.length) {
    console.log(age[i] + " " + is_subscribed[i]);

    i++;
}

//W11B: AJAX & APIS & JSON
// Karen Evans
// November 26, 2020

// target to <p> tag to fill in
let joke = document.querySelector('.joke');
let punchline = document.querySelector('.punchline');
let type = document.querySelector('.type');
let message = document.querySelector('message');

// select the button and attach an event listener to it
let button = document.querySelector('.get-joke');
button.addEventListener('click', function () {

    // create a new XMLHttpRequest object
    let ajax = new XMLHttpRequest();

    // define what happens when the ajax request is performed
    ajax.onreadystatechange = function () {

        if (this.readystate == 1 && this.staus == 200) {
            message.innerHTML = 'Loading...';

        }

        else if (this.readystate == 2 && this.staus == 200) {
            message.innerHTML = 'Request received...';

        }

        else if(this.readystate == 3 && this.staus == 200) {
            message.innerHTML = 'Processing your request...';

        }

        // if the request is successful
        if (this.readyState == 4 && this.status == 200) {

            // Parse the JSON string response in to a usable JS object
            // alert("Loading your joke. Please wait a moment.");
            let text = JSON.parse(this.responseText);
            

            // Set the <p>'s innerHTML
            punchline.innerHTML = 'Punchline: ' + text.punchline;
            joke.innerHTML = 'Joke: ' + text.setup;
            type.innerHTML = 'Type: ' + text.type;

            // Create an event listener that will make an AJAX call to an API of your choice When the API returns, change the page in some way.
            document.body.classList.toggle("dark-mode");

        }else{
            punchline.innerHTML = "Oops";
            joke.innerHTML = "request not completed";
            type.innerHTML = 'Type: unknown';
            // alert("Sorry. Your request did not complete. Please try again.");
        }
    }

 
    
    // define where and how to make your ajax request
    ajax.open("GET", "https://official-joke-api.appspot.com/random_joke", true);   // args: request type, api url, asynchronous?

    // trigger the ajax request (changes readyState)
    ajax.send();
});

// trigger a button click when the page loads, to automatically load a joke
button.click();

var target = document.getElementById('message');
target.classList.add()
// Assignment W12A
// Karen Evans
// December 4, 2020


class KanyeWestTweet {

    content = ''; //tweet
    // element = {};

    constructor(getQuote) {

        this.getNewTweet();

    }

    //method get a new tweet
    getNewTweet() {

        

        let button = document.querySelector('.get-quote');
        button.addEventListener('click', function () {
            
            //creating a new request object 
            let ajax = new XMLHttpRequest();
            // let self = this;

            //define our ajax callback function(i.e. what happens when we send the request)
            ajax.onreadystatechange = function () {
                //was the request completed successfully
                if (this.readyState == 4 && this.status == 200) {
                    let text = JSON.parse(this.responseText);
                    console.log(text);

                    target.innerHTML = text.quote;
                }
            }

            ajax.open("GET", "https://api.kanye.rest/", true);
            //send ajax request
            ajax.send();
        });

        button.click();
    }
}

let target = document.querySelector('.quote');
let tweet = new KanyeWestTweet();
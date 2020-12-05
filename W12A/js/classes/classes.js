// Assignment W12A
// Karen Evans
// December 4, 2020


class KanyeWestTweet {

    content = ''; //tweet

    constructor(getQuote) {

        this.getNewTweet();
    }

    //method get a new tweet
    getNewTweet() {

        let button = document.querySelector('.btn');
        button.addEventListener('click', function () {
            
            //creating a new request object 
            let ajax = new XMLHttpRequest();

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
        //load a quote when the page loads
        button.click();
    }
}

let target = document.querySelector('.text-center');
let tweet = new KanyeWestTweet();

// const selector = document.querySelector('.yourdiv')
// selector.classList.add('magictime', 'puffIn')
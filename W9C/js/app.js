// Assignment W9C
//  Karen Evans
// November 14, 2020

var tweets = [
'Good morning everyone!',
'Saturday mornings are for sleeping in.',
'Coffee should always be ready when you need some.',
'It is too early to be awake and thinking.',
'Christmas is only 6 weeks away.',
'Have you started shopping yet?',
'Christmas shopping during a pandemic...scary thought.'
];

// outputs to the screen 
    // document.write(tweets)

    document.write('while loop list one')
    document.write('<ul>');
    var counter = 0;
    while(counter < 6){
        document.write('<li>' + tweets[counter] + '</li>');
        counter++;
    }
    document.write('</ul>');

    document.write('for loop')
    document.write('<ul>')
    for(var i = 0; i < 6; i++) {
        document.write('<li>' + tweets[i] + '</li>');
    }
    document.write('</ul>');


    // document.write('<ul>')
    // for(var i = 0; i < tweets.length; i++) {
    //     document.write('<li>' + tweets + '</li>');
    // }
    // document.write('</ul>');


    // Bonus material
    //  an array object
    
    let user_tweet_details = [
        {
        tweet:'Good morning everyone!',
        username:'K.Evans',
        created:'November 13, 2020',
        ages:'29'
        },
        {
                tweet:'Saturday mornings are for sleeping in.',
                username:'K.Evans',
                created:'November 14, 2020',
                ages:'29'
                },
                {
                tweet:'Coffee should always be ready when you need some.',
                username:'K.Evans',
                created:'November 15, 2020',
                ages:'29'
                },
                {
                    tweet:'It is too early to be awake and thinking.',
                    username:'K.Evans',
                    created:'November 16, 2020',
                    ages:'29'
                    },
                    {
                        tweet:'Christmas is only 6 weeks away.',
                        username:'K.Evans',
                        created:'November 17, 2020',
                        ages:'29'
                        },
                        {
                            tweet:'Have you started shopping yet?',
                            username:'K.Evans',
                            created:'November 18, 2020',
                            ages:'29'
                            },
                            {
                                tweet:'Christmas shopping during a pandemic...scary thought.',
                                username:'K.Evans',
                                created:'November 18, 2020',
                                ages:'29'
                                },
    ];

    console.log('User object array')
    for(var i = 0; i < user_tweet_details.length; i++) {
        console.log(user_tweet_details[i]);
    }
    
    
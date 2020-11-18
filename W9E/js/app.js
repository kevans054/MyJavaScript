// Assignment W9E
//  Karen Evans
// 11- 17, 2020


var user_tweet_details = [
    {
        tweet: 'Good morning everyone!',
        username: 'JoeBlow',
        created_at: '11-13-2020',
        ages: '15'
    },
    {
        tweet: 'Saturday mornings are for sleeping in.',
        username: 'S.Smith',
        created_at: '11-14-2020',
        ages: '34'
    },
    {
        tweet: 'Coffee should always be ready when you need some.',
        username: 'K.Evans',
        created_at: '11-15-2020',
        ages: '29'
    },
    {
        tweet: 'It is too early to be awake and thinking.',
        username: 'Donna D.',
        created_at: '11-16-2020',
        ages: '17'
    },
    {
        tweet: 'Christmas is only 6 weeks away.',
        username: 'Santa',
        created_at: '11-17-2020',
        ages: '100'
    },
    {
        tweet: 'Have you started shopping yet?',
        username: 'Mother Nature',
        created_at: '11-18-2020',
        ages: '150'
    },
    {
        tweet: 'Christmas shopping during a pandemic...scary thought.',
        username: 'K.Evans',
        created_at: '11-18-2020',
        ages: '29'
    },
    {
        tweet: 'Javascript is awesome!',
        username: 'E. Winters',
        created_at: '11-19-2020',
        ages: '19'
    },
    {
        tweet: 'Array map, reduce & filter.',
        username: 'Suzie Ques',
        created_at: '11-20-2020',
        ages: '50'
    },
    {
        tweet: 'Good night everyone!',
        username: 'Fred Flintstone',
        created_at: '11-21-2020',
        ages: '8'
    },
];


function ageVerify(tweet_details) {

        return tweet_details.ages >= 18;
   
};


// Filter function it takes an existing list filters it with another function and returns a new list.
var filtered_tweets = user_tweet_details.filter(ageVerify);
console.log(filtered_tweets);
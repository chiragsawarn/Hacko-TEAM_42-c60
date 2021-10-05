import Promise from 'bluebird';

const quoteArray = [{
    text : '" Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ”', 
    author : 'Martin Fowler'
}, {
    text : '“ First, solve the problem. Then, write the code. ”',
    author : 'John Johnson'
}, {
    text : '“ In order to be irreplaceable, one must always be different. ”',
    author : 'Coco Chanel'
}, {
    text : '“ Java is to JavaScript what car is to Carpet. ”',
    author : 'Chris Heilmann'
}, {
    text : '“ Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. ” ',
    author : 'Antoine de Saint-Exupery'
}, {
    text : '“ Ruby is rubbish! PHP is phpantastic! ” ', 
    author : 'Nikita Popov'
}, {
    text : '“ Code is like humor. When you have to explain it, it’s bad. ”', 
    author : 'Cory House'
}, {
    text : '“ Fix the cause, not the symptom. ”', 
    author : 'Steve Maguire'
}, {
    text : '“ Optimism is an occupational hazard of programming: feedback is the treatment. “', 
    author : 'Kent Beck'
}, {
    text : '“ When to use iterative development? You should use iterative development only on projects that you want to succeed. ” ', 
    author : 'Martin Fowler'
}, {
    text : '“ Simplicity is the soul of efficiency. ” ', 
    author : ' Austin Freeman'
}, {
    text : '“ Before software can be reusable it first has to be usable. ” ',
    author : 'Ralph Johnson'
}, {
    text : '“ Make it work, make it right, make it fast. ” ', 
    author : 'Kent Beck'
}, {
    text : '“ I have never started a poem yet whose end I knew. Writing a poem is discovering ” ', 
    author : 'Robert Frost'
}, {
    text : '“ Difficulties mastered are opportunities won ” ', 
    author : 'Winston Churchill'
}, {
    text : '“ Imagination is everything. It is the preview of life’s coming attractions. ” ', 
    author : 'Albert Einstein'
}, {
    text : '“ A bird doesn’t sing because it has an answer; it sings because it has a song ” ', 
    author : 'Maya Angelou'
}
];

export function fetchQuote(quoteNumber) {
    return new Promise((resolve) => {
            resolve(quoteArray[quoteNumber]);
    })
}
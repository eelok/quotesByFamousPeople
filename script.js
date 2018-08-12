const simpleQuotes = [
    {
        name: 'Stephen King.',
        quote: 'Get busy living or get busy dyint.',
    },
    {
        name: 'Abraham Lincoln.',
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name: 'John F. Kennedy.',
        quote: 'Those Who Dare to fail Miserably Can Achieve Greatly.',
    },
    {
        name: 'Leanardo Da Vinci.',
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
    },
    {
        name: 'Pele.',
        quote: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.'
       
    },
    {
        name: 'Jenn Proske',
        quote: 'Love yourself. It is important to stay positive because beauty comes from the inside out.'
    }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*simpleQuotes.length);
    quoteAuthor.innerHTML = simpleQuotes[number].name;
    quote.innerHTML = simpleQuotes[number].quote;
}
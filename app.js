// Author: Behshad Babai

// array containing random messages
let msg = ['Believe in yourself. Your limitation—it\'s only your imagination.', 'Work hard. Push yourself, because no one else is going to do it for you.', 'Don\'t wait.', 'Step outside your comfort zone.', 'Be a dreamer and a doer'];

// function that generates random msg
const generateRandomMsg = () => {
    return msg[(Math.floor(Math.random()*5))];
};

// displaying the random message
console.log(generateRandomMsg());
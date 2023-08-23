'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20;
let highscore = 0;


const name =prompt("Enter your name")

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //When there is no Input
    if(!guess){
        document.querySelector('.message').textContent = `${name}, enter a number please`;
        // document.querySelector('.message').textContent = '⛔ No number!';


    //When the player wins
    }else if(guess === secretNumber){
     document.querySelector('.message').textContent = '🥳 Correct Number!'
     document.querySelector('.number').textContent = secretNumber; 

     document.querySelector('body').style.backgroundColor = '#60b347';

     document.querySelector('.number').style.width = '30rem'

     if(score > highscore){
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
     }

     // When guess is wrong
    }else if(guess !== secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ?  '📈 Too High!' : '📉 Too Low!';
           score--;
           document.querySelector('.score').textContent = score;
       }else{
           document.querySelector('.message').textContent = `You lost the game ${name}`;
           document.querySelector('.score').textContent = 0;
       }
    }
});

document.querySelector('.again').addEventListener('click', function(){
     score = 20;
     secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#ff7edd'
    document.querySelector('.number').style.width = '15rem';
})
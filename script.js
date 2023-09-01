'use strict';
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent ="correct numper🎉"
document.querySelector('.number').textContent =13
document.querySelector('.score').textContent =10
document.querySelector('.guess').value =23*/
let Snumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScorre =0;
 const disblayMessage = function (message) {
  document.querySelector('.message').textContent =message;
 }
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
      disblayMessage('🚫 no numper 🚫');
    //when player wins the game
  } else if (guess === Snumber) {
    disblayMessage( 'correct numper🎉');
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent = Snumber;
    if (score>hightScorre) {
        hightScorre=score;
        document.querySelector('.highscore').textContent=hightScorre;
    }
  }
    else if (guess !== Snumber) {
        if (score > 1) {
            disblayMessage(guess > Snumber ? 'Too hight ⬆️':'Too low ⬇️');
            score--;
            document.querySelector('.score').textContent = score;
          } else {
            disblayMessage('Loser 👎');
            document.querySelector('.score').textContent = 0;
          }
    }
  }
);
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.score').textContent = 20;
    Snumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?";
    disblayMessage( 'Start guessing ....');
    document.querySelector('.guess').value="";


});


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
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 no numper 🚫';
    //when player wins the game
  } else if (guess === Snumber) {
    document.querySelector('.message').textContent = 'correct numper🎉';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent = Snumber;
    if (score>hightScorre) {
        hightScorre=score;
        document.querySelector('.highscore').textContent=hightScorre;
    }
    else if (guess!==Snumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =guess>Snumber? 'Too hight ⬆️':'Too low ⬇️';
            score--;
            document.querySelector('.score').textContent = score;
          } else {
            document.querySelector('.message').textContent = 'Loser 👎';
            document.querySelector('.score').textContent = 0;
          }
    }

    //when guess is too hight 
  } else if (guess > Snumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too hight ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loser 👎';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low 
  } else if (guess < Snumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low ⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Loser 👎';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.score').textContent = 20;
    Snumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = 'Start guessing ....';
    document.querySelector('.guess').value="";


});


'use strict';

let secretNumber = Math.trunc(Math.random() * 29) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('no value');
  } else if (guess === secretNumber) {
    displayMessage('correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset buttom

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 29) + 1;
  score = 20;

  displayMessage('start guessing!');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
});

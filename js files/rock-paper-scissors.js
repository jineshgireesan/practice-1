let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  tie: 0
};

function dfe(userMove)
{
  const computerValue = abc();
  let result = '';

  if(userMove === 'Rock')
  {
    if (computerValue === 'Rock')
    {
      result = 'Tie.';
    }
    else if(computerValue === 'Paper')
    {
      result = 'You Lose.';
    }
    else if(computerValue === 'Scissors')
    {
      result = 'You Win.';
    }
  }

  else if(userMove === 'Paper')
  {
    if (computerValue === 'Paper')
    {
      result = 'Tie.';
    }
    else if(computerValue === 'Rock')
    {
      result = 'You Win.';
    }
    else if(computerValue === 'Scissors')
    {
      result = 'You Lose.';
    }
  }

  else if(userMove === 'Scissors')
  {
    if (computerValue === 'Scissors')
    {
      result = 'Tie.';
    }
    else if(computerValue === 'Paper')
    {
      result = 'You Win.';
    }
    else if(computerValue === 'Rock')
    {
      result = 'You Lose.';
    }
  }

if (result === 'You Win.')
score.wins += 1;
else if(result === 'You Lose.')
score.losses += 1;
else if(result === 'Tie.')
score.tie += 1;

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML
= `You
<img src="images/${userMove}-emoji.png" class="moveicon">
<img src="images/${computerValue}-emoji.png" class="moveicon">
Computer`;

}

function updateScoreElement() 
{
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
  }

function abc()
{
let computerValue='';
const randomNum = Math.random();
if (randomNum >= 0 && randomNum < (1/3))
{
  computerValue = 'Rock';
}
else if (randomNum >= (1/3) && randomNum < (2/3))
{
  computerValue = 'Paper';
}
else if(randomNum >= (2/3) && randomNum <1)
{
  computerValue = 'Scissors';
}
return computerValue;

}

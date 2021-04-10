
`use strict`
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.getElementById('dice');
const btnNew = document .querySelector('.btn--new');
const btnRoll = document .querySelector('.btn--roll');
const btnHold = document .querySelector('.btn--hold');

// starting condition 
score0El.textContent = 0;
score1El.textContent = 0;

let scores, currentScore, activePlayer, playing;


const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();


// switch player function 
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    
    currentScore = 0;
    activePlayer = activePlayer === 0? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


    





// Rolling dice functionality
btnRoll.addEventListener('click', function(){
  if (playing){

  
// 1 generating random dice 
const dice = Math.trunc(Math.random() * 6 ) + 1;
// 2 display 
diceEl.classList.remove('hidden');
diceEl.src = `d-${dice}.png`;
// checking it 

if (dice !== 1 ) { 
    // bular 2 va 6 gacha 
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {   // 1 bulsa 
    switchPlayer();
    // toggle da . # ishlatilmaydi class va id o'rnida
}
  }
});

btnHold.addEventListener('click', function(){
    if(playing){
     
         // 1. Add current score to current player's score 
         scores[activePlayer] += currentScore;

            document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

         // 2. Check if player's score is >= 100

     if (scores[activePlayer] >=20){

         playing = false;
         diceEl.classList.add('hidden');

         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         // Finish the game 
         document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
         } else {
            // switch to the next player 
     switchPlayer();
    }
 }
})



btnNew.addEventListener('click', init);









 




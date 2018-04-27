/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundSscore, activePlayer;

scores = [0, 0];
roundSscore = 0;
activePlayer = 0;

// hide dice
document.querySelector('.dice').style.display = 'none';
// Reset Game
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice = Math.floor(Math.random() * 6) + 1

    // diceDOM
    var diceDom = document.querySelector('.dice');

    // show dice acording to the random number
    diceDom.style.display = 'block';
    diceDom.src = 'img/dice-' + dice + '.png';

    // Update the roundScore if the number rolled is > 1
    if (dice !== 1) {
        // Add Score 
        roundSscore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundSscore;

    } else {
        // Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        // reset current Scores
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        // toggle active classs from player panel
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // hide dice
        document.querySelector('.dice').style.display = 'none';
    }
});

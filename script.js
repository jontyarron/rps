
const userMove = document.querySelector('.user-move')

const comMoves = document.querySelector('.com-move');
const newComMove = document.createElement('p')
comMoves.appendChild(newComMove)

const result = document.querySelector('.result')
const outcome = document.createElement('h1')
result.appendChild(outcome)

const yourScoreSpan = document.querySelector('[data-your-score]');
const computerScoreSpan = document.querySelector('[data-com-score]');

const finalOutcome = document.querySelector('.final-outcome')

const resetButton = document.querySelector('#reset')

const selectionButtons = document.querySelectorAll('[data-selection]')



selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click',()=> {
        playerSelection = selectionButton.dataset.selection
        
        userMove.innerText = playerSelection
        const computerSelection = computerPlay()
        newComMove.innerText = computerSelection
        
        outcome.innerText = playGame(playerSelection,computerSelection);
        
        

        if (playGame(playerSelection,computerSelection).includes('Win')) {
            incrementScore(yourScoreSpan)}
            if (playGame(playerSelection,computerSelection).includes('Lose')) {
                incrementScore(computerScoreSpan)};

                //Declares Winner when either of the players reach 5 wins
            function declareWinner(yourScoreSpan,computerScoreSpan){
                if (parseInt(yourScoreSpan.textContent) === 5){
                    finalOutcome.classList.add('result-declaration');
                    for (let i = 0; i < selectionButtons.length; i++){
                        selectionButtons[i].disabled= true
                    }
                    return 'Congrats You Win The Game 👑! Click on reset to play again'
                }
                else if (parseInt(computerScoreSpan.textContent) === 5){
                    finalOutcome.classList.add('result-declaration')
                    for (let i = 0; i < selectionButtons.length; i++){
                        selectionButtons[i].disabled= true
                    }
                    return 'Too bad computer wins 😫. Click on reset to play again'
                }
                else if (parseInt(computerScoreSpan.textContent) < 5 || parseInt(yourScoreSpan.textContent) < 5){}
                return ''
              
            }
            finalOutcome.innerText = declareWinner(yourScoreSpan,computerScoreSpan);

     })
     
            
        } ) 

        // Increments scores of user and com
     function incrementScore(scoreSpan) {
            scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
            
            
        }
// assigns random move among given elements
 function computerPlay(){
    let choice = ['✊','✋','✌']
    move = choice[Math.floor(Math.random()* choice.length)]
    return move
}   



//  Takes two  arguments determines who the winner is
       
function playGame(playerSelection,computerSelection) {
    if ( playerSelection === computerSelection) {
        return (` it's a tie ! you both chose ${playerSelection}.`)}
     else if ( playerSelection === '✊' && computerSelection === '✋') {
     return ('You Lose! Paper beats Rock') }
     else if (playerSelection === '✋' && computerSelection === '✊') {
        return ('You Win! Paper beats Rock') }
     else if (playerSelection === '✊' && computerSelection === '✌') {
        return ('You Win! Rock beats Scissors') }
     else if (playerSelection === '✌' && computerSelection === '✊') {
        return ('You Lose! Rock beats Scissors') }
     else if (playerSelection === '✋' && computerSelection === '✌') {
        return ('You Lose! Scissors beat Paper')}
     else if (playerSelection === '✌' && computerSelection === '✋') {
       return ('You Win! Scissors beat Paper')}
       
    }

    // resets the score / reloads the website
    resetButton.addEventListener('click',()  => location.reload())
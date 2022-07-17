

//selects a string for the given array randomly

   function computerPlay () { 
    let choice = ['rock', 'paper', 'scissors'] ;
    return choice[Math.floor(Math.random()*choice.length)]
 
   }

//takes user input through prompt and selects a random for choice(variable) and declares result

   function playRound (playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase() === computerSelection) {
       return (` it's a tie ! you both chose ${playerSelection}.`)}
    else if ( playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
    return ('You Lose! paper beats rock') }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
       return ('You win! paper beats rock') }
    else if (playerSelection .toLowerCase()=== 'rock' && computerSelection === 'scissors') {
       return ('You win! rock beats scissors') }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
       return ('You Lose! rock beats scissors') }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
       return ('You Lose! scissors beat paper')}
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
      return ('You Win! scissors beat paper')}
        
} 


 

for (let i = 0; i < 5; i++) {

    const playerSelection = prompt('Choose your weapon'); 
    const computerSelection = computerPlay() ;
    console.log('you :', playerSelection) ;
    console.log('com : ',computerSelection) ;
    console.log(playRound(playerSelection,computerSelection) )
 }

  
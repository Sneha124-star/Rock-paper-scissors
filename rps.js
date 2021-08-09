const toolholder = document.querySelectorAll('div.toolholder button');
const results =document.querySelector('#results');
const playerPoints = document.querySelector('#PlayerScores');
const compPoints = document.querySelector('#ComputerScores');
const rest = document.querySelector('#reset');

//refresh the pg
rest.addEventListener('click',() => location.reload());
toolholder.forEach(button => { button.addEventListener('click', getPlayerChoice) });


function computerPlay(){
  let i;
  let tools=[{choice: 'Rock', value: 1}, {choice: 'Paper', value: 2}, {choice: 'Scissors', value: 3}];
  let rand =tools[Math.floor(Math.random() * tools.length)];   //to randomly choose a string from an array
  return rand;
}
let playScore=0;
    compScore=0;

function player(playerSelection,computerSelection){

  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
    let playerWinCombo = ['2-1', '1-3', '3-2'];

 if(Number(playerSelection)===computerSelection.value){
   playerPoints.textContent = ++playScore;
      compPoints.textContent = ++compScore;
      results.textContent = "Tie!";
}
  else if(playerWinCombo.includes(roundWinCombo))
  { playerPoints.textContent = ++playScore;
        results.textContent = `You win! `;
  }
  else {
    compPoints.textContent = ++compScore;
        results.textContent = `You lose! `;
  }
game();

}

  function game(){

    if(playScore===5|| compScore===5){
      if(compScore===playScore){
        winner('tie');
      }
    else{
      let win = `${(compScore > playScore) ? 'computer' : 'player'}`;
      winner(win);
    }
  }
}
  const winnerResult ={
    computer: ["You Lost the game to a computer!", 'red'],
  player: ["You Win the game!!!!", 'green'],
  tie: ["The game is a Tie!", 'blue']
  }

  function winner(winner){
    results.textContent =winnerResult[winner][0];
    results.style.color =winnerResult[winner][1];

    toolholder.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
  }
  function getPlayerChoice(e){

    let playerSelection= (e.target.id);
    let playerChoice = e.target.textContent;
    player(playerSelection, computerPlay())
  }

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  return userInput;
} else {
  console.log('Error!');
}
};

const getComputerChoice = () => {
  const randomNumber = (Math.floor(Math.random() * 3))
switch (randomNumber) {
    case 0:
    return 'rock';
  case 1:
    return 'paper';
   case 2:
    return 'scissors';

  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'TIE!';
} 
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return "Sorry, computer won";
  } else {
    return "Congrats, you won!";
  }

if (userChoice === 'paper') {   
if (computerChoice === 'scissors'){
  return "Sorry. compuuter won!";
} else {
  return "Congratulations, won!"
  }
}

if (userChoice === 'sciossors') {
  if (computerChoice === 'rock'){
    return "Sorry. compuuter won!";
  } else {
    return "congrats you won!"
  }
}
    

};



console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));

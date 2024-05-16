import readlineSync from 'readline-sync';
import _ from 'lodash';
import GetUserName from './cli.js';

const userName = GetUserName();
let calcCorrect = 0;

// Game 'Even' function
function evenCheck() {
  const randomNumber = _.random(0, 100);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if ((randomNumber % 2 === 0 && answer === 'yes')
    || (randomNumber % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    calcCorrect += 1;
    if (calcCorrect === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    evenCheck();
  } else if (randomNumber % 2 === 0 && answer === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    console.log(`Let's try again, ${userName}!`);
  } else if (randomNumber % 2 !== 0 && answer === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
  } else console.log(`${answer} is wrong answer ;(.`);
}

export default evenCheck;

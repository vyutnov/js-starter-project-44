import readlineSync from 'readline-sync';

// Get user's name
function GetUserName() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export default GetUserName;

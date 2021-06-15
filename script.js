const fullName = 'Promise Onyeka Morka';
const correctedFullName = fullName.split(' ');
console.log(correctedFullName);

// Use destructuring to create variables from the array
const [firstName, middleName, lastName] = correctedFullName;
console.log(firstName);
console.log(middleName);
console.log(lastName);

const makeASentenceWithName = ['Hello Mr.', firstName, middleName, lastName,'. You are welcome!'].join(' ');
console.log(makeASentenceWithName);

const today = ['Today', 'is', 'great!'];
const whatAboutToday = today.join('');
console.log(whatAboutToday);

const capitalizeName = (name) => {
  // removes the spaces and converts the string into an array
  const names = name.split(' ');
  // creates an empty array to hold inputs
  const namesUpper = [];
  // loops through each element of the array
  for (const eachName of names) {
    // for each element, select the first word of the array element, capitalize it, select the remaining words, and put them together, then push them into the already created empty array
    namesUpper.push(eachName[0].toUpperCase() + eachName.slice(1));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('mercy morka');
capitalizeName('kelechi kenneth morka');

const message = 'Hello';
console.log(message.padStart(8, '+').padEnd(20, '****').length); // This will be 20 characters long

const friend = 'Jo';
console.log(friend.padStart(4, '+'));

const favoriteFootballClub = 'Chelsea FC';
console.log(favoriteFootballClub.padStart(20, "+").padEnd(30, "+"));


const capitalizeFirstNameOnString = function (theName) {
  // Change all entries(theName) to lower case and split into an array
  const theNameInLowerCase = theName.toLowerCase().split(' ');
  // Create an empty array to hold the array items
  const fullChangedName = [];
  // loop through the array
  for (const singleName of theNameInLowerCase) {
    fullChangedName.push(singleName[0].toUpperCase() + singleName.slice(1));
  }
  console.log(fullChangedName.join(' '));
  
}
capitalizeFirstNameOnString('john doe');
capitalizeFirstNameOnString('frank boah');
capitalizeFirstNameOnString('abel phillip');


const maskedCreditCard = function (number) {
  const str = number.toString();
  const last4digits = str.slice(-4);
  return last4digits.padStart(str.length, "*");
};

console.log(maskedCreditCard('444848488383833'));
console.log(maskedCreditCard('4757373823'));
console.log(maskedCreditCard('4757373823489939445922402421'));

const messageToMyself = `You are going to be an amazing web developer... `;
console.log(`${messageToMyself.repeat(4)}`);
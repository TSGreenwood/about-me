'use strict';

//Initial username

var userName = prompt('Hello, what is your name?');
console.log;('Hello, ' + userName + '.');
userName;

//question 1
var purpose =prompt('Are you here on purpose?');
console.log('Does  ' + userName + ' want to be here?' + purpose);

var purposeRes = purpose.toUpperCase();


// Chris driving: create a function using new parameter names
// when calling the function, use variables above as arguments for function

function firstQuestion() {
  if(purposeRes === 'YES') {
    alert('Correct! Welcome to the site, ' + userName);
  }
  else {
    alert('Incorrect, ' + userName + ' You should have better things to see.');
    console.log('Evaluates ' + userName + ''/'s response to first yes/no question');
  }
}

firstQuestion();

//question 2
var likeSite =prompt('Do you like my website?');
console.log(likeSite + 'returns whether they are polite enough to say they like my website');

var likeSiteRes = (likeSite.toUpperCase());
console.log('ensures user response is all caps');

function secondQuestion() {
  if(likeSiteRes === 'YES') {
    alert('Correct! It is very polite of you to say that.');
  }
  else {
    alert('Incorrect. Fortunately you can make your own web site.');
    console.log('evaluates the return value of' + likeSiteRes);
  }
}

secondQuestion();

//question 3
var cleanAir =prompt('Is the air outdoors more polluted than the air indoors?');
console.log(cleanAir + 'returns whether' + userName + 'knows about Sick Building Syndrome');

var cleanAirRes = (cleanAir.toUpperCase());
console.log('ensures user response is all caps');

function thirdQuestion() {
  if(cleanAirRes === 'NO') {
    alert('Correct! ' + userName + ', you must already be hip to offgassing and Sick Building Syndrome.');
  }
  else {
    alert('Incorrect. Due to offgassing from building materials and limited circulation, the air indoors is much more polluted than outdoor air. I hate to break it to you.');
    console.log('evaluates the return value of' + cleanAirRes);
  }
}

thirdQuestion();

//Question 4
var nasa =prompt('Did NASA do some terrific studies on how to clean the air inside space stations?');
console.log(nasa + 'returns whether' + userName + 'knows about NASA clean air study');

var nasaRes = (nasa.toUpperCase());
console.log('ensures user response is all caps');

function fourthQuestion() {
  if(nasaRes === 'YES') {
    alert('Correct! They needed ways to clean the air circulating inside the space station.');
  }
  else {
    alert('Incorrect. NASA did some great studies with some very practical results.');
    console.log('evaluates the return value of' + nasaRes);
  }
}

fourthQuestion();

//Question 5
var plant =prompt('Was the solution houseplants?');
console.log(plant + 'returns whether' + userName + 'knows about even more about the NASA clean air study');

var plantRes = (plant.toUpperCase());
console.log('ensures user response is all caps');


function fifthQuestion() {
  if(plantRes === 'YES') {
    alert('Correct! ' + userName + ', are you Bill Wolverton? Because you know something about air remediation. I highly reccomend you check out the list of the 12 best air purifying housplants.');
    //break;
  }
  else {
    alert('Incorrect. NASA determined that some of your basic houseplants are the best way to clean the air of volatile organic compounds. ' + userName + ', I highly reccomend you check out the list of the 12 best air purifying housplants. It will cheer you up and prepare you for the next bit.');
    console.log('evaluates the return value of ' + plantRes);
  }
}

fifthQuestion();

//question 6, first try
var guessCountDown = 4;
var manyPlants = parsInt( prompt('How many plants do I have? You get ' + guessCountDown + ' guesses.') );
console.log(userName + ' guessed ' + manyPlants);

//

// function sixthQuestion1() {
//   //while guessCountDown > 0 {
//     if (manyPlants === (5)



//   console.log(userName + ' guessed ' + manyPlants1);
//   if (manyPlants1 < 5) {
//     alert('That\'s not enough plants for me.');
//   }
//   else if (manyPlants1 > 5) {
//     alert('That\'s too many plants for me.');
//   }
//   else {
//     alert('You got it, I have 5 plants. I\'m going to ask you this question 3 more times anyway.');
//   }
// }

//sixthQuestion1();

//question 6, second try
// var manyPlants2 =prompt('How many plants do I have? You get 3 more guesses.');
// console.log('Returns second user answer as a string');

// function sixthQuestion2() {
//   parseInt(manyPlants2);
//   console.log('Turns second user answer string into an integer.');

//   if (manyPlants2 < 5) {
//     alert('That\'s not enough plants for me.');
//   }
//   else if (manyPlants2 > 5) {
//     alert('That\'s too many plants for me.');
//   }
//   else {
//     alert('You got it, I have 5 plants. I\'m going to ask you this question 2 more times anyway.');
//   }
// }

// sixthQuestion2();

// //Question 6, third try
// var manyPlants3=prompt('How many plants do I have? You get 2 more guesses.');
// console.log('Returns third user answer as a string');

// function sixthQuestion3() {
//   parseInt(manyPlants3);
//   console.log('Turns third user answer string into an integer.');

//   if (manyPlants3 < 5) {
//     alert('That\'s not enough plants for me.');
//   }
//   else if (manyPlants3 > 5) {
//     alert('That\'s too many plants for me.');
//   }
//   else {
//     alert('You got it, I have 5 plants.I\'m going to ask you this question one more time anyway.');
//   }
// }

// sixthQuestion3();

// //Question 6, fourth try
// var manyPlants4=prompt('How many plants do I have? This is the last one.');
// console.log('Returns fourth user answer as a string');

// function sixthQuestion4() {
//   parseInt(manyPlants4);
//   console.log('Turns fourth user answer string into an integer.');

//   if (manyPlants4 < 5) {
//     alert('That\'s not enough plants for me. I have 5.');
//   }
//   else if (manyPlants4 > 5) {
//     alert('That\'s too many plants for me. I have 5');
//   }
//   else {
//     alert('You got it, I have 5 plants.');
//   }
// }

// sixthQuestion4();

// //Question 7
// var plants=['philodendron', 'fern', 'snake plant', 'dracaena'];
// var guess = prompt('Can you guess one type of my houseplants? I have 4 varieties and you get 6 tries.');
// var guessRes = (guess.toLowerCase());
// console.log('ensures user response is all caps');

// function seventhQuestion() {
//   for(var i = 0; i < plants.length; i++) {
//     if(guessRes === plants[i]) {
//       alert('Right!');
//       break;
//     } else {
//       alert('Try again.');
//       //break;
//     }
//   }
// }

// seventhQuestion();
















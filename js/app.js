'use strict';

//Initial username
var userName =prompt('Hello, what is your name?')
console.log('Gives us ' + userName + 'so we can personalize their experience.')

//question 1
var purpose =prompt('Are you here on purpose?');
console.log(purpose + 'returns whether' + userName + 'is here on purpose');

var purposeRes = (purpose.toUpperCase());
console.log('ensures user response is all caps');

if(purposeRes === 'YES') {
  alert('Correct! Welcome to the site, ' + userName);
}
else {
  alert('Incorrect, ' + userName + 'You should have better things to see.');
  console.log('evaluates the return value of' + purposeRes);
}

//question 2
var likeSite =prompt('Do you like my website?');
console.log(likeSite + 'returns whether they are polite enough to say they like my website');

var likeSiteRes = (likeSite.toUpperCase());
console.log('ensures user response is all caps');

if(likeSiteRes === 'YES') {
  alert('Correct! It is very polite of you to say that.');
}
else {
  alert('Incorrect. Fortunately you can make your own web site.');
  console.log('evaluates the return value of' + likeSiteRes);
}
//question 3
var cleanAir =prompt('Is the air outdoors more polluted than the air indoors?');
console.log(cleanAir + 'returns whether' + userName + 'knows about Sick Building Syndrome');

var cleanAirRes = (cleanAir.toUpperCase());
console.log('ensures user response is all caps');

if(cleanAirRes === 'NO') {
  alert('Correct! ' + userName + ', you must already be hip to offgassing and Sick Building Syndrome.');
}
else {
  alert('Incorrect. Due to offgassing from building materials and limited circulation, the air indoors is much more polluted than outdoor air. I hate to break it to you.');
  console.log('evaluates the return value of' + cleanAirRes);
}

//Question 4
var nasa =prompt('Did NASA do some terrific studies on how to clean the air inside space stations?');
console.log(nasa + 'returns whether' + userName + 'knows about NASA clean air study');

var nasaRes = (nasa.toUpperCase());
console.log('ensures user response is all caps');

if(nasaRes === 'YES') {
  alert('Correct! They needed ways to clean the air circulating inside the space station.');
}
else {
  alert('Incorrect. NASA did some great studies with some very practical results.');
  console.log('evaluates the return value of' + nasaRes);
}
//Question 5
var plant =prompt('Was the solution houseplants?');
console.log(plant + 'returns whether' + userName + 'knows about even more about the NASA clean air study');

var plantRes = (plant.toUpperCase());
console.log('ensures user response is all caps');

if(plantRes === 'YES') {
  alert('Correct! ' + userName + ', are you Bill Wolverton? Because you know something about air remediation. I highly reccomend you check out the list of the 12 best air purifying housplants.');
}
else {
  alert('Incorrect. NASA determined that some of your basic houseplants are the best way to clean the air of volatile organic compounds. ' + userName + ', I highly reccomend you check out the list of the 12 best air purifying housplants. It will cheer you up and prepare you for the next bit.');
  console.log('evaluates the return value of' + plantRes);
}
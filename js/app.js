// Guessing Game about me
// Questions based on information available in my web page 

"use-strict";

var userName = prompt('Thank you for visiting my Blog. \n\n Please enter your name to start the game');
console.log('Username: ', userName);

alert('Hello ' + userName + '! \n\n Let\'s see how well you know me now!');
var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;

var workResponse = prompt('I work in Amazon. Yes or No? ');
console.log('Work in Amazon ?' , workResponse);

    if(workResponse.toUpperCase() === 'Y' || workResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(workResponse.toUpperCase() === 'N' || workResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I work in Amazon");
    }

var residenceResponse = prompt('I live in Bellevue. Yes or No? ');
console.log('Live in Bellevue ?' , residenceResponse);
    
    if(residenceResponse.toUpperCase() === 'Y' || residenceResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(residenceResponse.toUpperCase() === 'N' || residenceResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I live in Bellevue");
    }

var programmingLanguageResponse = prompt('I\'m proficient in HTML. Yes or No? ');
console.log('proficient in HTML ?' , programmingLanguageResponse);
    
    if(programmingLanguageResponse.toUpperCase() === 'Y' || programmingLanguageResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(programmingLanguageResponse.toUpperCase() === 'N' || programmingLanguageResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I\'m proficient in HTML");
    }

var loveSnowResponse = prompt('I love snow. Yes or No? ');
console.log('Love snow ?' , loveSnowResponse);
    
    if(loveSnowResponse.toUpperCase() === 'Y' || loveSnowResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(loveSnowResponse.toUpperCase() === 'N' || loveSnowResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I love snow... You missed noticing my picture");
    }

var databaseResponse = prompt('I know DynamoDB. Yes or No? ');
console.log('Love snow ?' , databaseResponse);
    
    if(databaseResponse.toUpperCase() === 'Y' || databaseResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(databaseResponse.toUpperCase() === 'N' || databaseResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I know DynamoDB");
    }


var favNumber =0;
var attempts = 0;
var favNumberCorrectFlag = false; 
while (favNumber !== 10 && attempts < 4) {
    favNumber = parseInt(prompt('Do you remember my favorite number ?'));
    console.log('favNumber:', favNumber);

    if (favNumber < 10) {
        alert('sorry you guessed too low');
        attempts++;
    } else if (favNumber > 10) {
        alert('you guessed too high');
        attempts++;
    } else if (isNaN(favNumber) || favNumber === null) {
        alert('please enter an actual number');
        attempts++;
    } else if (favNumber === 10) {
        alert('You guessed ir right ! ');
        correctAnswersCounter++;
        favNumberCorrectFlag = true;
    }
    console.log('attempts:', attempts);
}

if (!favNumberCorrectFlag) { 
incorrectAnswersCounter++;
}

var statesWorked = ['washington', 'oregon', 'arkansas', 'california', 'tennessee' ];
var statesAnswer = prompt('Do you remember one of the states that I worked ?');
console.log('statesAnswer:', statesAnswer);
var correctStatesAnswerFlag = false;
    
for (var i = 0; i < statesWorked.length; i++) {
    console.log('current iteration:', statesWorked[i]);

    if (statesAnswer === statesWorked[i]) {
        alert('you got it right!');
        correctStatesAnswerFlag = true;
        correctAnswersCounter++;
        break;
    }
}

if (!correctStatesAnswerFlag) {
    alert('incorrect guess ');
    incorrectAnswersCounter++;
}

console.log("correctAnswersCounter:", correctAnswersCounter);
console.log("incorrectAnswersCounter:", incorrectAnswersCounter);

alert('You have answered  ' + correctAnswersCounter + ' questions correctly and ' + incorrectAnswersCounter +' questions incorrectly.');
alert('Once again Thank you for visiting my page!!! Have a great day!');

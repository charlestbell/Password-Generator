// Assignment Code
var password = "";
var passwordLocal = "";
var generateBtn = document.querySelector("#generate");
var passwordLength;
var characterType;
var allTypes = [];
// debugger;

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  getUserPassParams();
  for (var i = 0; i < passwordLength; i++) {
    characterType = Math.floor(Math.random() * allTypes.length);
    if (allTypes[characterType] === "includeLowers") {
      password += getRandomLower();
    }
    if (allTypes[characterType] === "includeUppers") {
      password += getRandomUpper();
    }
    if (allTypes[characterType] === "includeNumbers") {
      password += getRandomNumber();
    }
    if (allTypes[characterType] === "includeSymbols") {
      password += getRandomSymbol();
    }
  }
  // debugger;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Much of the following was inspire by this video by Traversy Media https://www.youtube.com/watch?v=duNmhKgtcsI

//Returns a random Lowercase letter
function getRandomLower() {
  // debugger;
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Returns a random Uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Returns a random Number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Returns a random symbol
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return String(symbols.charAt(Math.floor(Math.random() * 20)));
}
//Ask the user if they want Lowercase Letters
function askLowers() {
  if (confirm("Would you like to include Lowercase Letters?")) {
    allTypes.push("includeLowers");
  }
}

//Ask the user if they want Uppercase Letters
function askUppers() {
  if (confirm("Would you like to include Uppercase Letters?")) {
    allTypes.push("includeUppers");
  }
}
//Ask the user if they want Number Characters
function askNumbers() {
  if (confirm("Would you like to include Numbers?")) {
    allTypes.push("includeNumbers");
  }
}

//Ask the user if they want to include symbols
function askSymbols() {
  if (confirm("Would you like to include Symbols")) {
    allTypes.push("includeSymbols");
  }
}

//Ask the user how long the password should be
function askLength() {
  var inputNumber = prompt("How long should the password be? (enter 8-128)");
  if (isNaN(inputNumber)) {
    window.alert("Must input a number");
    askLength();
  } else if (inputNumber < 8 || inputNumber > 128) {
    window.alert("You entered an invalid number. Try again.");
    askLength();
  } else {
    passwordLength = inputNumber;
  }
}

function getUserPassParams() {
  askLength();
  askLowers();
  askUppers();
  askNumbers();
  askSymbols();
  if (allTypes.length === 0) {
    alert("Must choose at least 1 character type.");
    getUserPassParams();
  } else {
    return;
  }
}

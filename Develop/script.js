// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.textContent = password;
}

generateBtn.addEventListener("click", writePassword);

// asks the user questions and generates random password based on answers
function generatePassword(){
  var lengthChoice = prompt("Choose the length of your password, between 8 - 128 characters.");
    
  //validates chosen character length
    if (lengthChoice == null) {
      return;
    } else if (lengthChoice >= 8 && lengthChoice <= 128) {
      alert("Please confirm at least one of the following 4 options.");
      console.log(lengthChoice);
    } else {
      alert("Please type an integer between 8 and 128!");
      return generatePassword();
    }
    
    var password = [];
    //vars to save the t/f values for including characters
    var lowerChoices = [];
    var upperChoices = [];
    var numberChoices = [];
    var specialChoices = [];

    //User confirms or denies upper, lower, num, and/or special characters (4 confirm prompts)
    //if confirmed, the arrays are updated to include choices; if denied, arrays remain empty
    if (window.confirm("Include lowercase letters?")) {
      lowerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }

    if (window.confirm("Include uppercase letters?")) {
      upperChoices = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    }

    if (window.confirm("Include numbers?")) {
      numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }

    if (window.confirm("Include special characters?")) {
      specialChoices = [" ", "'", "\"", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\]", "\[", "^", "_", "`", "{", "|", "}", "~"];
    }

    //validates that atleast one catagory was chosen
    if (lowerChoices == 0 && upperChoices == 0 && numberChoices == 0 && specialChoices == 0) {
      alert("Well you gotta choose one! Lets try again.");
      return;
    }

    // array to store random elements pushed from the chosen catagories
    var userChoices = [];

  //chooses 1 random element from each catagory, storing it it userChoices and looping until desired length is reached
  //nested while-statements validate whether the catagory they each concern was chosen by checking the array length
      while (userChoices.length < lengthChoice) {  
        lower: while (userChoices.length < lengthChoice && lowerChoices.length > 0) {
            function getRandomLower(max) {
            return lowerChoices[Math.floor(Math.random() * lowerChoices.length)];
          };
          var lowerChoice = getRandomLower();
          var userChoice = userChoices.push(lowerChoice);
          if (userChoices.length < lengthChoice) {
            break;
          }
        }
        upper: while (userChoices.length < lengthChoice && upperChoices.length > 0) { 
            function getRandomUpper(max) {
            return upperChoices[Math.floor(Math.random() * upperChoices.length)];
          }
          var upperChoice = getRandomUpper();
          userChoice = userChoices.push(upperChoice);
          if (userChoices.length < lengthChoice) {
            break;
          }
        }
        numbers:  while (userChoices.length < lengthChoice && numberChoices.length > 0) { 
            function getRandomNumber(max) {
            return numberChoices[Math.floor(Math.random() * numberChoices.length)];
          }
          var numberChoice = getRandomNumber();
          userChoice = userChoices.push(numberChoice);
          if (userChoices.length < lengthChoice) {
            break;
          }
        }
        specials: while (userChoices.length < lengthChoice && specialChoices.length > 0) { 
            function getRandomSpecial(max) {
            return specialChoices[Math.floor(Math.random() * specialChoices.length)];
          }
          var specialChoice = getRandomSpecial();
          userChoice = userChoices.push(specialChoice);
          if (userChoices.length < lengthChoice) {
            break;
          }
        }
       };

      // randomize the random elements (so that the resulting array isn't patterned by catagory)
       while (password.length < lengthChoice) {
        function getRandomInt(max) {
        return [Math.floor(Math.random() * userChoices.length)];
        }
        var myInt = getRandomInt()
        password.push(userChoices[myInt]);
        userChoices.splice(myInt, 1);
      }
    //join the randomized array of elements into a string
   password = password.join("");
  // send string back to the writePassword function
  return password;
};

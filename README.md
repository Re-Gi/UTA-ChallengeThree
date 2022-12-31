# UTA-ChallengeThree
![Screenshot of deployed webpage](/assets/images/Screenshot (2).png)

Visit the deployed application [Here.](https://re-gi.github.io/UTA-ChallengeThree/)

## Description
This application generates a randomized password, applying user input to determine the password's length and character types used. This challenge was given to test and strengthen my understanding of JavaScript fundamentals. 

To complete this challenge I created a button event triggering prompt, confirmation, and alert windows to gather and validate user input. When any of the 4 character options of uppercase, lowercase, numbers, or special character are chosen, an array of the chosen characters is applied to a corresponding variable for use. Then using the Math.random() function in while loops, a single random character from each available array is pushed into a new array until the user's desired length is reached. The characters of the new array are then shuffled around into a random order using another while loop with the Math.random() function. The result is then converted into a string, and the string is plugged into the text box on the page in place of what previously read 'Your Secure Password'. 

The biggest challenge I faced was in ensuring that at least 2 characters of each chosen type were included. Originally I wanted to dump all options of each chosen character type into one array to choose from and loop through it until the desired length was achieved, but that left opportunity for some chosen character types to get left out entirely of the resulting password. Through some research I came upon the solution of using a while loop with breaks after each character catagory to choose a fairly even amount of character types.

## Installation
N/A

## Usage
The user should start by clicking on the red 'Generate Password' button, then read and respond to each prompt until all that's left is their randomized password in place of where the page originally read 'Your Secure Password'. This text can then be copied and used as the user pleases.

![Screenshot of application with a prompt window](/assets/images/Screenshot (3).png)![Screenshot of application with a confirmation window](/assets/images/Screenshot (4).png)![Screenshot of application with a randomly generated password in the textbox](/assets/images/Screenshot (8).png)


## Credits
All HTML and CSS elements, as well as some starter JavaScript code were provided by University of Texas - Austin as part of their Web Development Bootcamp curriculum.

## Liscense
Refer to liscensing in the project repository.

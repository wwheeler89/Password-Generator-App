const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordFieldOne = document.getElementById("password-fieldone");
let passwordFieldTwo = document.getElementById("password-fieldtwo");
let generatePassword = document.getElementById("generate-btn");
let charLength = 15;

generatePassword.addEventListener("click", function() {
    let generatedPassword = '';
    for (let i = 0; i < charLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }
    passwordFieldOne.textContent = generatedPassword;
    passwordFieldTwo.textContent = generatedPassword;
});
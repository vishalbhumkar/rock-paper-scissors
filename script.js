let usrChoice = document.getElementById("usrChoice");
let compChoice = document.getElementById("compChoice");
let finResult = document.getElementById("finResult");


function playGame(userChoice){
    // console.log(userChoice);

    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    const computerChoice = options[randomIndex];

   

    console.log("user choice is ", userChoice);
    console.log("Computer choice is ", computerChoice);

    if(userChoice === computerChoice){
        let result = "Draw 😐"
    }
    else if((userChoice === "rock" && computerChoice === "scissors") 
        || (userChoice === "paper" && computerChoice === "rock")
    || (userChoice === "scissors" && computerChoice === "paper")) {
        result = "You Won 😁👍"
    }
    else{
        result = "You Lost 😔👎"
    }
     usrChoice.textContent = "Your choice : " ,userChoice;
    compChoice.textContent = "Computer choice : ", computerChoice;
    finResult.textContent = result;

}




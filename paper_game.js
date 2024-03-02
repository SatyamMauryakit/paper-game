let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choise");
const msgPara = document.querySelector("#msg");
const userScorePara=document.querySelector("#user_score");
const compScorePara=document.querySelector("#comp_score");
const ComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}


const drawGame = () => {
    msgPara.innerText = "Match Draw. Play again.";
    msgPara.style.backgroundColor="#081b31";
};

const showWinner = (userWin, userChoice,compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText=userScore;
        msgPara.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="green";

    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        msgPara.innerText = `Computer win! ${compScore} beats your ${userScore}`;
        msgPara.style.backgroundColor="red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = ComputerChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // seissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock ,seissor
            userWin = compChoice === "seissor" ? false : true;

        }
        else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});


let btn1= document.querySelector("#btn");
let mode="light";
btn1.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="blue";
        
    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(mode); 
})
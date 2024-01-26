let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".message");

let user = document.querySelector(".user");
let comp = document.querySelector(".comp");

const genCompChoice = () => {   //Computer random choice
    let options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx]; 
}

const playGame = (userChoice) => {
    console.log(`user choice is ${userChoice}`);

    const compChoice = genCompChoice();
    console.log(`comp choice is ${compChoice}`);

    if(userChoice === compChoice){ //match is draw
        console.log("Draw");
        msg.innerText = `MATCH DRAW !!! `;
        msg.style.backgroundColor = "black";
         userScore++;
        compScore++;
        user.innerText = userScore;
        comp.innerText = compScore;

    }else{
        let userWin = true;
        if(userChoice === "rock"){ //ROCK
            //two choices are left --> paper and scissors
            if(compChoice === "paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        }else if(userChoice === "paper"){//PAPER
            //two choices --> rock and scissor
            if(compChoice === "rock"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else{//SCISSOR 
            //two choices --> rock and paper
            if(compChoice === "rock"){
                userWin = false;
            }else{
                userWin = true;
            }
        }

        if(userWin === true){
            console.log("YOU win");
            msg.innerText = `YOU WIN !!! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            user.innerText = userScore;
            
        }else{
            console.log("YOU lose");
            msg.innerText = `YOU LOSE !!! Comp ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
            compScore++;
            comp.innerText = compScore;
        }
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});

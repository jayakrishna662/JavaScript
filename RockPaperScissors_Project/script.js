const buttons=document.querySelectorAll("button");
let result=document.getElementById("result")
let userChoice_display=document.getElementById("userChoice")
let computerChoice_display=document.getElementById("computerChoice")

let userChoice=null;

const choices=["rock","paper","scissors"]

buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
       const clicked_button = event.target
       userChoice= clicked_button.value
       findAnswer()
    }
    )
})

function findAnswer(){

    const computerChoice=choices[Math.floor(Math.random()*3)];
    let resultMessage="";
    if(userChoice===computerChoice){
        resultMessage="Its a Tie";
    }
    else{
       switch(computerChoice){
            case "rock":
                 resultMessage=userChoice==="paper"? "You win!" : "Computer wins!";
                 break;
            case "paper":
                resultMessage=userChoice==="rock"? "Computer wins!": "You win!";
                break;
            case "scissors":
                resultMessage=userChoice==="rock"? "You win!" : "Computer wins!";
                break;
       }
    }

    userChoice_display.textContent=`Your choice : ${userChoice}`;
    computerChoice_display.textContent=`Computer choice : ${computerChoice}`
    result.textContent=`Result: ${resultMessage}`;
}








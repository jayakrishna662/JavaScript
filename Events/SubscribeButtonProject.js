let button=document.getElementById("btn")

function changeText(){
    if(button.textContent==="Subscribe"){
    button.textContent="Subscribed";
    }
    else{
        button.textContent="Subscribe";
    }
}

button.addEventListener("click",changeText)

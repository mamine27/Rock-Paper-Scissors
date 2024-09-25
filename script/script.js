var Humanscore = 0
var Compscore = 0
var round = prompt("How many rounds?")


function getcomputerchoice(){
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}
function getHumanchoice(){
    let s = prompt("Pick")
    return s
}
function res(){
    if (Humanscore > Compscore){
        console.log("Nah , you won")
    }
    else{
        console.log("you were cooked")
    }
}

function Engine(){
    let A = getcomputerchoice()
    let B = getHumanchoice()
    if ((A == 1 && B == 2) || (A == 2 && B == 3) || (A == 3 && B == 1)){
        console.log("you win")
        console.log(++Humanscore , Compscore)
    }
    else if((A == 1 && B == 3) || (A == 2 && B == 1) || (A == 3 && B == 2)){
        console.log("you lost")
        console.log(Humanscore , ++Compscore)

    }
    else{
        console.log("Tie")
        console.log(Humanscore,Compscore)
    }
    
}

for (let i = 0 ; i < round ; i++){
    Engine()
}


var Humanscore = 0
var Compscore = 0
var correct
var round = prompt("How many rounds?")

// dictionary to communicate between the comp and user
const myDictionary = {
  "Scissors": 1,
  "Paper": 2,
  "Rock": 3 ,
  1 :"Scissors",
  2 :"Paper" ,
  3 :"Rock"
};

function getcomputerchoice(){
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}
function getHumanchoice(){
    let s = prompt("Pick from  (Scissors , Paper , Rock ) or ( 1 , 2 , 3) respectively :)")
    switch(s) {
        case "1" :
        case "2" :
        case "3" :
            return s
            break
        default :

    }
    
    correct = s[0].toUpperCase() + s.substring(1).toLowerCase() 
    return myDictionary[correct]
}
function res(){
    if (Humanscore > Compscore){
        console.log("Nah , you won")
    }
    else if (Humanscore < Compscore){
        console.log("you were cooked")
    }
    else{
        console.log("this was epic but it's tie")
    }
}

function notpossible(rnd , Hscore , coscore){
    if ((round - rnd < coscore - Hscore) || (round - rnd < Hscore - coscore)){
        return true
    }
    return false 

}

function Engine(){
    let A = getHumanchoice()
    let B = getcomputerchoice()
    if ((A == 1 && B == 2) || (A == 2 && B == 3) || (A == 3 && B == 1)){
        console.log(`${myDictionary[A]} beat ${myDictionary[B]} , you win this round`)
        console.log(++Humanscore , Compscore)
    }
    else if((A == 1 && B == 3) || (A == 2 && B == 1) || (A == 3 && B == 2)){
        console.log(`${myDictionary[A]} doesn't beat ${myDictionary[B]} , you lose this round`)
        console.log(Humanscore , ++Compscore)

    }
    else{
        console.log("this round was  a Tie")
        console.log(Humanscore,Compscore)
    }
    
}

for (let i = 0 ; i < round ; i++){
    if (notpossible(i , Humanscore , Compscore)){
        break
    }
    Engine()
}
res()


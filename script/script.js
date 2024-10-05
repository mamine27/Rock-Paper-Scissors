//
var hthumanscore = document.querySelector("#humanscore")
var htcompscore = document.querySelector("#compscore")
var htpaperbt = document.querySelector("#paper")
var htrockbt = document.querySelector("#rock")
var htscisbt = document.querySelector("#scis")
var htopbt = document.querySelector("#option")
var htrn = document.querySelector("#Round")
var wndw = document.querySelector("#window")
var compwndw = document.querySelector('#computer')
var hmnwndw = document.querySelector("#human")
var htrstbtn = document.querySelector("#reset")
var tie = document.querySelector("#filler")












var Humanscore = 0
var Compscore = 0
var correct
let round;
function init(numberofrounds) {
    round = numberofrounds
  }
var A
var chosed
var counter = 0

console.log(`rounds inputed ${round}`)


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
function imgchooser(n){
    return Math.floor(Math.random() * (n - 0 + 0)) ;

}
function imager(){
    gifs = ['aizen','gj','op','sm','ss','st','y']
    return gifs[imgchooser(7)]
}



htopbt.addEventListener("click", function(event) {
    if(! notpossible(counter , Humanscore , Compscore)){
        if (event.target.id === "paper") {
                A = 2
                Engine() 
                hmnwndw.innerHTML = `<img src="Images/pap.png">`;
            } else if (event.target.id === "rock") {
                A = 3
                Engine()
                hmnwndw.innerHTML = `<img src="Images/rock.png">`;

            } else if (event.target.id === "scis") {
                A = 1
                Engine()
                hmnwndw.innerHTML = `<img src="Images/sci.png">`;

        }
    }
    
    
    
});

htrstbtn.addEventListener("click", function() {
    Humanscore = 0
    Compscore = 0
    hthumanscore.textContent = Humanscore
    htcompscore.textContent = Compscore
    htrn.textContent = 1
    hmnwndw.innerHTML = `<img src="Images/rock.png">`;
    compwndw.innerHTML = `<img src="Images/rock.png">`;
    counter = 0 
    tie.textContent = "Round"
    htrn.textContent = 1

});
    

function res(){
    if (Humanscore > Compscore){
        console.log("Nah , you won")
        hmnwndw.innerHTML = `<div class = "nwimg" style="overflow: hidden; width: 100%; height: 100%; border-radius: 50%;"><img src="Images/win/${imager()}.gif" style="width: 120%; height: 120%; object-fit: cover; transform: translate(-10%, -10%);"></div>`;
        hthumanscore.textContent = "WINNER!"
        htcompscore.textContent = "LOSER!"
    }
    else if (Humanscore < Compscore){
        console.log("you were cooked")
        compwndw.innerHTML = `<div class = "nwimg" style="overflow: hidden; width: 100%; height: 100%; border-radius: 50%;"><img src="Images/win/${imager()}.gif" style="width: 120%; height: 120%; object-fit: cover; transform: translate(-10%, -10%);"></div>`;
        htcompscore.textContent = "WINNER!"
    }
    else if (Humanscore == Compscore){
        console.log("this was epic but it's tie")
        hmnwndw.innerHTML = `<div class = "nwimg" style="overflow: hidden; width: 100%; height: 100%; border-radius: 50%;"><img src="Images/sec.gif" style="width: 120%; height: 120%; object-fit: cover; transform: translate(-10%, -10%);"></div>`;
        compwndw.innerHTML = `<div class = "nwimg" style="overflow: hidden; width: 100%; height: 100%; border-radius: 50%;"><img src="Images/sls.gif" style="width: 120%; height: 120%; object-fit: cover; transform: translate(-10%, -10%);"></div>`;
        tie.textContent = "TIE!"
        htrn.textContent = ''

        
    }
}
    function compchoosinganimation() {
        chosed = getcomputerchoice();
        let imgs = ["sci", "pap", "rock"];
        let index = 0;
        let interval = setInterval(() => {
            compwndw.innerHTML = `<img src="Images/${imgs[index]}.png">`;
            index = (index + 1) % imgs.length;
        }, 300); // Adjust interval time as needed
        
        // Optionally, stop after a few cycles
        setTimeout(() => {clearInterval(interval);
            hthumanscore.textContent = Humanscore
            htcompscore.textContent = Compscore
            compwndw.innerHTML = `<img src="Images/${imgs[chosed - 1]}.png">`;
            console.log("computer chose " + myDictionary[chosed])
            htrn.textContent = counter
            if(notpossible(counter , Humanscore , Compscore)){
                res()
            }

        }, 1000); // Stops after 5 seconds
    
}




function notpossible(rnd , Hscore , coscore){
    if ((round - rnd < coscore - Hscore) || (round - rnd < Hscore - coscore)){
       
        return true
    }
    if(rnd == round){
        return true
    }
    return false 

}

function Engine(){
    compchoosinganimation()   
    let B = chosed
    console.log("you chose " + myDictionary[A] + " , computer chose " + myDictionary[B])
    if ((A == 1 && B == 2) || (A == 2 && B == 3) || (A == 3 && B == 1)){
        console.log(`${myDictionary[A]} beat ${myDictionary[B]} , you win this round`)
        console.log(`you score ->${++Humanscore} , computer score -> ${Compscore}`)
    }
    else if((A == 1 && B == 3) || (A == 2 && B == 1) || (A == 3 && B == 2)){
        console.log(`${myDictionary[A]} doesn't beat ${myDictionary[B]} , you lose this round`)
        console.log(`you score ->${Humanscore} , computer score -> ${++Compscore}`)
    }
    else{
        console.log("this round was  a Tie")
        console.log(`you score ->${Humanscore} , computer score -> ${Compscore}`)
    }
    counter ++

    
}



// res()


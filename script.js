let computerChoice = []; // order that the computer flashed squares
let playerChoice = []; // order that the player chose the squares
let flash; // how many flashes happened
let level; //keeps track of what level we are on 
let good; // keeps track of how good we are doing
let compTurn; // if it's the computer's Turn
let intervalId;//this helps with timing of the flashes
let gameOn = false; // if the game is on or not--right now it is set to false, meaning it is not on
let gameWon;//if the game is won or not

const redSquare = document.querySelector(".red"); //this grabs the red square
const orangeSquare = document.querySelector(".orange"); //this grabs the orange square
const yellowSquare = document.querySelector(".yellow"); //this grabs the yellow square
const greenSquare = document.querySelector(".green"); //this grabs the green square
const blueSquare = document.querySelector(".blue"); // this grabs the blue square
const purpleSquare = document.querySelector(".purple"); //this grabs the purple square
const brownSquare = document.querySelector(".brown"); //this grabs the brown square
const graySquare = document.querySelector(".gray"); //this grabs the gray square
const blackSquare = document.querySelector(".black"); //this grabs the black square
const startButton = document.querySelector("#start"); //this grabs the start button
const resetButton = document.querySelector("#reset")//this grabs the reset button
const levelTracker = document.querySelector("#level"); //this grabs the score



//Start the code in which you would start the game

startButton.addEventListener("click", (event)=>{ //this whole function does not let the game start until the start button is clicked
    gameOn = true; //once game is clicked, game is now on or set to true
    if(gameOn) { //if gameOn is true, then evoke the play Game function, which starts the game
        playGame();//evokes the play function, which starts the computer choice
    }
})

resetButton.addEventListener("click", (event)=>{ //this whole function just resets the game when button is clicked
        playGame();//evokes the play function, which starts the computer choice
        levelTracker.innerHTML = level;//changes the level number back to level 1
})

function playGame() { //starts the computer's choice
    startButton.style.visibility = 'hidden'//when the start button is clicked, it will disappear
    gameWon = false;//this puts the game back to false. this is important when you win the game and you reset it. if you didn't and hit reset, it would still assume you won
    computerChoice = [];//at the start of the game, the computerChoice array is empty. This happens really quickly
    playerChoice = [];//at the start of the game, the playerChoice array is empty
    flash = 0;//at the start of the game, no flashes happen, so that is why we start it at 0
    intervalId = 0;
    level = 1;//we start on level on, that is why we have 1
    good = true;//we haven't failed yet, so that is why it is true
    for (let i=0; i < 20; i++){ 
        computerChoice.push(Math.floor(Math.random() * 9)+1)//this pushed a random number into the computer choices array, 20 times
}
compTurn = true; //because it starts with the computer first
intervalId = setInterval(computerTurn, 800);

}

function computerTurn(){
    gameOn = false; //player cannot click anything
    if  (flash == level) { // means computer's turn is over
        clearInterval(intervalId);
        compTurn = false;// this says turn compTurn to false
        originalColor();//puts it back to the original color
        gameOn = true;//says the player can press buttons
    }

    if (compTurn){ //if computer's turn is true
        originalColor();//run this function
        setTimeout(() => {//wait 200 milliseconds
            if (computerChoice[flash]==1) one(); //if the flashed number index equals 1, run the one function
            if (computerChoice[flash]==2) two();//if the flashed number index equals 2, run the two function
            if (computerChoice[flash]==3) three();//if the flashed number index equals 3, run the three function
            if (computerChoice[flash]==4) four();//if the flashed number index equals 4, run the four function
            if (computerChoice[flash]==5) five();//if the flashed number index equals 5, run the five function
            if (computerChoice[flash]==6) six();//if the flashed number index equals 6, run the six function
            if (computerChoice[flash]==7) seven();//if the flashed number index equals 7, run the seven function
            if (computerChoice[flash]==8) eight();//if the flashed number index equals 8, run the eight function
            if (computerChoice[flash]==9) nine();//if the flashed number index equals 9, run the nine function
            flash++;
            console.log(computerChoice)
        }, 200)//this will stop the computer from flashing for 200 milliseconds
    }
}

//these functions just change the color when either flashed(compTurn) or when clicked on by player
function one(){
    redSquare.style.backgroundColor = "#FFFFFF";
}
function two(){
    orangeSquare.style.backgroundColor = "#FFFFFF";
}
function three(){
    yellowSquare.style.backgroundColor = "#FFFFFF";
}
function four(){
    greenSquare.style.backgroundColor = "#FFFFFF";
}
function five(){
    blueSquare.style.backgroundColor = "#FFFFFF";
}
function six(){
    purpleSquare.style.backgroundColor = "#FFFFFF";
}
function seven(){
    brownSquare.style.backgroundColor = "#FFFFFF";
}
function eight(){
    graySquare.style.backgroundColor = "#FFFFFF";
}
function nine(){
    blackSquare.style.backgroundColor = "#FFFFFF";
}

function originalColor() {//changes the color back to it's original color
    redSquare.style.backgroundColor = "#FF0000";
    orangeSquare.style.backgroundColor = "#CC5500";
    yellowSquare.style.backgroundColor = "#FFD100";
    greenSquare.style.backgroundColor = "#008000";
    blueSquare.style.backgroundColor = "#0000FF";
    purpleSquare.style.backgroundColor = "#4B0082";
    brownSquare.style.backgroundColor = "#401F00";
    graySquare.style.backgroundColor = "#373737";
    blackSquare.style.backgroundColor = "#000000";
}

function flashColor() {//changes all the colors to their flashed color at the same time
    redSquare.style.backgroundColor = "#FFFFFF";
    orangeSquare.style.backgroundColor = "#FFFFFF";
    yellowSquare.style.backgroundColor = "#FFFFFF";
    greenSquare.style.backgroundColor = "#FFFFFF";
    blueSquare.style.backgroundColor = "#FFFFFF";
    purpleSquare.style.backgroundColor = "#FFFFFF";
    brownSquare.style.backgroundColor = "#FFFFFF";
    graySquare.style.backgroundColor = "#FFFFFF";
    blackSquare.style.backgroundColor = "#FFFFFF";
}

redSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(1);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        one();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})

orangeSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(2);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        two();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})

yellowSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(3);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        three();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})

greenSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(4);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        four();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})
blueSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(5);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        five();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})
purpleSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(6);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        six();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})
brownSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(7);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        seven();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})
graySquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(8);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        eight();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})
blackSquare.addEventListener("click", (event) => {
    if (gameOn){//if the gameOn is true
        playerChoice.push(9);//if this square is clicked, push the number inside the () to playerChoice array
        check();//calls the check function
        nine();//on the click, changes the square the color
        if(!gameWon){
            setTimeout(()=>{
                originalColor();//changes the color when clicked, if game has not yet been won
            }, 300);//this interval shows how long it stays white when clicked
        }
    } 
})



function check(){//this function checks to see if the player got their choice right
    let currentTurnNumber = playerChoice.length-1//notates the last choice the player chose
    if (playerChoice[currentTurnNumber] !== computerChoice[currentTurnNumber])//if the player's choice does not equal the computers choice
    good = false;//the game has gone to bad
    

    if (playerChoice.length == 20 && good){//if the player has completed all levels
        winGame();//run the win game function
    }
    if (good == false){//if the game is false, meaning if the player chose wrong
        flashColor();//flashes all the flash colors
        levelTracker.innerHTML = "WRONG!";//when the player clicks the wrong button, the level counter will say "WRONG"
        playGame();//returns the player back to the start of the game
        setTimeout(() => {
            levelTracker.innerHTML = level;//makes the level go back to level one
            originalColor();//goes back to the original colors 
        }, 800);//this is the interval between when the player chooses the wrong color and the start of a new game
   }  

    if (level == playerChoice.length && good && !gameWon){//if the level equals the length of the playerChoice array and they are still in the good and the game hasnt won yet
        level++;//increase the level by 1
        playerChoice =[];//make the playerChoice an empty array agin
        compTurn=true;//make the compTurn equal to true
        flash=0;//make flash equal 0 again
        levelTracker.innerHTML = level;//make the level counter the level number
        intervalId=setInterval(computerTurn,1000);//this is the interval between when it goes to the computer's turn
    }
  
}

function winGame(){//win the game function
    flashColor();//make all the colors flash at the same time
    levelTracker.innerHTML = "YOU WON!";//make the level tracker say "YOU WON"
    startButton.style.visibility = 'visible';//make the start button visible again
    gameOn = false;//turn the game off
    gameWon = true;//syas that the game has been won
}


  



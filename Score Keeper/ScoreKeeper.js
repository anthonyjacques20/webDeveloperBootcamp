var player1Button = document.querySelector("#p1");
var player2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var player1Display = document.querySelector("#p1Display");
var player2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var player1Score = 0;
var player2Score = 0;
var maxScore = 5;
var gameOver = false;

player1Button.addEventListener("click", function(){
    if (!gameOver){
        player1Score++;
        if (player1Score === maxScore){
            player1Display.classList.add("win");
            gameOver = true;
        }
        player1Display.textContent = player1Score;
    }
});

player2Button.addEventListener("click", function(){
    if (!gameOver){
        player2Score++;
        if(player2Score === maxScore){
            player2Display.classList.add("win");
            gameOver = true;
        }    
        player2Display.textContent = player2Score;
    }
});

resetButton.addEventListener("click", reset);

//We want to use the change rather than click so that user can type it in
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    maxScore = this.valueAsNumber;
    //maxScore = Number(this.value);
    reset();
})

function reset(){
    player1Score = 0;
    player1Display.textContent = player1Score;
    player2Score = 0;
    player2Display.textContent = player2Score;
    player1Display.classList.remove("win");
    player2Display.classList.remove("win");
    gameOver = false;
}
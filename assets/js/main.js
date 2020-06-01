var roundNumberSlider = document.getElementById("rangeSlider");
var round = document.getElementById("numberRoundValue");
var pastRoundNumber = 0;
round.innerHTML = pastRoundNumber;
var player1Score = document.getElementById("scorePlayer1Value");
var player1ScoreValue = 0;
    player1Score.innerHTML = player1ScoreValue;
var player2Score = document.getElementById("scorePlayer2Value");
var player2ScoreValue = 0;
    player2Score.innerHTML = player1ScoreValue;
var itemsPowerMatrix = [[0, 0, 1],[1, 0, 0],[0, 1, 0]];
var PCsItem = "";
var mouseButtonNumber = {};
var message = document.getElementById("explanationArea");

document.oncontextmenu = function() {return false;}

document.getElementById("buttonRestart").addEventListener("click", restartGame);
document.getElementById("imgRockPaperScissors").addEventListener("mousedown", assesButtonNumber);
document.getElementById("imgRockPaperScissors").addEventListener("mouseup", selectItem);

function selectItem(){
    if (roundNumberSlider.value > 0){
        pastRoundNumber++;
        round.innerHTML = pastRoundNumber;
        console.log(roundNumberSlider.value);
        PCsItem = Math.floor(Math.random() * 3);
        console.log(mouseButtonNumber, PCsItem);
        if (mouseButtonNumber != PCsItem){
            if(itemsPowerMatrix[mouseButtonNumber][PCsItem] == 1){
            player1ScoreValue++;
            player1Score.innerHTML = player1ScoreValue;
            player1Score.style.backgroundColor = "rgb(211,211,211)";
            player1Score.style.color = "rgb(4,44,90)";
            player2Score.style.backgroundColor = "rgb(15, 72, 136)";
            player2Score.style.color = "white";
            showMessage(mouseButtonNumber);
            }
            else{
            player2ScoreValue++;
            player2Score.innerHTML = player2ScoreValue;
            player2Score.style.backgroundColor = "rgb(211,211,211)";
            player2Score.style.color = "rgb(4,44,90)";
            player1Score.style.backgroundColor = "rgb(15, 72, 136)";
            player1Score.style.color = "white";
            showMessage(PCsItem);
            }  
        }
        else{
            player1Score.innerHTML = player1ScoreValue;
            player2Score.innerHTML = player2ScoreValue;
            player1Score.style.backgroundColor = "rgb(15, 72, 136)";
            player1Score.style.color = "white";
            player2Score.style.backgroundColor = "rgb(15, 72, 136)";
            player2Score.style.color = "white";
            message.innerHTML = "Try again!";
        }
        roundNumberSlider.value--;
    }
    else{
        round.innerHTML = "";
        document.getElementById("imgRockPaperScissors").style.visibility = "hidden";
        message.innerHTML = "Game over.";
        player1Score.innerHTML = "";
        player2Score.innerHTML = "";
        player1Score.style.backgroundColor = "rgb(15, 72, 136)";
        player2Score.style.backgroundColor = "rgb(15, 72, 136)";
        player1Score.style.backgroundSize = "10vw 10vw";
        player1Score.style.backgroundRepeat = "no-repeat"
        player1Score.style.backgroundPosition = "center";
        player2Score.style.backgroundSize = "10vw 10vw";
        player2Score.style.backgroundRepeat = "no-repeat"
        player2Score.style.backgroundPosition = "center";
        if (player1ScoreValue > player2ScoreValue){
            player1Score.style.backgroundImage = "url('assets/img/cup.png')";
        }
        else if(player1ScoreValue == player2ScoreValue){
            player1Score.style.backgroundImage = "url('assets/img/cup.png')";
            player2Score.style.backgroundImage = "url('assets/img/cup.png')";
        }
        else{
            player2Score.style.backgroundImage = "url('assets/img/cup.png')";
        }
    }
}


function restartGame(){
    pastRoundNumber = 0;
    round.innerHTML = pastRoundNumber;
    player1ScoreValue = 0;
    player1Score.innerHTML = player1ScoreValue;
    player2ScoreValue = 0;
    player2Score.innerHTML = player1ScoreValue;
    roundNumberSlider.value = 10;
    message.innerHTML = "Lets start!";
    player1Score.style.backgroundColor = "rgb(15, 72, 136)";
    player1Score.style.color = "white";
    player2Score.style.backgroundColor = "rgb(15, 72, 136)";
    player2Score.style.color = "white";
    player1Score.style.backgroundImage = "none";
    player2Score.style.backgroundImage = "none";
    document.getElementById("imgRockPaperScissors").style.visibility = "visible";
}

function assesButtonNumber(event) {
    mouseButtonNumber = event.button;
}

function showMessage(item){
    if (item == 0){
        message.innerHTML = "Rock crushes scissors.";
    }
    else if(item == 1){
        message.innerHTML = "Paper covers rock.";
    }
    else{
        message.innerHTML = "Scissors cuts paper.";
    }
}
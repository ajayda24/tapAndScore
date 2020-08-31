document.getElementById("gameScreen").style.display = "none";
document.getElementById("loseScreen").style.display = "none";





function startGame(){
    document.getElementById("mainScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    var score = document.getElementById("score");
    var scoreText = Number(score.innerHTML);;
    var scoreValue;

    scoreMore();

    

    setInterval(function(){
        var score = document.getElementById("score");
        var scoreText = Number(score.innerHTML);;
        scoreDown = scoreText - 1;
        score.innerHTML = scoreDown;
    },300);


    var timeSecondValue;

    setInterval(function(){

        var newScore = document.getElementById("score").innerHTML;
    
        var timeSecond = document.getElementById("timeSecond");
        var timeSecondText = Number(timeSecond.innerHTML);
    
        timeSecondValue = timeSecondText - 1;
        timeSecond.innerHTML = timeSecondValue;
    
        if(timeSecondValue < 10){
            timeSecond.innerHTML = "0"+timeSecondValue;
        }
        if(timeSecondValue == 0){
            document.getElementById("gameScreen").style.display = "none";
            document.getElementById("loseScreen").style.display = "block";
            document.getElementById("result").innerHTML = "Your Score : "+newScore;
        }
    },1000);

}

function scoreMore(){
    score = document.getElementById("score");
    scoreText = Number(score.innerHTML);
    scoreValue = scoreText + 1;
    score.innerHTML = scoreValue;
    console.log(scoreValue);
}
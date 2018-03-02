// create variables/put all variables together for reset function.
var q1, q2, q3, q4, q5;
var interval;
var correct = 0;
// this is to add jQuery
$(document).ready(function(){
    var playAgain = document.getElementById('timer');
var getResults = function(){
    correct = 0;    
    //adding radio button values
    q1 = $('input[name=q1]:checked').val(); 
    q2 = $('input[name=q2]:checked').val(); 
    q3 = $('input[name=q3]:checked').val(); 
    q4 = $('input[name=q4]:checked').val(); 
    q5 = $('input[name=q5]:checked').val(); 
// create conditions
    if (q1 === "t"){correct++;}
    if (q2 === "f"){correct++;}
    if (q3 === "t"){correct++;}
    if (q4 === "t"){correct++;}
    if (q5 === "f"){correct++;}
    alert("correct answers: " + correct)
    console.log(q1);
    console.log(q2);
    console.log(q3);
    console.log(q4);
    console.log(q5);
    console.log("10 seconds") 
}

// reset the game when time runs out
function resetGame() {
    getResults();
    // google Fu code
    $('input[type=radio]').prop('checked', function () {
        return this.getAttribute('checked') == 'checked';   
    });
    // playAgain = timer
    playAgain.innerHTML = "Play Again!";
  
}
// Reset the game when submit is clicked.
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(){
    clearInterval(interval);
    resetGame();
});

var playAgain = document.getElementById('timer');
    playAgain.innerHTML = "Play Again!";
    playAgain.addEventListener('click', function(){
    createInterval();
    })
//display
var createInterval =(function(){
    

var secondsLeft = 20;
interval = setInterval(function() {
    document.getElementById('timer').innerHTML = --secondsLeft;

    if (secondsLeft <= 0)
    {
    playAgain.innerHTML = "Play Again!";
    clearInterval(interval);
    resetGame();  
    }
}, 1000);
});
// set timer
createInterval();

});





    // create a counter variable , then create set interval that decrements the counter variable by one everyon 1000 ms and checks if variable= 0
 //  Variable that will hold the button alert's timeout when it is clicked.
    //   var timer = 1;
    //   function triggerMsg() {
    //     var intervalsElement = $('#intervals');
    //     var msg = 'Message ' + msgCount;
    //   //   write -- for a countdown timer
    //     timer++;
    //     var msgDiv = $('timer');
    //     msgDiv.text(msg);
    //     intervalsElement.append(msgDiv);
    //   }
    //   var msgInterval = setInterval(triggerMsg, 2000);
    //   function stop() {
    //     clearInterval(msgInterval);
    //   }
    //       
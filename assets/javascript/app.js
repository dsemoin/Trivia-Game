// create variables/put all variables together for reset function.
var q1, q2, q3, q4, q5;
var correct = 0;

// set timer
setTimeout (function() {
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
    console.log("25 seconds") // does it once
    alert("reload page");
},25000);
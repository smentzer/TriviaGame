// console.log("is this thing on?") (it was in fact on)
// function for hiding start button div
$(function () {
    $("#startButton").show();
    $(".jumbotron").hide();
    $(startGame).show();
});

var audio = new Audio("friday13th.mp3");
var score = 0;

//count down timer
var timer;
var time = 50;

timer = setInterval(function() {
    time--;
    $("#timer").html(time);

    if (time === 0) {
        clearInterval(timer); 
        audio.play();
        //call submit function
     };

}, 1000);
   



//questions 
    var questions = [
        {
            question: '-If you are a teenager living on Elm Street what should you never do?',
            choices: {
                a: 'Go to sleep',
                b: 'Play with dolls',
                c: 'Go to the prom',
            },
            answer: 'a'
        },
        {
            question: '-If you are looking for a job on Crystal Lake what offer should you not accept?',
            choices: {
                a: 'Mailman',
                b: 'Camp counselor',
                c: 'TA',
            },
            answer: 'b'
        },
        {
            question: '-All work and no play makes...?',
            choices: {
                a: 'right',
                b: 'here\'\s Johnny!',
                c: 'Jack a dull boy',
            },
            answer: 'c'
        },
        {
            question: '-The calls are coming from...',
            choices: {
                a: 'Texas',
                b: 'inside the house',
                c: 'the neighbors',
            },
            answer: 'b'
        },
        {
            question: '-Who is the killer in Halloween?',
            choices: {
                a: 'Jason Vorhees',
                b: 'Norman Bates',
                c: 'Michael Myers',
            },
            answer: 'c'
        },

    ];
    
    $("#startButton").click(function(){
        $("#startButton").hide();
        $(".jumbotron").show();
    });


    function startGame() {
        for (var i = 0; i < questions.length; i++) {
            $("#quiz").append(questions[i].question + "<br>");
            $("#quiz").append("<input type='radio' name='" +i+ "'value='a'>" + questions[i].choices.a + "<br>");
            $("#quiz").append("<input type='radio' name='" +i+ "'value='b'>" + questions[i].choices.b + "<br>");
            $("#quiz").append("<input type='radio' name='" +i+ "'value='c'>" + questions[i].choices.c + "<br>");
        }
    }

    startGame();
   
//collect user input
var userChoice;
var correctAnswer;
var questionsRight;
var questionsWrong;
var incompleteAnswers;


function submit() {
if (userChoice !== correctAnswer) {
    questionsWtong++;
    $("#").text(questionsWrong);
}
else if (userChoice === correctAnswer){
    questionsRight++;
    $("#").text(questionsRight);
}
};







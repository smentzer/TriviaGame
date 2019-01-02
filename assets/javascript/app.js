// console.log("is this thing on?") (it was in fact on)
// function for hiding start button div
$(function () {
    $("#startButton").show();
    $(".jumbotron").hide();
    $(startGame).show();
});
$("#startButton").click(function () {
    $("#startButton").hide();
    $(".jumbotron").show();
});

var audio = new Audio("friday13th.mp3");
var score = 0;

//count down timer
var timer;
var time = 60;

function timerFunction () {
timer = setInterval(function () {
    time--;
    $("#timer").html(time);

    if (time === 0) {
        clearInterval(timer);
        audio.play();
        //call submit function
        submit();
    };

}, 1000);
}



//questions //seperated questions, choices, and answers. 
var questions = [
    "-If you are a teenager living on Elm Street what should you never do?",
    //'a' 'Go to sleep'
    ['-If you are looking for a job on Crystal Lake what offer should you not accept?'],
    //'b' 'Camp counselor'
    ['-All work and no play makes...?'],
    //'c' 'Jack a dull boy'
    ['-The calls are coming from...'],
    //'b' 'inside the house'
    ['-Who is the killer in Halloween?'],
    //'c' 'Micheal Myers'
];

var choices = [
    {
        a: "Go to sleep",
        b: "Play with dolls",
        c: "Go to the prom",
    },

    {
        a: "Mailman",
        b: "Camp counselor",
        c: "TA",
    },

    {
        a: "right",
        b: "here\'\s Johnny!",
        c: "Jack a dull boy",
    },

    {
        a: "Texas",
        b: "inside the house",
        c: "the neighbors"
    },

    {
        a: "Jason Vorhees",
        b: "Norman Bates",
        c: "Michael Myers",
    },

];





function startGame() {
    for (i = 0; i < questions.length; i++) {
      $("#quiz").append( questions[i],  "<br>");
      var obj = choices[i];
      for (var prop in obj) {
        $("#quiz").append("<input type='radio' name='" + i + "' value='" + prop + "'>  " + obj[prop] + "<br>");
      }
    }
    $("#reset").hide();
    timerFunction();
  };


    


    //answer variables
    var correctAnswer = [ "a" , "b" , "c" , "b" , "c" ];
    var questionsRight = 0;
    var questionsWrong = 0;
    var incompleteAnswers;


    function submit() {
      for (i= 0; i < questions.length; i++) {
          if ($("input[name=" + i + "]:checked").val() === correctAnswer[i]) {
              questionsRight++;
          } else {
              questionsWrong++;
          }
      }  
      $("#results").text("score; " + questionsRight + " out of " + questions.length);
      $("#reset").show();

      clearInterval(timer);
    };




function reset() {
$("#quiz").html("");
time = 60;
timerFunction();
$("#timer").html(time);
clearInterval(timer);
startGame();
submit();
questionsRight = 0;
questionsWrong = 0;
$("#results").text("score; " + questionsRight + " out of " + questions.length);
$("#reset").hide();
};









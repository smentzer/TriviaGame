// console.log("is this thing on?") (it was in fact on)
//timer 
var audio = new Audio("friday13th.mp3");
var score = 0;

setTimeout(timeUp, 15000); {
    function timeUp() {
        $("#time-left").append("<h2>Times up</h2>");
        console.log("done")
        audio.play();
    };
}
    //questions 
    var myQuestions = [
        {
            question: "If you are a teenager living on Elm Street what should you never do?",
            answers: {
                a: 'Go to sleep',
                b: 'Play with dolls',
                c: 'Go to the prom'
            },
            correctAnswer: "a"
        },
        {
            question: "If you are looking for a job on Crystal Lake what offer should you not accept?",
            answers: {
                a: 'Mailman',
                b: 'Camp counselor',
                c: 'TA'
            },
            correctAnswer: "b"
        },
        {
            question: "All work and no play makes...?",
            answers: {
                a: 'right',
                b: 'heres Johnny!',
                c: 'Jack a dull boy'
            },
            correctAnswer: "c"
        },
        {
            question: "The calls are coming from...",
            answers: {
                a: 'Texas',
                b: 'inside the house',
                c: 'the neighbors'
            },
            correctAnswer: "b"
        },
        {
            question: "Who is the killer in Halloween?",
            answers: {
                a: 'Jason Vorhees',
                b: 'Norman Bates',
                c: 'Michael Myers'
            },
            correctAnswer: "c"
        },

    ]
    
var questionNum = 0;                                                    // keep count of question, used for IF condition.
var imgNum = 0;
var question = '<div><h1>what is the max length in mm of your finger stretched laterally?</h1></div>';                 // first question
var img = '<div><img src="img/IMG_0159.GIF" style="margin-top: 2em"></img></div>';

var output = document.getElementById('output');             // store id="output" in output variable
output.innerHTML = img + question;                                                    // ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<video id="myVideo" height="360px" width="480px" style="margin: 0 auto; margin-top:0; display: block;" controls>'+'<source src="./video/cut.mov" type="video/mp4">'+'</video><br/><h1>Your max length of fingers is '+input+" mm, while Fuxin's max length of fingers is 187 mm.</h1>";
    document.getElementById("input").value = "";        // clear text box
    question = '<h1>what is the max length in mm of your toes that can be stretched laterally?</h1>';                 // load next question       
    img='<img src="img/IMG_0160.GIF" style="margin-top: 2em"></img>';
    var vid = document.getElementById("myVideo");
    vid.onended = function() {
        setTimeout(timedQuestion, 2000);
        };                                    // output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>where are you from?</h1>';                          
    setTimeout(timedQuestion, 2000);
    }   
}

function timedQuestion() {
    output.innerHTML = img + question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();                                                                                      // run bot function when enter key pressed
    questionNum++;                                                                      // increase questionNum count by 1
    imgNum++;
  }
});
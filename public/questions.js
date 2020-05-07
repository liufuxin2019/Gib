var questionNum = 0;                                                    // keep count of question, used for IF condition.
var imgNum = 0;
var question = '<div><h1>what is the max length in mm of your finger stretched laterally?</h1></div>';                 // first question
var img = '<div><img src="../img/IMG_0159.GIF" style="margin-top: 2em"></img></div>';

var output = document.getElementById('output');             // store id="output" in output variable
output.innerHTML = img + question;                                                    // ouput first question



function bot() { 
    var input = document.getElementById("input").value;
    //socket.emit('userdata', input);
    //userdata
    //console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<video controls autoplay id="myVideo" height="360px" width="480px" style="margin: 0 auto; margin-top:0; display: block;" controls>'+'<source src="../video/handdata_480.mov" type="video/mp4">'+'</video><br/><h1>Your max width of hand is '+input+" mm, while Fuxin's max width of hand is 187 mm.</h1>";
    document.getElementById("input").value = "";        // clear text box
    question = '<h1>what is the max length in mm of your toes that can be stretched laterally?</h1>';                 // load next question       
    img='<img src="../img/IMG_0160.GIF" style="margin-top: 2em"></img>';
    var vid = document.getElementById("myVideo");
    vid.onended = function() {
        setTimeout(timedQuestion, 2000);
        };                                    // output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<video controls autoplay id="myVideo" height="360px" width="480px" style="margin: 0 auto; margin-top:0; display: block;" controls>'+'<source src="../video/footdata.mov" type="video/mp4">'+'</video><br/><h1>Your max length of foot is '+input+" mm, while Fuxin's max length of food is 109 mm.</h1>";
    document.getElementById("input").value = "";   
    question = '<h1>what is The distance between the hand and the lower jaw when it across the ear on the other side?</h1>';                 // load next question       
    img='<img src="../img/IMG_0168.GIF" style="margin-top: 2em"></img>';
    var vid = document.getElementById("myVideo");                        
    vid.onended = function() {
        setTimeout(timedQuestion, 2000);
        };                                    // output next question after 2sec delay
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
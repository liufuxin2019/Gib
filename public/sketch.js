//start (node server.js) via terminal first for local
//start (node localserver.js) via terminal for physical control
//browser with sketch open needs focus for max speed to serial port

var socket; //add socket object
var socket2; //adding localhost socket on port 3000 [TEST]

let login = ""; //to avoid redundant data transfer
let login0 = "";

var data; //object for outgoing data;

function setup() {
    
    //you will need your own heroku server here:
    socket = io.connect(''); //for heroku
    socket2 = io.connect('http://localhost:3000'); // second socket to localhost

    socket.on('permissions', permissions);
    socket.on('L1', serverMsg);
}


function serverMsg(incomingData){
    socket2.emit('L2', incomingData); //send data to localserver.js from whichever node is connected
}

function permissions(incomingData){
    parent = incomingData.isParent;
    if (parent){
        console.log("login");
    }
    if (!incomingData.pwdBool){
        login = "";
        login0 = "";
        console.log("logout");
    }
}
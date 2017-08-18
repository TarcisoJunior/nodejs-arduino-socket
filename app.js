
// HTTP Server / socket receiver/emitter

const hostname = '0.0.0.0'; //<- although app runs at '127.0.0.1' or 'localhost', 0.0.0.0 is needed in order to socket.emit() works properly
const port = 3000;

var express = require('express');
var app= express();

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var path = require('path');
const io = require('socket.io')(server);
const os = require('os');  

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//Johnny five
var five = require("johnny-five"),
  board, button, potentiometer;

board = new five.Board();
count = 0;
lastValue = 0;

// store led status to display on webpage
boGreenLed = false;
boBlueLed = false;
boRedLed = false;


function setLed(led, boValue){
  if (boValue === true)
    led.on();
  else led.off();
  
  return boValue;
}

board.on("ready", function() {

  greenLed = new five.Led(11); // pin 13
  redLed = new five.Led(10);
  blueLed = new five.Led(13);


  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(5);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    let rdValue = Math.random();
    console.log("down ",count, rdValue);
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    //console.log("up");
    count ++;
    envia_status();
  });


  // Potentiometer Event API
  // Create a new potentiometer
  potentiometer = new five.Sensor({
    pin: "A3",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });

    // Potentiometer Event API

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
    if (this.value != lastValue){
        //console.log(this.value, this.raw);
        lastValue = this.value;

        // emite valor para os clientes
        if (io != undefined){
           envia_status();
           //console.log ("emitted", lastValue);
        }
    }

  });


});


app.get('/',function(req,res){
  //res.sendFile(__dirname + '/views/board.html');
    res.render('painel', { title: 'Nodejs Arduino Example 01',
                           blueLed: boBlueLed,
                           greenLed: boGreenLed,
                           redLed: boRedLed,
                           button1: count });


});

function envia_status(){
    io.emit("setBoardValues",{ value: lastValue,
                               btn: count,
                               blue: boBlueLed,
                               green: boGreenLed,
                               red: boRedLed });

}


io.on('connection', function (socket) {
  
  var addedUser = false;
  console.log("Browser connected");
 // console.log("Socket", socket.id);
  

  socket.on('toggle_led', function(colorLed){
    if (colorLed == 'blue'){
      boBlueLed = setLed(blueLed, !boBlueLed)
    }
    if(colorLed == 'green'){
      boGreenLed = setLed(greenLed, !boGreenLed);
    }
    if(colorLed == 'red'){
      boRedLed = setLed(redLed, !boRedLed);
    }

    envia_status();
  })
  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });


  });


});
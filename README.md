# nodejs-arduino-socket
An example of use arduino with nodejs and socket.io

This is an example of integrating Arduino with a nodeJs server

Pre- requisites:

* NodeJs - Javascript webserver, at https://nodejs.org

* Express - A NodeJS Framework, at https://expressjs.com/

* Socket.io - NodeJs Real time engine, at https://socket.io/

* Johnny Five - A Javascript robotics platform, download at http://johnny-five.io/

* Arduino IDE - Open source Arduino IDE Software, at https://www.arduino.cc/en/Main/Software

* An Arduino Uno Board, pre-loaded with Firmata Standard program. To install, open the Arduino IDE, then 
File - examples - Firmata - StandardFirmata. Once Firmata is loaded, you can close Arduino IDE. 
Everything else will be processed by Nodejs application.

* 1 red led 
* 1 blue led
* 1 green led
* 1 potentiometer
* 1 push-up button

The goals here is allow turn leds on/off via browser and watch real-time monitoring of potentiometer value and button press count.

see working example at https://www.instagram.com/p/BX-ndxnFjIf/

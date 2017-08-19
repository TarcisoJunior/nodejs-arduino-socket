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

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:28.194444444444443% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BX-ndxnFjIf/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Teste concluido, leitura e escrita no arduino via nodejs server. Codigo fonte em https://github.com/TarcisoJunior/nodejs-arduino-socket Test done. Read/write on srduino trough a nodejs server. Source code at github url above. #arduino #nodejs #johnnyfive #github #IoT #javascript #expressjs #example</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Uma publicação compartilhada por Tarciso Jr (@tarcisojunior) em <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-08-19T14:16:05+00:00">Ago 19, 2017 às 7:16 PDT</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

// Import the interface to Tessel hardware
var Tessel = require("tessel-io");
var five = require("johnny-five");

// Create new Tessel object
var board = new five.Board({
  io: new Tessel()
});

// Turn on led and blink
board.on("ready", () => {
  var led = new five.Led("a5");
  led.blink(500);
});

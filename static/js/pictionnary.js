

var socket = io.connect('http://' + document.domain + ':' + location.port);


let drawing = false;
function setup() {
  const myCanvas = createCanvas(400, 400);
  myCanvas.parent('myContainer');
  background(220);
}

function draw() {


  if (drawing){
    stroke(0);
    line(pmouseX, pmouseY, mouseX, mouseY);
    
    var data = {
      "pmouseX" : pmouseX,
      "pmouseY" : pmouseY,
      "mouseX"  : mouseX,
      "mouseY"  : mouseY
    }
    
    socket.emit('json_message', data);
  }

  socket.on('json_response', function(msg) {
    console.log(msg)
    stroke(255, 0, 0);
    line(msg["pmouseX"], msg["pmouseY"], msg["mouseX"], msg["mouseY"]);
    
});
}

function mousePressed(){
  drawing = true;
}
 
function mouseReleased(){
  drawing = false;
}
importScripts("/third_party/opencv.js");
var userSourceCode = "";
var ticksTilNewAttempt = 0;
/*var allActiveMats = [];
function newMat() {
  var mat = new (Function.prototype.bind.apply(cv.Mat, arguments));
  allActiveMats.push(mat);
  return mat;
}

function onOpenCvReady(id, loadingId) {

  var idInner = id + "-inner";
  document.getElementById(id).innerHTML = '<canvas id="'+idInner+'" width="720" height="480" z-index="0">HTML5 not supported!</canvas>';
  document.getElementById(idInner).width = document.getElementById(id).offsetWidth;
  document.getElementById(idInner).height = document.getElementById(id).offsetHeight;
  document.getElementById(loadingId).setAttribute("hidden", "hidden");
  document.getElementById(idInner).getContext("2d").fillStyle = "black";

  var mockCanvas = document.createElement('canvas');
  mockCanvas.width = document.getElementById(id).offsetWidth;
  mockCanvas.height = document.getElementById(id).offsetHeight;

  window.addEventListener("message", function(event) {*/ onmessage = function(event) {
    ticksTilNewAttempt--;
    if (ticksTilNewAttempt > 0) {
      return;
    }
    //var t0 = (new Date()).getTime();
    /*for (var m of allActiveMats) {
      m.delete();
    }
    allActiveMats = [];*/
    ticksTilNewAttempt = 5;
    //document.getElementById(idInner).getContext("2d").fillRect(0, 0, document.getElementById(id).offsetWidth, document.getElementById(id).offsetHeight);
    //mockCanvas.getContext("2d").putImageData(event.data[0], 0, 0);
    //var mat = cv.imread(mockCanvas);
    var mat = cv.matFromImageData(event.data[0]);
    userSourceCode = event.data[1];
    // cv.cvtColor(mat, mat, cv.COLOR_BGR2GRAY);
    process(mat);
    //cv.imshow(idInner, mat);
    let imgData = new ImageData(new Uint8ClampedArray(mat.data), mat.cols, mat.rows);
    postMessage([imgData, event.data[2]]);
    mat.delete();
    ticksTilNewAttempt = 0;
    var t1 = (new Date()).getTime();
    //console.log("send", t1 - event.data[2]);
    //console.log(t1-t0);
  };

function process(mat) {
  eval(userSourceCode);
}

postMessage("ready");

"use strict";
const width = 8.23;
const length = 16.56;
const radius = 0.774;
var hits = 0;
var misses = 0;
var pov = false;

var forward = false;
var backward = false;
var left = false;
var right = false;
var launch = false;

var visionThread = new Worker("${include(url)}/vision.js");
var visionLoaded = false;

document.addEventListener("keydown", function(e) {
  switch(e.code) {
    case "KeyW":
      forward = true;
      break;
    case "KeyS":
      backward = true;
      break;
    case "KeyA":
      left = true;
      break;
    case "KeyD":
      right = true;
      break;
    case "KeyQ":
      launch = true;
      break;
    case "KeyR":
      hits = 0;
      misses = 0;
      break;
    case "KeyE":
      pov = !pov;
      break;
  }
});

document.addEventListener("keyup", function(e) {
  switch(e.code) {
    case "KeyW":
      forward = false;
      break;
    case "KeyS":
      backward = false;
      break;
    case "KeyA":
      left = false;
      break;
    case "KeyD":
      right = false;
      break;
  }
});

function mkBasketBot(id, scoreboardId, feedId, codeId) {
  var idInner = id + "-inner";
  var feed = document.getElementById(feedId);
  var code = document.getElementById(codeId);
  var height = feed.clientHeight;
  var width = feed.clientWidth;
  document.getElementById(id).innerHTML = '<canvas id="'+idInner+'" width="'+width+'" height="'+height+'" z-index="0">HTML5 not supported!</canvas>';
  var scoreboard = document.getElementById(scoreboardId);

  var feedIdInner = feedId + "-inner";
  document.getElementById(feedId).innerHTML = '<canvas id="'+feedIdInner+'" width="'+width+'" height="'+height+'" z-index="0">HTML5 not supported!</canvas>';

  visionThread.onmessage = function(e) {
    if (e.data == "ready") {
      visionLoaded = true;
    } else {
      document.getElementById(feedIdInner).getContext("2d").putImageData(e.data[0], 0, 0);
    }
  };

  setupGl(idInner, "${include(url)}/vertex.c", "${include(url)}/fragment.c", runAnimation(scoreboard, feed, code));
}

function runAnimation(scoreboard, feed, code) {
  return function (gl, programInfo) {
    var mockCanvas = document.createElement('canvas');
    mockCanvas.width = gl.drawingBufferWidth;
    mockCanvas.height = gl.drawingBufferHeight;
    gl.useProgram(programInfo.program);
    gl.uniform1i(gl.getUniformLocation(programInfo.program, "pov"), pov);
    var lightDirection = gl.getUniformLocation(programInfo.program, "lightDirection");
    const buffers = initBufs(gl);
    var time = 0;
    var x = width / 4;
    var z = -length / 5;
    var theta = 0;
    var balls = [];
    setInterval(function() {
      time += 0.01;
      if (forward) {
        x -= Math.sin(theta) * 0.01 * 4;
        z -= Math.cos(theta) * 0.01 * 4;
      }
      if (backward) {
        x += Math.sin(theta) * 0.01 * 4;
        z += Math.cos(theta) * 0.01 * 4;
      }
      if (left) {
        theta += 0.01 * 2;
      }
      if (right) {
        theta -= 0.01 * 2;
      }
      if (x < radius) {
        x = radius;
      }
      if (x > width - radius) {
        x = width - radius;
      }
      if (z > -radius) {
        z = -radius;
      }
      if (z < -length + radius) {
        z = -length + radius;
      }
      if (launch) {
        launch = false;
        var offset = Math.random() * 0.24 - 0.12;
        var error = Math.random() * 0.05;
        var speed = 7.83 + Math.random() * 0.2 - 0.1;
        var error_direction = Math.random() * Math.PI * 2;
        var vForward = speed * Math.cos(1.107 + Math.sin(error_direction) * error);
        var vSide = speed * Math.sin(Math.cos(error_direction) * error);
        var vUp = speed * Math.sin(1.107 + Math.sin(error_direction) * error);
        if (forward) {
          vForward += 4;
        }
        if (backward) {
          vForward -= 4;
        }
        balls.push([x + Math.sin(theta) * 0.408 + Math.cos(theta) * offset,
                    0.560,
                    z + Math.cos(theta) * 0.408 - Math.sin(theta) * offset,
                    -Math.sin(theta) * vForward + Math.cos(theta) * vSide,
                    vUp,
                    -Math.cos(theta) * vForward - Math.sin(theta) * vSide,
                    true]);
      }
      for (var ball of balls) {
        ball[4] -= 0.01 * 9.81;
        ball[0] += 0.01 * ball[3];
        ball[1] += 0.01 * ball[4];
        ball[2] += 0.01 * ball[5];
        if (ball[6] && ball[1] < 2.464 && ball[4] < 0) {
          if (ball[0] * ball[0] + ball[2] * ball[2] < 0.273 * 0.273 ||
              ball[0] * ball[0] + (ball[2] + length) * (ball[2] + length) < 0.273 * 0.273) {
            hits += 1;
            ball[1] = -100;
          } else {
            misses += 1;
          }
          ball[6] = false;
        }
      }
      if (balls.length > 0 && balls[0][1] < 0) {
        ball = balls.shift();
      }
      var v = vec3.fromValues(Math.sin(time * 2), -1., Math.cos(time * 2));
      vec3.normalize(v, v);
      gl.uniform3fv(lightDirection, v);
      gl.uniform1i(gl.getUniformLocation(programInfo.program, "pov"), pov);
      drawScene(gl, programInfo, buffers, x, 0.0, z, theta, balls);
      scoreboard.innerHTML = "Hits: " + hits + "<br/>Misses: " + misses;

      if (visionLoaded) {
        var t0 = (new Date()).getTime();
        mockCanvas.getContext("2d").drawImage(gl.canvas, 0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        var imageData = mockCanvas.getContext("2d").getImageData(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        visionThread.postMessage([imageData, code.value, x]);
      }
    }, 10);
  };
}

function drawScene(gl, programInfo, buffers, x, y, z, theta, balls) {
  gl.clearColor(0., 0., 0., 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  const fov = 65.0 * Math.PI / 180.0;
  const aspect = gl.canvas.width / gl.canvas.height;
  const zNear = 0.01;
  const zFar = 100;
  var projection = mat4.create();
  mat4.perspective(projection, fov, aspect, zNear, zFar);
  var observer = mat4.create();
  if (pov) {
    mat4.rotate(observer, observer, -0.3, [1, 0, 0]);
    mat4.translate(observer, observer, [0, -0.6, -0.32]);
    mat4.rotate(observer, observer, -theta, [0, 1, 0]);
    mat4.translate(observer, observer, [-x, -y, -z]);
  } else {
    mat4.rotate(observer, observer, Math.atan2(x-width*2/3, -z+0.5), [0, 1, 0]);
    mat4.translate(observer, observer, [-width*2/3, -1.684, -0.5]);
  }
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, projection);
  gl.uniformMatrix4fv(programInfo.uniforms.observer, false, observer);
  drawModel(gl, programInfo, buffers.field, 0, 0, 0, 0);
  drawModel(gl, programInfo, buffers.boiler, 0, 0, 0, 0);
  drawModel(gl, programInfo, buffers.boiler, 0, 0, -length, -Math.PI/2);
  drawModel(gl, programInfo, buffers.robot, x, 0, z, theta);
  for (var ball of balls) {
    drawModel(gl, programInfo, buffers.ball, ball[0], ball[1], ball[2], 0);
  }
}

function initBufs(gl) {
  // Floor
  var points = {};
  for (var i = -1; i < width; i++) {
    for (var j = -1; j < length; j++) {
      pushQuad(points, [Math.max(i + (width - Math.floor(width)) / 2.0, 0.0), 0.0, -Math.max(j + (length - Math.floor(length)) / 2.0, 0.0)],
                       [Math.min(i + 1 + (width - Math.floor(width)) / 2.0, width), 0.0, -Math.max(j + (length - Math.floor(length)) / 2.0, 0.0)],
                       [Math.min(i + 1 + (width - Math.floor(width)) / 2.0, width), 0.0, -Math.min(j + 1 + (length - Math.floor(length)) / 2.0, length)],
                       [Math.max(i + (width - Math.floor(width)) / 2.0, 0.0), 0.0, -Math.min(j + 1 + (length - Math.floor(length)) / 2.0, length)],
                       (i + j) % 2 == 0 ? [0.5, 1., 0.5] : [0., 0.5, 0.]);
    }
  }
  const field = mkBufs(gl, points);

  // Ball
  points = {};
  pushSphere(points, [0., 0., 0.], 0.0635, [1., 1., 0.]);
  const ball = mkBufs(gl, points);

  // Boiler
  points = {};
  pushQuad(points, [0., 0., 0.754], [0.754, 0., 0.], [0.754, 1.359, 0.], [0., 1.359, 0.754], [0.54, 0.27, 0.07]);
  pushQuad(points, [-0.754, 0., 0.], [0., 0., 0.754], [0., 1.359, 0.754], [-0.754, 1.359, 0.], [0.54, 0.27, 0.07]);
  pushQuad(points, [0., 0., -0.754], [-0.754, 0., 0.], [-0.754, 1.359, 0.], [0., 1.359, -0.754], [0.54, 0.27, 0.07]);
  pushQuad(points, [0.754, 0., 0.], [0., 0., -0.754], [0., 1.359, -0.754], [0.754, 1.359, 0.], [0.54, 0.27, 0.07]);
  pushQuad(points, [0., 1.359, 0.754], [0.754, 1.359, 0.], [0.538, 1.667, 0.], [0., 1.816, 0.431], [0.54, 0.27, 0.07]);
  pushQuad(points, [-0.754, 1.359, 0.], [0., 1.359, 0.754], [0., 1.816, 0.431], [-0.431, 1.816, 0.], [0.54, 0.27, 0.07]);
  pushQuad(points, [0., 1.359, -0.754], [-0.754, 1.359, 0.], [-0.431, 1.816, 0.], [0., 1.667, -0.538], [0.54, 0.27, 0.07]);
  pushQuad(points, [0.754, 1.359, 0.], [0., 1.359, -0.754], [0., 1.667, -0.538], [0.538, 1.667, 0.], [0.54, 0.27, 0.07]);
  pushQuad(points, [0.538, 1.667, 0.], [0., 1.667, -0.538], [-0.431, 1.816, 0.], [0., 1.816, 0.431], [0.54, 0.27, 0.07]);
  pushQuad(points, [0.602, 0.457, -0.153], [0.153, 0.457, -0.602], [0.153, 0.679, -0.602], [0.602, 0.679, -0.153], [0., 0., 0.]);
  pushCone(points, [0., 2.464, 0.], 0.273, [0., 2.235, 0.], 0.191, [0.54, 0.27, 0.07]);
  pushCone(points, [0., 2.235, 0.], 0.191, [0., 2.134, 0.], 0.191, [1., 1., 1.]);
  pushCone(points, [0., 2.134, 0.], 0.191, [0., 2.032, 0.], 0.191, [0.54, 0.27, 0.07]);
  pushCone(points, [0., 2.032, 0.], 0.191, [0., 1.981, 0.], 0.191, [1., 1., 1.]);
  pushCone(points, [0., 1.981, 0.], 0.191, [0., 0., 0.], 0.191, [0.54, 0.27, 0.07]);
  const boiler = mkBufs(gl, points);

  // Robot
  points = {};
  pushQuad(points, [-0.457, 0.0, -0.508], [-0.457, 0.510, -0.508], [0.457, 0.510, -0.508], [0.457, 0.0, -0.508], [0.5, 0.5, 0.5]);
  pushQuad(points, [0.457, 0.0, -0.508], [0.457, 0.510, -0.508], [0.457, 0.510, 0.508], [0.457, 0.0, 0.508], [0.5, 0.5, 0.5]);
  pushQuad(points, [0.457, 0.0, 0.508], [0.457, 0.510, 0.508], [-0.457, 0.510, 0.508], [-0.457, 0.0, 0.508], [0.5, 0.5, 0.5]);
  pushQuad(points, [-0.457, 0.0, 0.508], [-0.457, 0.510, 0.508], [-0.457, 0.510, -0.508], [-0.457, 0.0, -0.508], [0.5, 0.5, 0.5]);
  pushQuad(points, [-0.521, 0.0, -0.572], [-0.521, 0.127, -0.572], [0.521, 0.127, -0.572], [0.521, 0.0, -0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [0.521, 0.0, -0.572], [0.521, 0.127, -0.572], [0.521, 0.127, 0.572], [0.521, 0.0, 0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [0.521, 0.0, 0.572], [0.521, 0.127, 0.572], [-0.521, 0.127, 0.572], [-0.521, 0.0, 0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [-0.521, 0.0, 0.572], [-0.521, 0.127, 0.572], [-0.521, 0.127, -0.572], [-0.521, 0.0, -0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [-0.521, 0.127, -0.572], [-0.457, 0.127, -0.508], [0.457, 0.127, -0.508], [0.521, 0.127, -0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [0.521, 0.127, -0.572], [0.457, 0.127, -0.508], [0.457, 0.127, 0.508], [0.521, 0.127, 0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [0.521, 0.127, 0.572], [0.457, 0.127, 0.508], [-0.457, 0.127, 0.508], [-0.521, 0.127, 0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [-0.521, 0.127, 0.572], [-0.457, 0.127, 0.508], [-0.457, 0.127, -0.508], [-0.521, 0.127, -0.572], [1.0, 0.0, 0.0]);
  pushQuad(points, [-0.1, 0.510, 0.358], [-0.1, 0.610, 0.458], [0.1, 0.610, 0.458], [0.1, 0.510, 0.358], [0.0, 1.0, 0.0]);
  pushQuad(points, [0.1, 0.510, 0.508], [0.1, 0.560, 0.508], [-0.1, 0.560, 0.508], [-0.1, 0.510, 0.508], [0.5, 0.5, 0.5]);
  pushQuad(points, [0.1, 0.560, 0.508], [0.1, 0.610, 0.458], [-0.1, 0.610, 0.458], [-0.1, 0.560, 0.508], [0.5, 0.5, 0.5]);
  pushQuad(points, [-0.1, 0.510, 0.358], [-0.1, 0.610, 0.458], [-0.1, 0.560, 0.508], [-0.1, 0.510, 0.508], [0.5, 0.5, 0.5]);
  pushQuad(points, [0.1, 0.510, 0.358], [0.1, 0.510, 0.508], [0.1, 0.560, 0.508], [0.1, 0.610, 0.458], [0.5, 0.5, 0.5]);
  pushQuad(points, [-0.457, 0.510, -0.508], [-0.457, 0.510, 0.508], [0.457, 0.510, 0.508], [0.457, 0.510, -0.508], [0.6, 0.6, 0.0]);
  const robot = mkBufs(gl, points);

  return {
    field: field,
    ball: ball,
    boiler: boiler,
    robot: robot
  };
}

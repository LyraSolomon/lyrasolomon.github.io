const width = 8.23;
const length = 16.56;

var forward = false;
var backward = false;
var left = false;
var right = false;

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

function mkBasketBot(id) {
  setupGl(id, "/assets/vision/vertex.c", "/assets/vision/fragment.c", runAnimation);
}

function runAnimation(gl, programInfo) {
  var lightDirection = gl.getUniformLocation(programInfo.program, "lightDirection");
  buffers = initBuffers(gl);
  var time = 0;
  var x = width / 2;
  var z = -length / 2;
  var theta = 0;
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
    gl.useProgram(programInfo.program);
    var v = vec3.fromValues(Math.sin(time * 2), -1., Math.cos(time * 2));
    vec3.normalize(v, v);
    gl.uniform3fv(lightDirection, v);
    drawScene(gl, programInfo, buffers, x, 0.7, z, theta, 0.3);
  }, 10);
}

function drawScene(gl, programInfo, buffers, x, y, z, theta, pitch) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  //gl.disable(gl.DEPTH_TEST);
  //gl.disable(gl.CULL_FACE);
  //gl.enable(gl.BLEND);
  //gl.blendFunc(gl.ONE, gl.ONE);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  const fov = 65.0 * Math.PI / 180.0;
  const aspect = gl.canvas.width / gl.canvas.height;
  const zNear = 0.01;
  const zFar = 100;
  const projection = mat4.create();
  mat4.perspective(projection, fov, aspect, zNear, zFar);
  const observer = mat4.create();
  mat4.rotate(observer, observer, -pitch, [1, 0, 0]);
  mat4.rotate(observer, observer, -theta, [0, 1, 0]);
  mat4.translate(observer, observer, [-x, -y, -z]);
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, projection);
  gl.uniformMatrix4fv(programInfo.uniforms.observer, false, observer);
  drawModel(gl, programInfo, buffers.field, 0, 0, 0);
  drawModel(gl, programInfo, buffers.boiler, 0, 0, 0);
  drawModel(gl, programInfo, buffers.boiler, 0, -length, -Math.PI/2);
}

function initBuffers(gl) {
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
  //pushQuad(points, [0.602, 0.457, -0.153], [0.153, 0.457, -0.602], [0.153, 0.679, -0.602], [0.602, 0.679, -0.153], [0., 0., 0.]);
  pushCone(points, [0., 2.464, 0.], 0.273, [0., 2.235, 0.], 0.191, [0.54, 0.27, 0.07]);
  pushCone(points, [0., 2.235, 0.], 0.191, [0., 2.134, 0.], 0.191, [1., 1., 1.]);
  pushCone(points, [0., 2.134, 0.], 0.191, [0., 2.032, 0.], 0.191, [0.54, 0.27, 0.07]);
  pushCone(points, [0., 2.032, 0.], 0.191, [0., 1.981, 0.], 0.191, [1., 1., 1.]);
  pushCone(points, [0., 1.981, 0.], 0.191, [0., 0., 0.], 0.191, [0.54, 0.27, 0.07]);
  const boiler = mkBufs(gl, points);
  return {
    field: field,
    boiler: boiler
  };
}

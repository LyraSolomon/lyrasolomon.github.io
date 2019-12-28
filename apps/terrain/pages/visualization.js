var plots = {};

function mkVisualization(id, mode) {
  if (mode == "vertex") {
    setupGl(id, "${include(url)}/visualization-vertex.c", "${include(url)}/visualization-fragment.c", runVisualization);
    return;
  }
  plots[id] = function() {
    var gain = 0.;
    var exp = 1.;
    switch (mode) {
      case "gain":
        gain = document.getElementById("gain-wave-0").valueAsNumber;
        break;
      case "exp":
        exp = document.getElementById("exp-wave-0").valueAsNumber;
        break;
      case "gain+exp":
        gain = document.getElementById("gain-wave-1").valueAsNumber;
        exp = document.getElementById("exp-wave-1").valueAsNumber;
        break;
    }
    const ctx = document.getElementById(id).getContext("2d");
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0., (0.99 - 0.98 * Math.pow(0.5, exp)) * height);
    for (var i = 1; i <= width; i++) {
      var y = 0.;
      var amp = 1.;
      var freq = 1.;
      for (var j = 0; j < 20; j++) {
        y += amp * Math.sin(i * freq / width * Math.PI * 2.);
        freq *= 2;
        amp *= gain;
      }
      y *= (1 - gain * .6);
      y = Math.pow(0.5 * y + 0.5, exp) * 2. - 1.;
      ctx.lineTo(i, (0.5 - 0.49 * y) * height);
    }
    ctx.stroke();
  }
  plots[id]();
}

function runVisualization(gl, shader) {
  var points = {};
  for (var i = -10; i < 10; i++) {
    for (var j = -10; j < 10; j++) {
      pushQuad(points, [i/10., 0., j/10.], [i/10., 0., (j+1)/10], [(i+1)/10., 0., (j+1)/10.], [(i+1)/10., 0., j/10.], [0., 0., 0.]);
    }
  }
  const bufs = mkBufs(gl, points);
  var time = 0;
  var update = function() {
    var grad;
    switch(time) {
      case 0:
        grad = [1., 1.];
        time = 1;
        break;
      case 1:
        grad = [-1., 1.];
        time = 2;
        break;
      case 2:
        grad = [-1., -1.];
        time = 3;
        break;
      case 3:
        grad = [1., -1.];
        time = 0;
        break;
    }
    gl.useProgram(shader.program);
    gl.uniform2fv(gl.getUniformLocation(shader.program, "grad"), grad);
    gl.clearColor(1., 1., 1., 0.);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    const aspect = gl.canvas.width / gl.canvas.height;
    const zNear = 0.01;
    const zFar = 10;
    const fov = 25.0 * Math.PI / 180.0;
    var projection = mat4.create();
    mat4.perspective(projection, fov, aspect, zNear, zFar);
    var observer = mat4.create();
    mat4.rotate(observer, observer, 17 * Math.PI / 180., [1, 0, 0]);
    mat4.translate(observer, observer, [0, -1, -2]);
    gl.useProgram(shader.program);
    gl.uniformMatrix4fv(shader.uniforms.projection, false, projection);
    gl.uniformMatrix4fv(shader.uniforms.observer, false, observer);
    drawModel(gl, shader, bufs, 0, 0, 0, 0);
  }
  update();
  setInterval(update, 1500);
}

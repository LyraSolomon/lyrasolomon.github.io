var update;
const fov = 65.0 * Math.PI / 180.0;
const range = 8.;
const steps = 400;

function mkTerrain(id) {
  var urlGet = {};
  if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
        .toString()
        .replace(/^.*?\?/, '')
        .replace(/#.*$/, '')
        .split('&');

    for(var i=0, l=query.length; i<l; i++) {
      var aux = decodeURIComponent(query[i]).split('=');
      urlGet[aux[0]] = aux[1];
    }
  }
  for (var i in urlGet) {
    if (document.getElementById(i) == null) {
      console.warn("Unknown key", i);
    } else {
      document.getElementById(i).value = urlGet[i];
    }
  }
  setupGl(id, "/assets/terrain/terrain-vertex.c", "/assets/terrain/terrain-fragment.c", drawTerrain);
}

function drawTerrain(gl, shader) {
  var permutation = [];
  for (var i = 0; i < 256; i++) {
    permutation.push(i);
  }
  shuffle(permutation);
  permutation = permutation.concat(permutation);
  const bufs = initBufs(gl);
  gl.useProgram(shader.program);
  gl.uniform1iv(gl.getUniformLocation(shader.program, "p"), permutation);
  const season = Math.random() - 0.5;
  update = function() {
    var v = vec3.fromValues(Math.sin(document.getElementById("time").valueAsNumber * Math.PI * 2. / 24.),
                            Math.cos(document.getElementById("time").valueAsNumber * Math.PI * 2. / 24.), season);
    vec3.normalize(v, v);
    gl.uniform3fv(gl.getUniformLocation(shader.program, "lightDirection"), v);
    gl.uniform1f(gl.getUniformLocation(shader.program, "gainGround"), document.getElementById("gain-ground").valueAsNumber);
    gl.uniform1f(gl.getUniformLocation(shader.program, "gainSky"), document.getElementById("gain-sky").valueAsNumber);
    gl.uniform1f(gl.getUniformLocation(shader.program, "ampGround"), document.getElementById("amp-ground").valueAsNumber);
    gl.uniform1f(gl.getUniformLocation(shader.program, "expSky"), document.getElementById("exp-sky").valueAsNumber);
    gl.uniform1f(gl.getUniformLocation(shader.program, "expStars"), document.getElementById("exp-stars").valueAsNumber);
    drawScene(gl, shader, bufs);
  };
  update();
}

function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0., 0., 0., 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  const aspect = gl.canvas.width / gl.canvas.height;
  const zNear = 0.01;
  const zFar = 100;
  var projection = mat4.create();
  mat4.perspective(projection, fov, aspect, zNear, zFar);
  var observer = mat4.create();
  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, projection);
  gl.uniformMatrix4fv(programInfo.uniforms.observer, false, observer);
  drawModel(gl, programInfo, buffers.ground, 0, 0, 0, 0);
  drawModel(gl, programInfo, buffers.sky, 0, 0, 0, 0);
}

function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

function initBufs(gl) {
  var points = {};
  const istep = Math.atan(range)/steps;
  const jstep = fov*1.4/steps;
  for (var i = 0; i < Math.atan(range); i += istep) {
    for (var j = -fov/1.4; j < fov/1.4; j += jstep) {
      pushQuad(points, [Math.tan(i)*Math.sin(j), 0., -Math.tan(i)*Math.cos(j)],
                       [Math.tan(i)*Math.sin(j+jstep), 0., -Math.tan(i)*Math.cos(j+jstep)],
                       [Math.tan(i+istep)*Math.sin(j+jstep), 0., -Math.tan(i+istep)*Math.cos(j+jstep)],
                       [Math.tan(i+istep)*Math.sin(j), 0., -Math.tan(i+istep)*Math.cos(j)],
                       [1., 1., 1.]);
    }
  }
  const ground = mkBufs(gl, points);
  points = {};
  pushQuad(points, [-100, 1., 0.],
                   [100, 1., 0.],
                   [100, -10., -100],
                   [-100, -10., -100],
                   [0., 0., 0.]);
  pushQuad(points, [-100, 1., -50.],
                   [100, 1., -50.],
                   [100, -50., -100],
                   [-100, -50., -100],
                   [0., 0., 0.]);
  const sky = mkBufs(gl, points);
  return { ground: ground, sky: sky };
}

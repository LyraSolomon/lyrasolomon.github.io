var hasWarnedNoGl = false;

function setupGl(canvasId, vertexName, fragmentName, continuation) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error("No HTML element has id " + id);
    return;
  }
  const gl = canvas.getContext("webgl");
  if (!gl) {
    if (!hasWarnedNoGl) {
      hasWarnedNoGl = true;
      alert("WebGL is not available on your device");
    }
    console.error("Either the element with id " + id + " is not a canvas or webgl is not supported");
    return;
  }

  fetch(vertexName).then(function(response) {
    return response.text();
  }).then(function(vertexSrc) {
    fetch(fragmentName).then(function(response) {
      return response.text();
    }).then(function(fragmentSrc) {
      const shader = initShaderProgram(gl, vertexSrc, fragmentSrc);
      const programInfo = {
        program: shader,
        attribs: {
          position: gl.getAttribLocation(shader, "vertexPosition"),
          color: gl.getAttribLocation(shader, "vertexColor"),
          normal: gl.getAttribLocation(shader, "vertexNormal"),
        },
        uniforms: {
          projection: gl.getUniformLocation(shader, "projection"),
          modelView: gl.getUniformLocation(shader, "modelView"),
          observer: gl.getUniformLocation(shader, "observer"),
        }
      };
      continuation(gl, programInfo);
    });
  });
}

function drawModel(gl, programInfo, model, x, y, z, theta) {
  const modelView = mat4.create();
  mat4.translate(modelView, modelView, [x, y, z]);
  mat4.rotate(modelView, modelView, theta, [0, 1, 0]);
  gl.uniformMatrix4fv(programInfo.uniforms.modelView, false, modelView);
  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, model.position);
    gl.vertexAttribPointer(programInfo.attribs.position, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribs.position);
  }
  if (programInfo.attribs.color != -1) {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, model.color);
    gl.vertexAttribPointer(programInfo.attribs.color, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribs.color);
  }
  if (programInfo.attribs.normal != -1) {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, model.normal);
    gl.vertexAttribPointer(programInfo.attribs.normal, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribs.normal);
  }
  {
    const offset = 0;
    gl.drawArrays(gl.TRIANGLES, offset, model.nVertices);
  }
}

function initShaderProgram(gl, vertexSrc, fragmentSrc) {
  const vertex = loadShader(gl, gl.VERTEX_SHADER, vertexSrc);
  const fragment = loadShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertex);
  gl.attachShader(shaderProgram, fragment);
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error("Shader link error: " + gl.getProgramInfoLog(shaderProgram));
    return null;
  }
  return shaderProgram;
}

function loadShader(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error: " + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function mkBufs(gl, points) {
  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points.positions), gl.STATIC_DRAW);
  const colorBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points.colors), gl.STATIC_DRAW);
  const normBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points.normals), gl.STATIC_DRAW);
  return {
    position: posBuf,
    color: colorBuf,
    normal: normBuf,
    nVertices: points.positions.length / 3
  };
}

function pushQuad(points, p1, p2, p3, p4, c) {
  if (points.positions == undefined) {
    points.positions = [];
    points.colors = [];
    points.normals = [];
  }
  points.positions.push(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2], p3[0], p3[1], p3[2], p1[0], p1[1], p1[2], p3[0], p3[1], p3[2], p4[0], p4[1], p4[2]);
  var v1 = vec3.fromValues(p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]);
  var v2 = vec3.fromValues(p3[0] - p2[0], p3[1] - p2[1], p3[2] - p2[2]);
  var norm = vec3.create();
  vec3.cross(norm, v1, v2);
  vec3.normalize(norm, norm);
  for (var i = 0; i < 6; i++) {
    points.colors.push(c[0], c[1], c[2], 1.);
    points.normals.push(norm[0], norm[1], norm[2]);
  }
}

function pushCone(points, p1, r1, p2, r2, c) {
  if (points.positions == undefined) {
    points.positions = [];
    points.colors = [];
    points.normals = [];
  }
  var axis = vec3.fromValues(p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]);
  vec3.normalize(axis, axis);
  var basis1 = vec3.create();
  while (vec3.length(basis1) < 0.2) {
    vec3.random(basis1);
    vec3.cross(basis1, axis, basis1);
  }
  vec3.normalize(basis1, basis1);
  var basis2 = vec3.create();
  vec3.cross(basis2, axis, basis1);
  for (var i = 0; i <= 2 * Math.PI; i += 0.2) {
    var cross_perp = vec3.create();
    cross_perp[0] = Math.cos(i + Math.PI / 2) * basis1[0] + Math.sin(i + Math.PI / 2) * basis2[0];
    cross_perp[1] = Math.cos(i + Math.PI / 2) * basis1[1] + Math.sin(i + Math.PI / 2) * basis2[1];
    cross_perp[2] = Math.cos(i + Math.PI / 2) * basis1[2] + Math.sin(i + Math.PI / 2) * basis2[2];

    var cross_perp_next = vec3.create();
    cross_perp_next[0] = Math.cos(i + 0.2 + Math.PI / 2) * basis1[0] + Math.sin(i + 0.2 + Math.PI / 2) * basis2[0];
    cross_perp_next[1] = Math.cos(i + 0.2 + Math.PI / 2) * basis1[1] + Math.sin(i + 0.2 + Math.PI / 2) * basis2[1];
    cross_perp_next[2] = Math.cos(i + 0.2 + Math.PI / 2) * basis1[2] + Math.sin(i + 0.2 + Math.PI / 2) * basis2[2];

    var floor = vec3.create();
    floor[0] = (Math.cos(i) * basis1[0] + Math.sin(i) * basis2[0]) * r1 + p1[0];
    floor[1] = (Math.cos(i) * basis1[1] + Math.sin(i) * basis2[1]) * r1 + p1[1];
    floor[2] = (Math.cos(i) * basis1[2] + Math.sin(i) * basis2[2]) * r1 + p1[2];

    var floor_next = vec3.create();
    floor_next[0] = (Math.cos(i + 0.2) * basis1[0] + Math.sin(i + 0.2) * basis2[0]) * r1 + p1[0];
    floor_next[1] = (Math.cos(i + 0.2) * basis1[1] + Math.sin(i + 0.2) * basis2[1]) * r1 + p1[1];
    floor_next[2] = (Math.cos(i + 0.2) * basis1[2] + Math.sin(i + 0.2) * basis2[2]) * r1 + p1[2];

    var ceil = vec3.create();
    ceil[0] = (Math.cos(i) * basis1[0] + Math.sin(i) * basis2[0]) * r2 + p2[0];
    ceil[1] = (Math.cos(i) * basis1[1] + Math.sin(i) * basis2[1]) * r2 + p2[1];
    ceil[2] = (Math.cos(i) * basis1[2] + Math.sin(i) * basis2[2]) * r2 + p2[2];

    var ceil_next = vec3.create();
    ceil_next[0] = (Math.cos(i + 0.2) * basis1[0] + Math.sin(i + 0.2) * basis2[0]) * r2 + p2[0];
    ceil_next[1] = (Math.cos(i + 0.2) * basis1[1] + Math.sin(i + 0.2) * basis2[1]) * r2 + p2[1];
    ceil_next[2] = (Math.cos(i + 0.2) * basis1[2] + Math.sin(i + 0.2) * basis2[2]) * r2 + p2[2];

    var slant = vec3.create();
    vec3.sub(slant, ceil, floor);
    var slant_next = vec3.create();
    vec3.sub(slant_next, ceil_next, floor_next);

    var norm = vec3.create();
    vec3.cross(norm, cross_perp, slant);
    vec3.normalize(norm, norm);
    var norm_next = vec3.create();
    vec3.cross(norm_next, cross_perp_next, slant_next);
    vec3.normalize(norm_next, norm_next);

    points.positions.push(floor[0], floor[1], floor[2]);
    points.normals.push(norm[0], norm[1], norm[2]);
    points.positions.push(floor_next[0], floor_next[1], floor_next[2]);
    points.normals.push(norm_next[0], norm_next[1], norm_next[2]);
    points.positions.push(ceil_next[0], ceil_next[1], ceil_next[2]);
    points.normals.push(norm_next[0], norm_next[1], norm_next[2]);

    points.positions.push(floor[0], floor[1], floor[2]);
    points.normals.push(norm[0], norm[1], norm[2]);
    points.positions.push(ceil[0], ceil[1], ceil[2]);
    points.normals.push(norm_next[0], norm_next[1], norm_next[2]);
    points.positions.push(ceil_next[0], ceil_next[1], ceil_next[2]);
    points.normals.push(norm[0], norm[1], norm[2]);

    for (var j = 0; j < 6; j++) {
      points.colors.push(c[0], c[1], c[2], 1.);
    }
  }
}

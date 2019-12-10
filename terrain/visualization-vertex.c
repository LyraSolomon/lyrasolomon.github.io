precision lowp float;

attribute vec4 vertexPosition;

uniform mat4 modelView;
uniform mat4 projection;
uniform mat4 observer;
uniform vec2 grad;

varying vec4 passPosition;

float fade(float x) {
  return x * x * x * (x * (x * 6. - 15.) + 10.);
}

float perlin2vert(vec2 a) {
  return mix(mix(dot(a, grad), 0., fade(abs(a.x))), 0., fade(abs(a.y))) * .5 + .5;
}

void main(void) {
  passPosition = vertexPosition;
  passPosition.y += perlin2vert(passPosition.xz);
  gl_Position = projection * observer * modelView * passPosition;
}

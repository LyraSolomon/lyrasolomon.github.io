#version 300 es
precision lowp float;
precision lowp int;

in vec4 vertexPosition;
in vec4 vertexColor;
in vec3 vertexNormal;

uniform mat4 modelView;
uniform mat4 projection;
uniform mat4 observer;

out lowp vec4 passPosition;
out lowp vec4 passEye;
out lowp float passGround;

uniform int p[512];
uniform float gainGround;
uniform float ampGround;

float fade(float x) {
  return x * x * x * (x * (x * 6. - 15.) + 10.);
}

float grad2(int hash, float x, float y) {
  switch (hash & 3) {
    case  0: return  x + y;
    case  1: return -x + y;
    case  2: return  x - y;
    case  3: return -x - y;
  }
  return 0.;
}

float perlin2(vec2 a) {
  int xi = int(floor(a.x)) & 255;
  int yi = int(floor(a.y)) & 255;
  vec2 f = a - floor(a);
  float u = fade(f.x);
  float v = fade(f.y);
  return mix(mix(grad2(p[p[xi  ]+yi  ], f.x   , f.y   ),
                 grad2(p[p[xi+1]+yi  ], f.x-1., f.y   ), u),
             mix(grad2(p[p[xi  ]+yi+1], f.x   , f.y-1.),
                 grad2(p[p[xi+1]+yi+1], f.x-1., f.y-1.), u), v) * 0.5 + 0.5;
}

float perlin8va2(vec2 a, float gain) {
  float retval = 0.;
  float amp = 1.;
  float freq = 1.;
  for (int i = 0; i < 15; i++) {
    retval += amp * perlin2(a * freq);
    freq *= 2.;
    amp *= gain;
  }
  return retval;
}

void main(void) {
  passPosition = modelView * vertexPosition;
  if (vertexColor.r > .5) {
    passPosition.y += perlin8va2(passPosition.xz, gainGround) * ampGround / .85 * (1. - gainGround * .8) - ampGround;
  }
  passEye = observer * passPosition;
  gl_Position = projection * passEye;
  passGround = vertexColor.r;
}

precision lowp float;
precision lowp int;

attribute vec4 vertexPosition;
attribute vec4 vertexColor;
attribute vec3 vertexNormal;

uniform mat4 modelView;
uniform mat4 projection;
uniform mat4 observer;

varying lowp vec4 passPosition;
varying lowp vec4 passEye;
varying lowp float passGround;

uniform float gainGround;
uniform float ampGround;
uniform float seed;

float fade(float x) {
  return x * x * x * (x * (x * 6. - 15.) + 10.);
}

float grad2(float xi, float yi, float xf, float yf) {
  float retval = 0.;
  if (fract(sin(fract(sin(xi)*seed)+yi)*seed) > .5) {
    retval += xf;
  } else {
    retval -= xf;
  }
  if (fract(sin(fract(sin(yi)*seed)+xi)*seed) > .5) {
    retval += yf;
  } else {
    retval -= yf;
  }
  return retval;
}

float perlin2(vec2 a) {
  vec2 i = floor(a);
  vec2 f = a - i;
  float u = fade(f.x);
  float v = fade(f.y);
  return mix(mix(grad2(i.x   , i.y   , f.x   , f.y   ),
                 grad2(i.x+1., i.y   , f.x-1., f.y   ), u),
             mix(grad2(i.x   , i.y+1., f.x   , f.y-1.),
                 grad2(i.x+1., i.y+1., f.x-1., f.y-1.), u), v) * 0.5 + 0.5;
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

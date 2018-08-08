#version 300 es
precision lowp float;
precision lowp int;

in lowp vec4 passPosition;
in lowp vec4 passEye;
in lowp float passGround;
out vec4 fragColor;

uniform int p[512];
uniform float gainGround;
uniform float gainSky;
uniform float expSky;
uniform float expStars;
uniform float ampGround;
uniform vec3 lightDirection;

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

vec3 dperlin2(vec2 a) {
  float orig = perlin2(a);
  float x = perlin2(a+vec2(0.01, 0.));
  float y = perlin2(a+vec2(0., 0.01));
  return vec3(orig, (x - orig) * 100., (y - orig) * 100.);
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

vec3 dperlin8va2(vec2 a, float gain) {
  float orig = perlin8va2(a, gain);
  float x = perlin8va2(a+vec2(0.01, 0.), gain);
  float y = perlin8va2(a+vec2(0., 0.01), gain);
  return vec3(orig, (x - orig) * 100., (y - orig) * 100.);
}

void main() {
  float distance = sqrt(dot(passEye.xyz, passEye.xyz));
  vec3 lightColor = max(vec3(-lightDirection.y*.6+.4, -lightDirection.y*.8+.2, -lightDirection.y), 0.);
  vec3 skyColor = max(vec3(-lightDirection.y*.3+.2, -lightDirection.y*.4+.1, -lightDirection.y*.8), 0.) + vec3(0., 0., -lightDirection.y*.1+.15);
  if (passGround > 0.5) {
    vec3 noise = dperlin8va2(passPosition.xz, gainGround) * ampGround / .85 * (1. - gainGround * .8);
    vec3 normal = normalize(vec3(-noise.y, 1., -noise.z));
    float lighting = max(dot(-lightDirection, normal), 0.) + 0.2;
    vec3 color = mix(vec3(0.7), vec3(0., 0.7, 0.), max(min(normal.y * 1.2 - noise.x * .8, 1.), 0.));
    fragColor = vec4(mix(skyColor, color * lighting * lightColor, 1. - distance / 9.), 1.);
  } else {
    float cloud = perlin8va2(passPosition.xz, gainSky) / 2. * (1. - gainSky * .8);
    cloud = pow(cloud, expSky) * 2.0;
    vec3 color;
    if (cloud > 1.) {
      cloud -= 1.;
      color = mix(vec3(.9, .9, .9), vec3(.4, .4, .4), min(cloud, 1.)) * lightColor;
    } else {
      float star = max(pow(perlin2(passPosition.xz * 100.), exp(expStars)) - dot(skyColor, vec3(1.)) - .3, 0.);
      color = mix(skyColor + vec3(star), vec3(.9, .9, .9) * lightColor, cloud);
    }
    fragColor = vec4(mix(skyColor, color, max((passPosition.y + 0.5) * .5, 0.)), 1.);
  }
}

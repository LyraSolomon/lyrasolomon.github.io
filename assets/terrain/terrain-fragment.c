precision lowp float;
precision lowp int;

varying lowp vec4 passPosition;
varying lowp vec4 passEye;
varying lowp float passGround;

uniform float gainGround;
uniform float gainSky;
uniform float expSky;
uniform float expStars;
uniform float ampGround;
uniform float seed;
uniform vec3 lightDirection;

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
  for (int i = 0; i < 10; i++) {
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
    gl_FragColor = vec4(mix(skyColor, color * lighting * lightColor, 1. - distance / 9.), 1.);
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
    gl_FragColor = vec4(mix(skyColor, color, max((passPosition.y + 0.5) * .5, 0.)), 1.);
  }
}

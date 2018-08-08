precision lowp float;

varying vec4 passPosition;

float fmod(float a, float b) {
  return a - b * floor(a / b);
}

void main() {
  if (fmod(passPosition.x, .1) < .005 ||
             fmod(passPosition.x, .1) > .095 ||
             fmod(passPosition.z, .1) < .005 ||
             fmod(passPosition.z, .1) > .095) {
    if (passPosition.x < .005 && passPosition.x > -.005 ||
        passPosition.z < .005 && passPosition.z > -.005) {
      gl_FragColor = vec4(1., 0., 0., 1.);
    } else {
      gl_FragColor = vec4(0., 0., 0., 1.);
    }
  } else {
    gl_FragColor = vec4(vec3(passPosition.y), 1.);
  }
}

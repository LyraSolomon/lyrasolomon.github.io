precision lowp float;

varying lowp vec4 passColor;
varying lowp vec4 passNormalEye;
varying lowp vec4 passEye;
varying lowp vec3 passDiffuse;

uniform int pov;

void main(void) {
  if (dot(passColor.xz, vec2(1., 1.)) < 0.1 && passColor.y > 0.9) {
    gl_FragColor = vec4(0.3, 1., 0.3, passColor.w);
  } else if (pov == 0) {
    gl_FragColor = vec4(passDiffuse * passColor.xyz, passColor.w);
  } else {
    lowp float SE;
    vec3 headLight;
    if (dot(passColor, vec4(1., 1., 1., 1.)) > 3.9) {
      SE = 1.;
      headLight = vec3(30., 120., 30.);
    } else {
      SE = 100.;
      headLight = vec3(30., 120., 30.);
    }
    lowp float directional = max(dot(passNormalEye.xyz, -normalize(passEye.xyz)), 0.);
    lowp float distSq = dot(passEye, passEye);
    vec3 lighting = passDiffuse + headLight * exp2(log2(directional) * SE) / distSq;
    lighting /= 3.0;
    gl_FragColor = vec4(passColor.xyz * lighting, passColor.w);
  }
}

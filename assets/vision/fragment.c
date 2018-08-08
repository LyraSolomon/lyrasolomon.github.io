precision lowp float;

varying lowp vec4 passColor;
varying lowp vec4 passNormalEye;
varying lowp vec4 passEye;
varying lowp vec3 passDiffuse;

void main(void) {
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
  vec3 lighting = (passDiffuse + headLight * exp2(log2(directional) * SE) / distSq) / 10.;
  gl_FragColor = vec4(passColor.xyz * lighting, passColor.w);
  //gl_FragColor = vec4(vec3(1./distSq), 1.);
  //gl_FragColor = vec4(-normalize(passEye.xyz), 1.);
}

precision lowp float;

attribute vec4 vertexPosition;
attribute vec4 vertexColor;
attribute vec3 vertexNormal;

uniform mat4 modelView;
uniform mat4 projection;
uniform mat4 observer;
uniform vec3 lightDirection;

varying lowp vec4 passColor;
varying lowp vec4 passNormalEye;
varying lowp vec4 passEye;
varying lowp vec3 passDiffuse;

void main(void) {
  gl_Position = projection * observer * modelView * vertexPosition;
  vec3 directionalLightColor = vec3(1.);
  vec3 lightDirection = normalize(lightDirection);
  vec4 transformedNormal = /* TODO normal matrix */ modelView * vec4(vertexNormal, 0.);
  lowp float directional = max(dot(transformedNormal.xyz, -lightDirection), 0.);
  passColor = vertexColor;
  passNormalEye = observer * transformedNormal;
  passEye = observer * modelView * vertexPosition;
  vec3 ambientLight = vec3(0.3);
  passDiffuse = ambientLight + directionalLightColor * directional;
}

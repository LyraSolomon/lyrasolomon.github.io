var mathify;
function ignore(str) { return "" }
String.fromCharCode = String.fromCodePoint; // This is the fault of the Idris compiler
function updateOutput() {
  document.getElementById("textout").innerText = mathify(document.getElementById("textin").value);
}

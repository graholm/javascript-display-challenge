conso

function logArgs(args) {
  var args = 1
  console.log(args)
}

var functionString = logArgs.toString()
var consoleLogExample = $("#console-log-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)

function myfunction(a, b) {
  return a * b;
}
myfunction(4, 3);
var call = "12"
var functionString = myfunction.toString() + call
var functionExample = $("#function-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
functionExample.html(formattedExample)





function perimeter(length, width) {
  console.log(length + length + width + width);
};


function whatsup(args) {
  var args = 1
  console.log(args)
};


var functionString = whatsup.toString()
var consoleLogExample = $("#function-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)
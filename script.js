function logArgs(args) {
  var args = 1
  console.log(args)
}

var functionString = logArgs.toString()
var consoleLogExample = $("#console-log-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)





function perimeter(length, width) {
  console.log(length + length + width + width);
};
var call = "\nperimeter(3,5)"
var functionString = perimeter.toString() + call
var consoleLogExample = $("#function-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)
function whats up(args) {
  var args = 1
  console.log(args)
}

var functionString = logArgs.toString()
var consoleLogExample = $("#console-log-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)
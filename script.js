function logArgs(args) {
  var args = 1
  console.log(args)
}

var iwanttologthis = 20
console.log ("this is what i am console logging")
console.log (iwanttologthis)

var functionString = logArgs.toString()


var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)

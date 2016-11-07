function logArgs(args) {
  var args = 1
  console.log(args)
}

function console() {
var i_am_also_going_to_log_this_in_my_console = 20
console.log ("this is what i am console logging")
console.log (i_am_also_going_to_log_this_in_my_console)
}

var functionString = logArgs.toString()
var consolelogString = console.toString()

var consoleLogExample = $("#functionexample")
var formattedExample = $("<pre>")
var consolelogexample = $ ("#console-log-example")

formattedExample.text(functionString)

consolelogexample.text(consolelogString)
consoleLogExample.html(formattedExample)

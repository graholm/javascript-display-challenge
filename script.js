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

formattedExample.text("jjh")
formattedExample.text(consolelogString)
consoleLogExample.html(formattedExample)

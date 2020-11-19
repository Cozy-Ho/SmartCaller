var app = require("../app")

var start = false
function sendMessage(text){
    command = text.replace(/(\s*)/g,"");
    if(command =="스마트켈러" || command == "스마트캘러")
        start= true
    if(start)
    app.Message(text)
}
module.exports = {
    sendMessage,

  }
  
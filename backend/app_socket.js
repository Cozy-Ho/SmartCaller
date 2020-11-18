var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


const cors = require('cors');
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true
}
app.use(cors)

 //setting cors
// app.all('/*', function(req, res, next) {
//       res.header("Access-Control-Allow-Origin ", " * ");
//       res.header( "X-Requested-With"); 
//       next();
// });

app.get('/', function(req, res) {
    //res.json({"s":"s"})
    console.log('Connect from Client')
    res.sendFile('Hellow Chating App Server');
});

 //connection event handler
io.on('connection' , function(socket) {
    console.log('Connect from Client: '+socket)

    socket.on('chat', function(data){
        console.log('message from Client: '+data.message) 
    }); 
    socket.emit('chat', rtnMessage); 
}) 

server.listen(3001, function() { 
    console.log('socket io server listening on port 3001') 
})


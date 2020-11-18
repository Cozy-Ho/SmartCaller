//const { send } = require('process');
const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , sequelize = require('./models/index').sequelize
  , server = require('http').createServer(app)
  , io = require('socket.io')(server)
  , cors = require('cors');
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

//sync()를 통해서 서버를 실행할 때 sequelize가 mysql을 연결
sequelize.sync();
//라우팅 모듈 선언
app.use('/', require('./routes/index'));
//app.use('/', require('./src/STT'));
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

const corsOptions = {
origin: "http://localhost:"+PORT,
credentials: true
}

app.use(cors(corsOptions));
app.get('/', function (req, res) { 
  res.sendFile('App Server'); 
});

function Message(text){
  io.sockets.emit('chat',{ message: text })
}

//connection event handler
io.on('connection', function (socket) {
  console.log('Connect from Client: ' + socket);

  socket.on('chat', function (data) {
      console.log('message from Client: ' + data.message); 
      var rtnMessage = { message: data.message };
      // 클라이언트에게 메시지를 전송한다
      //socket.broadcast.emit('chat', rtnMessage);
  });
  //socket_ =socket
  Message("test")
  //var text = "test"
  //socket.emit('chat', { message: text });
});


server.listen(PORT, () => {
    console.log('Express server listening on port '+PORT);
});
module.exports = {
  Message,
}

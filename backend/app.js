const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  sequelize = require("./models/index").sequelize,
  server = require("http").createServer(app),
  io = require("socket.io")(server),
  cors = require("cors"),
  PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use(require('connect-history-api-fallback')());

//sync()를 통해서 sequelize-mysql connection
sequelize.sync();

//routing
app.use("/", require("./routes/index"));
//app.use('/', require('./src/STT'));


//CORS setting
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
const corsOptions = {
  origin: "http://localhost:" + PORT,
  credentials: true,
};
app.use(cors(corsOptions));


// app.get("/", function (req, res) {
//   res.send("App Server");
// });

//connection event handler
function Message(text) {
  console.log(text)
  io.sockets.emit("chat", { message: text });
}

//socket connection
io.on("connection", function (socket) {
  console.log("Connect from Client: " + socket);
});

//start server
server.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});

module.exports = {
  Message,
};

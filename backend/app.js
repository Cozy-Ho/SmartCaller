var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , sequelize = require('./models/index').sequelize;
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

app.use(require('connect-history-api-fallback')());

app.use(express.static(path.join(__dirname,'public')));

//sync()를 통해서 서버를 실행할 때 sequelize가 mysql을 연결
sequelize.sync();
//라우팅 모듈 선언
app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    console.log('Express server listening on port '+PORT);
});

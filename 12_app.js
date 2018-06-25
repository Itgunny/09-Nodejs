var express = require('express');
var app = express();


// Jade를 이용하기 위한 세팅
app.set('view engine', 'jade');
// Jade를 넣어주기 위한 폴더
app.set('views', './views');
app.locals.pretty = true;

app.use(express.static('public'));

// rendering : 소스코드를 가지고 와서 웹페이지를 만들어 낸다.
// template 경로를 통해 들어온 사용자에게 temp 템플릿 파일을 웹페이지로 렌더링 해서 전송한다.
app.get('/template', function(req, res) {
    res.render('temp', {time:Date(), title:'Jade'});
});

app.get('/', function(req, res) {
  res.send('Hello Home Page!');
});

app.get('/dynamic', function(req, res) {
  var lis = '';
  for (var i = 0; i < 5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>`
  res.send(output);
})
app.get('/route', function(req, res){
  res.send('Hello Router, <img src="/route.jpg">');
})

app.get('/login', function(req, res) {
  res.send('<h1>Login Please</h1>');
});

app.listen(3000, function(){
  console.log('Connected 3000 port!');
});

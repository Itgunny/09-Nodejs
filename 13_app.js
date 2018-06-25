var express = require('express');
var app = express();


// Jade를 이용하기 위한 세팅
app.set('view engine', 'jade');
// Jade를 넣어주기 위한 폴더
app.set('views', './views');
app.locals.pretty = true;

app.use(express.static('public'));


// Express는 request response를 전달 하겠다고 약속 되어 있다.
// 쿼리스트링은 값과 값을 구분할 때 &를 쓴다.
// request 안의 query에서 값을 가지고 올 수 있다.
// 쿼리스트링 없이 / 이용해서 바꿀 수 있다. -> 시멘틱 웹이라고 한다.
// 의미에 좀더 부합되는 URL 체계
app.get('/topic', function(req, res) {
    var topics = [
      'JavaScript is...',
      'Nodejs is...',
      'Express is...'
    ];

    var output = `
      <a href="/topic?id=0">JavaScript</a><br>
      <a href="/topic?id=1">Noddejs</a><br>
      <a href="/topic?id=2">Express</a><br>
      ${topics[req.query.id]}
    `
    res.send(output);
})

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

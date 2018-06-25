var express = require('express');
var app = express();

// 정적으로 사용할 수 있게 만드는.
// 한번 만들면 변하지 않는 값들을 주로 이용
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.send('Hello Home Page!');
});

// 동적으로 처리하게 되면 코드가 다시 실행 해야되기 떄문에
// 껏다 켜야되는데 정적인 것은 다시 로드하면 된다.
/*
  html로 짜게되면 못하게 되는 일이 있다.
  예를 들어 똑같은 텍스트를 여러개를 반복 출력하고 싶다.

  하지만 아래와 같이 프로그래밍으로 출력할 수 있다.
*/
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

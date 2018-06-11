/*
    main application
    entry application
*/
var express = require('express');


// express를 만든사람이 정해놓은 형식
var app = express();

// URL을 치고 들어오면 GET 방식 -> 홈페이지.
// GET으로 연결된 상태에서 응답할 함수.


/*
 사용자가 get.('/') -> send('Welcom to homepage')
 사용자가 get.('/login') -> send('login please')
 라우터라고 하는 것은 가장 중요한 부분 중에 하나이다.
 */
app.get('/', function(req, res) {
  res.send('Hello Home Page!');
});

app.get('/login', function(req, res) {
  res.send('<h1>Login Please</h1>');
});

app.listen(3000, function(){
  console.log('Connected 3000 port!');
});

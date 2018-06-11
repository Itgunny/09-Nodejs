// http라는 모듈이 요구된다. -> http라고 되있는 부품을 가지고 와서 사용한다.
// 리턴값을 http에 담는다.
const http = require('http');
// 아이피
const hostname = '127.0.0.1';
// 도메인
const port = 1337;


// createServer : 서버 한대를 만듬.
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
// 대기를 하게 시킴(포트 1337, 호스트네임 127.0.0.1)
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World\n');
});
server.listen(port, hostname function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

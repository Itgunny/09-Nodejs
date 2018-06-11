/*
  Synchronous vs Asynchronous

  동기화 : 빨래 -> 설거지 -> 청소
  비동기화 : 빨래하는 업체 -> 설거지하는 업체 -> 청소하는 업체.

  ex) 동기 -> 만명에게 메일을 보내는 시간(1명당 1초라고 하면 10000초)
      비동기 -> 이메일을 보내는 별도 시스템에게 만명에게 이메일을 보내라고 요청(전송이 시작 되고, 완료되면 이메일 보냈다고 알림)

  Nodejs에서 함수 뒤에 Sync라는 이름을 붙여 Synchronous 함수를 제공.
*/
var fs = require('fs');
console.log(1);

// Sync : 동기적인 방식에 의해서 data에 넘긴다. 10분짜리 작업이라고 한다면 10분 후에 data가 찍힘.
var data = fs.readFileSync('05_data.txt', {encoding:'utf8'});
console.log(data);

// Async : 똑같이 처리되지만 조금 다르다.
// 동기식이면 2 -> 3 -> 4가 출력되야 되지만 비동기식은 2 -> 4 -> 3이 출력된다.
console.log(2);
fs.readFile('05_data.txt', {encoding: 'utf8'}, function(err, data){
  console.log(3);
  console.log(data);
})
console.log(4);

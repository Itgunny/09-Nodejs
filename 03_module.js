
/*
  NPM : Node Package Manager

  가장 기본적인 기능들
    1. Nodejs가 제공하는 모듈 HTTP, OS라는 모듈을 사용했다.
    2. Date, String, Array, Math등의 JavaScript 제공하는 모듈을 사용할 수 있다.
      -> 모듈을 결합해서 많은 기능들을 만들 수 있다.

  타인의 모듈을 사용하는 방법

  NPM : Node 계의 앱스토어 -> npmjs.com
  1. 설치
  2. 삭제
  3. 업그레이드
  4. 의존성 관리 : 모듈을 많이 사용하면 의존성이 높아지는데 NPM을 이용해 낮출 수 있음.


  패키지
    1. 모듈 : 프로젝트에 사용되는 모듈
    2. 애플리케이션 : 독립적인 프로그램
       -g : global -> 전역에서 사용.
       : local -> 현재 이패키지를 설치하고 있는 부품으로 사용




*/
var o = require('os');
console.log(o.platform());

# 1회차 NPM과 Express 모듈 2회차 RESTful API 3회차 도서관리 프로그램

Content: Week 13
Assignment: No
Lecture: No
STATUS: Not started

# 1. NPM과 EXPRESS 모듈 알아보기

## NPM

- NodeJS 모듈을 공유하고 다운 받는 저장소
- CLI (명령줄 인터페이스)로 간편하게 모듈 관리
- 의존성 관리
    - A 모듈이 B 모듈을 사용할 때 A 모듈은 B 모듈에 의존성이 있다고 말함
    - package.json 파일로 프로젝트 의존성 관리 → 다른 프로젝트에서도 사용 가능

### `npm init` 명령어

- NodeJS 프로젝트를 시작하기 위한 명령어
- package.json 파일을 생성해줌

### package.json

- 프로젝트의 이름, 버전, 개발자 정보 등의 메타데이터
- NPM 모듈의 의존성 정보 등을 담고 있음
- `main`
    - 프로젝트의 시작점이 되는 파일 (entry file)
    - nodeJS 프로그램은 모듈 프로젝트를 지원해서 한 파일에 여러 JS 파일이 있는데, 어느 JS 파일을 실행해야 프로젝트가 실행되는지 다른 개발자에게 알려줄 수 있음
- `script`
    - 이 프로젝트에서 실행 가능한 명령어를 모아둘 수 있음
    - 실행, 테스트, 배포를 위한 명령어 등을 기록
    - npm run ‘명령어이름’을 입력해서 실행 가능
- `dependencies`
    - 모듈의 이름과 모듈의 버전 저장

### `npm install {모듈 이름}` 명령어

- NPM 패키지 검색하기 ([https://www.npmjs.com](https://www.npmjs.com) )
- ./node_modules 폴더에 모듈을 설치
    - 만약 폴더 삭제 시 다시 `install` 명령어를 입력하면 없어진 node_modules 폴더가 복구된다.
- package.json에 의존성 정보를 저장하려면 `--save` 옵션과 함께 실행
- 하나의 모듈을 다운 받으면 그 모듈에 필요한 다른 모듈들도 다운로드
- e.g. `npm install --save express`

### Require 함수로 외부 모듈 이용하기

- require 함수를 모듈명을 인자로 실행
- 파일명을 전달할 때와 마찬가지로 해당 모듈을 반환하므로 다른 변수에 저장해두었다가 사용

## Express

- 고성능 웹 프레임워크
    - 프로그래머가 작성한 함수를 실행해 HTTP 요청에 대한 HTTP 응답을 프로그래머가 원하는대로 만들어 HTTP 클라이언트에게 응답할 수 있음
    - 요청한 URL이나 HTTP 메서드에 따라 원하는 함수를 실행시켜 주는 라우팅 기능
    - HTML의 내용 일부분을 변수에 저장된 값으로 치환해 동적인 HTML을 만들어 응답하는 뷰 템플릿 엔진도 가지고 있음
    - 미들웨어로 기능 무한대 확장

### Express 앱으로 HTTP 요청 처리하기

- Express가 GET / 명령어를 처리할 수 있도록 하려면 미들웨어를 등록하여 HTTP 응답을 처리할 수 있도록 만들어야 함.
    - HTTP 요청 → 미들웨어 1 → 미들웨어 2 → 미들웨어… → HTTP 응답
    - 미들웨어는 단순한 Javascript 함수로, use() 함수를 통해 몇 개든 등록할 수 있다.
    - HTTP 요청이 들어오면 등록된 미들웨어 (콜백함수)를 등록 순서대로 실행한다.

### 미들웨어 콜백함수의 인수

- express 모듈은 Http 요청이 들어오면 미들웨어 콜백함수에 3가지 인수 전달하여 호출
- `Request` 객체
    - HTTP 요청에 대한 정보가 담겨 있음
    - 메소드, URL, 브라우저 등의 정보
- `Response` 객체
    - 브라우저에 전송할 HTTP 응답을 어떻게 만들지에 대한 정보를 설정
    - send 함수를 호출해야 호출이 끝남, 한번의 요청 당 한 번의 send 함수만 요청 가능
- `next` 함수
    - 이전 미들웨어에서 다음 미들웨어도 실행해야 한다고 알려주는 함수

# 2. Restful API

## RESTful API란?

- REST란?
    - Representational State Transfer의 약자
    - api에 대한 상세 스펙을 보지 않아도 HTTP 요청의 여러 정보를 통해 API가 하는 일을 알 수 있도록 설계된 api
- REST API가 표현하는 것
    - 자원과 자원에 대한 행위를 HTTP 프로토콜을 이용해 표현
    - 자원: 서버에 저장되어 있는 데이터들
        - 쇼핑몰 서비스에서의 자원: 상품 목록, 주문 목록, 회원 목록 등
        - 도서관리 서비스에서의 자원: 도서 자체
- REST API를 통해 사용하려는 자원을 HTTP URI로 명시
- HTTP 메서드로 자원에 대한 행위를 명시

## CRUD

- 자원에 대한 기본적인 행위
- REST API에서는 이 분류에 따라 HTTP 메서드를 나타냄
    - Create: 생성 (POST)
    - Read: 조회 (GET)
    - Update: 수정 (PUT)
    - Delete: 삭제 (DELETE)

## REST API 작성 규칙

- 자원은 URI에 영문 소문자, 명사 복수형으로 표현
- 파일 확장자는 URI에 포함하지 않음
- 자원의 계층구조는 /(슬래쉬)로 표현

![스크린샷 2023-11-23 오후 4.20.56.png](1%E1%84%92%E1%85%AC%E1%84%8E%E1%85%A1%20NPM%E1%84%80%E1%85%AA%20Express%20%E1%84%86%E1%85%A9%E1%84%83%E1%85%B2%E1%86%AF%202%E1%84%92%E1%85%AC%E1%84%8E%E1%85%A1%20RESTful%20API%203%E1%84%92%E1%85%AC%E1%84%8E%E1%85%A1%20%203596e83e289942879dd86b976c636742/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-11-23_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_4.20.56.png)

## RESTful API를 사용하는 이유

- HTTP 프로토콜 상에서 동작
- 특정 언어나 플랫폼에 종속되지 않고 어디서나 실행 가능
- API의 의도를 사용자가 쉽게 파악 가능

## ExpressJS로 REST API 서버 만들기

- Express로 HTTP 메서드 처리
- Express로 URI 처리
- Express로 HTTP 바디 처리

### Express Router

- 미들웨어의 한 종류
- HTTP 메서드, URI에 따라 미들웨어 실행여부 결정
    - 같은 자원(URI)에 대해 다른 HTTP 메서드에 해당하는 동작 요청
    - 같은 HTTP 메서드라도 다른 자원에 대한 동작을 요청할 수 있도록 도와줌
- Router 생성
    - `express.Router()`로 Express Router 생성
- 생성한 라우터는 다른 미들웨어와 마찬가지로 `app.use`를 통해 등록 가능
- Express router를 사용하면 Express 앱의 모듈화가 가능
- 브라우저 주소창으로는 GET 이외의 요청 처리 불가능 → insomnia 설치

## Express Route Parameter

- REST API에서 자원의 아이디를 URI를 통해 전달
- 아이디와 같이 URI의 변하는 요소를 Route Parameter
- Express Router에서는 :(콜론)과 파라미터의 이름으로 Router Parameter를 설정
- Request 객체의 params 프로퍼티로 Route parameter에 접근

### Query String

- URI를 통해 값을 전달하는 또 하나의 방법
- REST API에서는 주로 자원을 검색, 필터링할 때 사용
    - e.g. /books?author=김군오%language=kr

### Express에서 Query String 사용

- Request 객체의 query 프로퍼티로 접근
- Route parameter와 다르게 어떤 query string 을 받을지 미리 설정하지 않음
- 라우트에 영향을 주지 않음
    - 쿼리스트링의 유무와 관계없이 http 메서드와 URI를 통해서만 라우트가 결정
- 전달하지 않은 query string에 접근하면 값이 설정되어 있지 않음 → undefined 변수로 취급

## HTTP Body

- POST, PUT 메서드는 HTTP 요청에 Body 전달 가능
- Body에는 text, json, xml, html 파일 등 어느 것이라도 전송될 수 있음
- Body는 Content-type 헤더에 따라 적절히 해석되어야 함

# 3. 도서관리 프로그램 만들기

- 도서를 자바스크립트 배열로 관리
- 도서의 속성에는 아이디, 제목, 저자가 있음
- 도서의 조회, 등록, 수정, 삭제 API 지원

## Static 미들웨어

- HTML, CSS, JS 등 정적 파일에 대한 HTTP 요청 응답
- app.use(express.static(”폴더명”))으로 미들웨어 등록
- 지정한 폴더에 저장된 파일은 http://{서버주소}/{파일명}으로 접근 가능

## npm start로 NodeJS 앱을 실행 시 문제점

- 푸티를 종료하면 서버도 같이 종료되어서 더 이상 브라우저에서 접속할 수 없게 됨
- 두 개 이상의 nodejs 앱을 실행 시
    - putty를 실행하려는 앱의 개수대로 실행
    - 서버에 접속하고 앱을 실행해야 함
- 해결책
    - Node.Js 앱을 백그라운드 프로세스로 실행
    - pm2라는 node 프로세스 매니저를 사용
    
    ### PM2 사용하기
    
    - `pm2 start --name {앱이름}{파일명}` : {앱이름}으로 파일 실행, 푸티를 꺼도 앱은 종료되지 않음, 한 번 앱 이름으로 저장해놓으면 다시 파일명을 지정할 필요 X
    - `pm2 reload {앱이름}` : 다시 실행
    - `pm2 stop {앱이름}` : 앱 종료
    - `pm2 delete {앱이름}`
    - `pm2 list` : 백그라운드에서 실행 중인 앱 목록 확인 가능
    - `pm2 logs {앱 이름}` : 출력 메시지 확인
    - `pm2 monit` : 프로그램의 전체적인 관리, 앱의 상태 실시간 확인 가능
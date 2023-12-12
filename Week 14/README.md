# 1회차 Todo List 프로그램 만들기 2회차 동시통역 채팅 프로그램 만들기 3회차 코도바 소개 및 설치

Content: Week 14
Assignment: Yes
Lecture: Yes
STATUS: Note

# 1. TODO List 프로그램 만들기

## NodeJS To-do list

- todo list 웹 페이지를 Node JS 서버를 통해 호스팅
- todo list 저장 및 불러오기 API 구현

# 2. NodeJS 동시통역 채팅 프로그램

- 채팅 웹 페이지를 Node JS 서버를 통해 호스팅
- 파파고 Open API를 이용해 메시지 번역 기능 구현

## Request 모듈

- NodeJS 앱에서 다른 웹 서버에 HTTP 요청을 보내고 해당 서버의 응답을 받기위한 모듈
- Jquery의 .ajax 함수와 비슷한 역할
- request 모듈을 설치한 뒤 require 함수를 불러오면 request 모듈을 사용할 수 있음
    - 첫 번째 인자: URL 전달
    - 두 번째 인자: 요청의 옵션, 생략 가능
    - 세 번째 인자: 콜백 함수, post나 put의 경우 body 프로퍼티에 http body에 전달할 객체 지정 가능
    - 콜백 함수: 3개의 인자와 함께 호출
        - 첫 번째: error, http 요청에 성공하면 error에 아무 값도 들어있지 않음 → if (error)를 통해서 http 통신의 성공 여부 검사 가능
        - 두 번째: HTTP 응답에 대한 정보, 상태코드 등 확인 가능
        - 세 번째: 서버에서 보내준 HTTP body의 내용
        - 

```jsx
var request = require('request');

// 첫 번재 인자에 url을 전달하고 두 번째 인자에 요청의 옵션, 세 번째 인자는 콜백 함수
request.get('/books', {body: {key: value} }, function(error, response, body) {
}};
// post나 put의 경우 body 프로퍼티에 HTTP body에 전달할 객체 지정 가능
request.post('/books', {body:{ key: value} }, function(error, response, body) {
});

request.put('/books', {body:{key: value}}, function(error, response, body) {
});

request.delete('/books', function(error, response, body) {
});

```

# 3. 코도바 소개 및 설치

## Cordova

- 오픈소스 하이브리드 앱 개발 도구
- 웹 기술을 이용해 개발 - 앱을 개발하기 위해 새로운 기술을 배우지 않아도 되고 HTML, CSS, JAVAscript만 알고 있으면 됨
- 이미 웹을 통해 배포되고 있는 서비스를 같은 코드를 가지고 적은 노력으로 앱으로도 배포할 수 있도록 해준다.
- One-source Multi-use: 한 가지 소스로 여러 플랫폼을 지원하는 것으로 개발 기간도 줄일 수 있고 개발 인력 관리도 쉬워지며, 개발 비용도 절약할 수 있어 여러 IT업체들에서 매우 각광 받고 있음
- 윈도우, OS, X, 리눅스에서 사용 가능
- 안드로이드, iOS, MacOS, X, 윈도우 등 멀티 플랫폼 지원 가능
    - 다른 플랫폼에서 다시 코드를 짤 필요 없이 훨씬 적은 노력으로 안드로이드와 iOS 앱을 동시에 개발할 수 있어 서비스를 빠르게 출시 가능
- 플러그인을 통한 확장

### Cordova의 한계

- 네이티브 앱에 비해 성능이 떨어져 게임이나 애니메이션이 많이 사용되는 앱을 개발하기에 어려움
- 플러그인 개발이 어려움
    - 플러그인은 각각의 OS 별로 따로 개발해야 하고 추가적으로 자바스크립트와 통신할 수 있는 인터페이스도 개발해야 함

### Cordova 작동 원리

- **Web view** ↔ (Javascript API) ↔ **Cordova** ↔ (Native API) ↔ **OS**
    - 웹 뷰: 앱 내부에서 동작하는 작은 브라우저, 주소창은 없지만 다른 브라우저와 동일하게 html, css, javascript 파일을 읽고 처리 가능
1. Cordova는 웹 페이지를 웹뷰(앱 내부에서 동작하는 작은 브라우저)에서 실행
2. Cordova는 자바스크립트 코드와 네이티브 코드의 두 부분으로 이루어짐
    
    
    | 자바스크립트 코드 | 네이티브 코드 |
    | --- | --- |
    | 웹뷰에서 자바스크립트를 통해 cordova api를 호출할 수 있게 해줌 | 각 플랫폼 별로 따로 작성 |
    | 웹 페이지 삽입 및 호출이 가능 | OS의 기능들을 자유롭게 사용 가능 |
    | 네이티브 함수를 대신 호출해 줌 |  |

## JDK (Java development kit) 설치하기

- 안드로이드 앱을 만드려면 Java 개발 환경이 필요 - Java를 몰라도 cordova가 java 언어로 작성해야 하는 부분을 대신해주기 때문에 걱정할 필요가 없음
- 하지만 자바 언어로 된 프로그램을 빌드할 수 있는 환경은 직접 만들어주어야 함 → JDK는 자바를 개발하기 위한 컴파일러, 라이브러리, 실행환경을 모아놓은 도구
- [https://www.oracle.com/technetwork/java/javaee/downloads/jkd8-downloads-2133151.html](https://www.oracle.com/technetwork/java/javaee/downloads/jkd8-downloads-2133151.html)

## 안드로이드 스튜디오 설치

- Cordova를 사용하기 위해서는 Android SDK만 있어도 무방하지만 안드로이드 스튜디오 설치를 추천
- [https://developer.android.com/studio](https://developer.android.com/studio)

## Cordova 설치

- 윈도우 실행창 열기
    - `Window key` + `r` → `cmd` 입력 후 실행
    - `npm insatll -g cordova` 실행
        - 만약 오류 나면 권한 문제일 수 있으므로 `sudo npm install -g cordova` 실행

### 설치 확인

- `cordova --version`

## 새 Cordova 프로젝트 생성

- 프로젝트 생성: `cordova create [폴더명] [패키지명] [앱 이름]`
    - 패키지명은 수많은 앱 중 하나의 앱을 구별하기 위해 사용
    - 패키지명은 겹치면 안되기 때문에 보통은 자신의 도메인을 거꾸로 적어 사용
    e.g. 도메인명: [cordova.apache.org](http://cordova.apache.org) → 패키지명: org.apache.cordova
- 프로젝트 디렉토리로 이동: `cd [폴더명]`

## Cordova 프로젝트 구조

- platforms: 각각의 플랫폼 별로 앱을 빌드하기 위한 파일들이 저장
- plugins: 설치한 cordova 플러그인이 위치
- www: 앱에서 사용될 html, css, javascript 파일과 이미지 파일들이 위치
- config.xml: 만들어질 코도바 앱의 플러그인 의존성이나 패키지명 같은 환경설정들이 저장

## 앱 빌드하기

### 안드로이드 플랫폼 추가

- 플랫폼 추가를 위해서는 cordova 프로젝트가 위치한 폴더로 이동하여 `cordova platform add [플랫폼명]@[버전]` 입력
    - 플랫폼명: android 등
- 앱을 만드는 데까지는 스마트폰이 없어도 가능하지만 앱을 실행하고 디버깅하려면 안드로이드 장치가 필요 (아이폰은 이용 불가)
- 안드로이드 에뮬레이터를 생성해서 실제 디바이스와 비슷하게 PC 상에서 안드로이드 장치를 이용할 수 있음

### 안드로이드 에뮬레이터 생성

1. 안드로이드 스튜디오 → `More Actions` → `Virtual Device manager` 를 선택해 안드로이드 가상 머신 생성
2. `Create device` 버튼 클릭
    - 여러 디바이스들의 프리셋 제공
    - 각 프리셋 별로 화면의 크기나 해상도, 화면 밀도 등이 다양하게 분포
    - google의 레퍼런스 기기인 pixel2 선택 & `next`
3. 안드로이드 OS 이미지 다운로드 후 `Next` 버튼 클릭
    - 다운로드가 완료되면 해당 OS의 이미지 선택 → `next`
4. 모든 설정이 정확하면 `finish` 버튼을 클릭해 안드로이드 에뮬레이터 생성을 완료
5. 애뮬레이터가 생성되면 재생 버튼을 눌러 실행

### 안드로이드 앱 빌드 및 실행

- cordova 프로젝트를 생성한 디렉토리로 이동해서 `cordova run [플랫폼명]`
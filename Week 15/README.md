# 1회차 코도바 플러그인 2회차 코도바 Todo List

Content: Week 15
Assignment: Yes
Lecture: Yes
STATUS: Note

# 1. 코도바 플러그인

## Cordova 플러그인

- NodeJS의 NPM과 같이 Cordova의 기능을 확장
- 웹 앱에서 OS 기능을 사용하려면 플러그인이 필요
    - 웹 브라우저에서 실행되는 웹 앱은 기본적으로 디바이스의 파일에 접근하거나 배터리 잔량을 알아오는 등 OS와 디바이스에 종속적인 기능을 사용하는데 매우 제한적
    - cordova 플러그인은 웹 앱에서 OS의 기능을 제약없이 사용할 수 있도록 자바스크립트에서 네이티브 고드의 함수를 실행할 수 있도록 해줌
- OS 종속 코드와 자바스크립트 인터페이스로 이루어짐
    
    
    | OS 종속 코드 | 자바스크립트 인터페이스 |
    | --- | --- |
    | 플러그인이 지원하려는 OS마다 별도로 작성해야 함 | 자바스크립트 인터페이스는 브라우저에서 실행되므로 OS 별로 따로 작성할 필요 없이 플러그인 당 하나만 작성하면 됨 |
    | 안드로이드와 아이폰을 지원하려면 JAVA와 Swift 언어로 각각 Cordova 플러그인의 OS 종속 코드를 작성해야 함 | 자바스크립트에서 직접 JAVA나 swift 언어의 함수를 호출할 수 없으므로 cordova가 대신 네이티브 코드를 호출할 수 있게 해주는 자바스크립트 인터페이스를 작성해야함 |

## Cordova 플러그인 설치 및 삭제

- 설치
    - `cordova plugin add --save [플러그인명]`
    - save 옵션을 추가하여 플러그인 설치 정보 추가 → 다른 환경에서 프로젝트 복원하고 cordova platform을 추가할 때 자동으로 플러그인들을 설치할 수 있게 해줌
- 목록 확인
    - `cordova plugin list`
- 삭제
    - `cordova remove [플러그인명]`

### 플러그인 검색

- 공식 플러그인: [https://cordova.apache.org/docs/en/latest/](https://cordova.apache.org/docs/en/latest/)

## Battery status 플러그인

- 설치: `cordova-plugin-battery-status`
- 세 가지 기능

### 디바이스의 배터리 잔량 확인

- 배터리의 잔량이 1%의 단위로 변할 때마다 `batterystatus` 이벤트 발생 → 콜백함수에 status 객체를 전달
- `status.level` : 현재 배터리의 잔량이 저장되어 있음

### 디바이스의 충전상태 확인

- `batterystatus` 이벤트
- `status.isPlugged` : 현재 디바이스가 충전 중인지를 나타내는 bool 값 저장

### 디바이스의 배터리 경고 확인

- `batterylow` 이벤트
- `batterycritical` 이벤트

### 사용하기

- **Cordova.js**
    - 플러그인을 사용하려면 cordova.js를 index.html에 삽입해야함
        - index.html
        
        ```jsx
        <!DOCTYPE html>
        <!--
            Licensed to the Apache Software Foundation (ASF) under one
            or more contributor license agreements.  See the NOTICE file
            distributed with this work for additional information
            regarding copyright ownership.  The ASF licenses this file
            to you under the Apache License, Version 2.0 (the
            "License"); you may not use this file except in compliance
            with the License.  You may obtain a copy of the License at
        
            http://www.apache.org/licenses/LICENSE-2.0
        
            Unless required by applicable law or agreed to in writing,
            software distributed under the License is distributed on an
            "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
             KIND, either express or implied.  See the License for the
            specific language governing permissions and limitations
            under the License.
        -->
        <html>
            <head>
                <meta charset="utf-8">
                <!--
                Customize this policy to fit your own app's needs. For more guidance, please refer to the docs:
                    https://cordova.apache.org/docs/en/latest/
                Some notes:
                    * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
                    * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                        * Enable inline JS: add 'unsafe-inline' to default-src
                -->
                <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
                <meta name="format-detection" content="telephone=no">
                <meta name="msapplication-tap-highlight" content="no">
                <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
                <meta name="color-scheme" content="light dark">
                <link rel="stylesheet" href="css/index.css">
                <title>Hello World</title>
            </head>
            <body>
        				<div>
        					<span id="battery">100</span>%
        				</div>
                <script type="text/javascript" src="cordova.js"></script>
        				<script src="js/jquery-3.7.1.min.js"></script>
                <script type="text/javascript" src="js/index.js"></script>
            </body>
        </html>
        ```
        
    - 코도바의 웹뷰는 외부 소스에서 스크립트를 다운로드하는 것을 허용하지 않아 jquery를 직접 다운 받아 삽입해야 함
    - [https://jquery.com/download/](https://jquery.com/download/) → compressed, production 버전의 jquery 다운로드
    - 다른 이름으로 링크 저장 → 프로젝트 폴더 안의 www/js 폴더로 지정
- **deviceready 이벤트**
    - cordova.js 파일을 html에 삽입하면 deviceready 이벤트에 이벤트 처리기 등록 가능
    - Cordova 플러그인이 모두 로드된 후 발생
        - 플러그인은 앱이 정상적으로 실행되고 추가한 cordova 플러그인들이 모두 로드되면 발생
    - `window.addEventListener` 함수를 통해 등록
        - 자바스크립트의 최상단 객체인 window 객체의 `addEventListener` 함수를 통해 등록 가능
    - 플러그인은 deviceready 이벤트가 발생한 후 사용함
        - 플러그인 관련 코드는 deviceready 이벤트의 콜백 함수 안에 작성하는 것이 좋음
- **deviceready 이벤트 처리기 등록**
    - **www/js/index.js**
        
        ```jsx
        // Jquery로 배터리 잔량을 표시할 span 태그 선택
        var battery = $('battery');
        
        // 이벤트처리기 등록, 세 번째 인자에 true를 전달하지 않으면 deviceready 이벤트 처리 불가
        window.addEventListener('deviceready', function() {
        	// deviceready 이벤트의 콜백 함수 내부에서 battery status 플러그인 사용
        	// Battery status 플러그인은 배터리 상태 변경 때마다 batterystatus라는 이벤트 발생 
        	window.addEventListener("batterystatus", function(status) {
        		// 콜백함수의 인자로 이벤트 객체 전달 & 처리하여 배터리 잔량 확인
        		battery.text(status.level);
        	}, true);
        }, true);
        ```
        
- **CSS 수정**
    - Jquery의 text 함수로 얻어낸 배터리 잔량을 span 태그에 출력
    - **www/css/index.css**
        - 배터리 잔량 크기 키우기
            
            ```jsx
            div {
            	font-size: 24px;
            }
            ```
            

## 카메라 플러그인

- 설치: `cordova-plugin-camera --save`
- 디바이스의 카메라로 사진을 찍어 불러오기
- 디바이스의 이미지 라이브러리에서 사진 불러오기

### `getPicture` 함수

- `camera.getPicture(success, error, options)`
    - success: 사진을 불러오는데 성공했을 때 실행되는 콜백함수
    - error: 사진 불러오기에 실패했을 때 실행되는 콜백함수
    - options: 사진을 가져오기 위한 option 객체

### Camera `option` 객체

| 프로퍼티 | 타입 | 기본값 | 설명 |
| --- | --- | --- | --- |
| quality | number | 50 (0 ~ 100) | 사진 품질 |
| sourceType | 0, 1 | 1 | 0: 사진 라이브러리
1: 카메라 실행 |
| correctOrientation | boolean |  | 카메라로 사진을 찍은 방향에 따라 사진을 자동 회전시켜 불러오기 |
| saveToPhotoAlbum | boolean |  | 사진을 카메라로 찍고 디바이스에 저장한 뒤 불러오기 |
| cameraDirection | 0, 1  | 0 | 0: 후면카메라
1: 전면카메라 |

### 사용하기

- ********************index.html********************
    
    ```jsx
    <!DOCTYPE html>
    <!--
        Licensed to the Apache Software Foundation (ASF) under one
        or more contributor license agreements.  See the NOTICE file
        distributed with this work for additional information
        regarding copyright ownership.  The ASF licenses this file
        to you under the Apache License, Version 2.0 (the
        "License"); you may not use this file except in compliance
        with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
        Unless required by applicable law or agreed to in writing,
        software distributed under the License is distributed on an
        "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
        specific language governing permissions and limitations
        under the License.
    -->
    <html>
        <head>
            <meta charset="utf-8">
            <!--
            Customize this policy to fit your own app's needs. For more guidance, please refer to the docs:
                https://cordova.apache.org/docs/en/latest/
            Some notes:
                * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
                * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                    * Enable inline JS: add 'unsafe-inline' to default-src
            -->
            <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
            <meta name="format-detection" content="telephone=no">
            <meta name="msapplication-tap-highlight" content="no">
            <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
            <meta name="color-scheme" content="light dark">
            <link rel="stylesheet" href="css/index.css">
            <title>Hello World</title>
        </head>
        <body>
    				<div>
    					<span id="battery">100</span>%
    				</div>
    				<button id="btnTakePic">사진 찍기</button>
    				<button id="btnLoadPic">사진 불러오기</button>
    				<div>
    					<img id="image">
    				</div>
            <script type="text/javascript" src="cordova.js"></script>
    				<script src="js/jquery-3.7.1.min.js"></script>
            <script type="text/javascript" src="js/index.js"></script>
        </body>
    </html>
    ```
    
- **index.css**
    
    ```jsx
    div {
    	font-size: 24px;
    }
    
    img {
    	width: 100%
    }
    ```
    
- **index.js**
    
    ```jsx
    // Jquery로 배터리 잔량을 표시할 span 태그 선택
    var battery = $('battery');
    var image = $("#image");
    
    var options = {
    	quality: 80,
    	correctOrientation: true
    }
    
    // 이벤트처리기 등록, 세 번째 인자에 true를 전달하지 않으면 deviceready 이벤트 처리 불가
    window.addEventListener('deviceready', function() {
    	// deviceready 이벤트의 콜백 함수 내부에서 battery status 플러그인 사용
    	// Battery status 플러그인은 배터리 상태 변경 때마다 batterystatus라는 이벤트 발생 
    	window.addEventListener("batterystatus", function(status) {
    		// 콜백함수의 인자로 이벤트 객체 전달 & 처리하여 배터리 잔량 확인
    		battery.text(status.level);
    	});
    	
    	$("#btnTakePic").click(load(1));
    	$("#btnLoadPic").click(load(2));
    }, true);
    
    // 코드의 중복을 줄이기 위해 함수를 반환하는 함수 이용하기
    function load(source) {
    	return function() {
    		navigator.camera.getPicture(
    			// 첫 번째 인자는 이미지 로드에 성공했을 때 실행되는 콜백 함수
    			function(imageUri) {
    				image.attr('src', imageUri);
    			},
    			// 두 번째 인자는 이미지 로드에 실패했을 때 실행되는 콜백 함수
    			function(error) {
    				alert("에러발생!");
    			},
    			{
    				sourceType: source,
    				// ...: 펼침 연산자로 뒤에 오는 피연산자를 펼쳐서 새로운 객체에 복사해줌
    				// 객체의 대부분의 프로퍼티는 동일한데 특정 부분만 다른 객체를 생성해야 할 때 유용하게 사용
    				...options,
    			}
    		);
    	}
    }
    ```
    

## Android 앱 실행

1. Android 플랫폼 추가
- `cordova platform add android`
1. 안드로이드 가상 디바이스 실행 (Android Studio)
2. 안드로이드 앱 빌드 & 실행 -> `cordova run android`
    - Trouble Shooting
        - ~/.bashrc 에 java path 설정하기
        - 안드로이드 스튜디오 디바이스 매니저 API 버전 android@[버전]의 버전으로 맞추기 (8.0.0 → API 26)
3. 빌드가 끝난 후 가상 디바이스가 실행되어 있으면 앱이 자동으로 설치 & 실행
4. 가상 디바이스 오른쪽 컨트롤 중 맨 아래의 `...` 버튼 클릭하여 디바이스 상태 상세 설정 다이얼로그로 배터리 잔량 조절해보기

## 펼침 연산자

- 형식 : `...`
- 배열이나 객체를 피연산자로 받음
- 피연산자로 전달된 배열이나 객체를 펼침
- 다른 배열이나 객체에 값을 복사해 추가할 경우 사용

```jsx
var arr = [0, 1, 2];
console.log([...,arr,3,4]);
// [0, 1, 2, 3, 4]
var obj = { a:0, b:0 }
console.log({...,obj, c:0 }
// {a: 0, b : 0, c : 0}
```

# 2. 코도바 Todo List

## Todo (NodeJS 서버파일) 수정

- ******todo.css******
    
    ```jsx
    body {
        background:#a1d0ff;
    }
    
    .container {
        width: 300px;
        margin: auto;
    }
    
    .title, 
    .contents {
        background: white;
        box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.15);
    }
    
    .title {
        text-align: center;
    }
    .contents {
        padding: 10px;
    }
    
    .input-div {
        display: flex;
    }
    
    #inputBox {
        flex-grow: 1;
        height: 30px;
    }
    
    li {
        list-style: none;
        margin: 20px 0px;
    }
    
    #delete {
        margin: 0px 5px;
    }
    
    .checked {
        text-decoration: line-through;
    }
    ```
    
- **todo.html**
    
    ```jsx
    <html>
        <head>
            <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
            <link rel="stylesheet" href="todo.css" />
        </head>
        <body>
            <div class="container">
                <div class="title">
                    <h1>Todo list</h1>
                </div>
    
                <div class="contents">
    
                    <div>
                        <!--사용자 입력창과 입력 버튼-->
                        <input type="text" id="inputBox" />
                        <button id="addButton">Add</button>
                    </div>
    
                    <ul></ul>
    
                </div>
            </div>
            <script src="todo.js"></script>
        </body>
    </html>
    ```
    
- **todo.js**
    
    ```jsx
    // JSON 변수 선언
    var todos = [];
    
    $.ajax("http://localhost:3000/todos").done(function(result) {
        console.log(result);
    
        todos = result;
        // Object.keys로 해당 JSON 객체의 key들을 배열로 반환
        for (const todo of Object.keys(todos)) {
            $(".contents ul").append(liTemplate(todo.text, todo.checked));
        }
    });
    
    // add 버튼이 클릭되면 input 박스에서 텍스트를 읽어와 todos에 저장
    $("#addButton").click(function() {
        // 저장이 완료되면 inputBox에 val 함수를 사용하여 text 지워주기
        var text = $('#inputBox').val();
        // 할 일의 내용이 key로, 완료 여부를 나타내는 true/false 값을 value로 저장
        todos.push({ text: text, checked: false});
        $("#inputBox").val("");
        console.log(todos);
    
        $(".contents ul").append(liTemplate(text, false));
        saveTodos();
    });
    
    function inputTemplate(text, checked) {
        var inputTag = $('<input type="checkbox" id="checkBox">');
        inputTag.attr("checked", checked);
        return inputTag;
    }
    
    function buttonTemplate(text) {
        var buttonTag = $('<button id="deleteButton">X</button>');
        return buttonTag;
    }
    
    // 어떤 li 태그를 지워야하는지 구분하기
    function liTemplate(text, checked) {
        var li = $("<li></li>");
    
        li.append(inputTemplate(text, checked));
        li.append(text);
        li.append(buttonTemplate(text));
    
        // click 함수의 인자에는 익명 함수 전달, 인자를 입력하지 않아도 되지만, 입력한다면 첫 번째 인자를 통해 event에 대해 전달 받음
        li.click(function(event) {
            // 어떤 태그에 클릭 이벤트가 발생했는지 쉽게 구분하기 위해 el이라는 변수에 event.target 저장
            var el = $(event.target);
            var index = li.index("li");
            console.log(index);
    
            if (el.is("button")) {
                todos.splice(index, 1);
                $("li")[index].remove();
                console.log(todos);
            } else if (el.is("input[type='checkbox']")) {
                var isChecked = el.is(":checked");
                // 체크가 되었을 때
                if (isChecked) {
                    $($("li")[index]).addClass("checked");
                    todos[index].checked = true;
                } else {
                    // 체크가 해제되었을 때
                    $($("li")[index]).removeClass("checked");
                    todos[index].checked = false;
                }
            }
    
            saveTodos();
        });
    
        return li;
    }
    
    // Jquery의 ajax를 사용하여 주어진 API 주소로 POST 요청을 날리는 함수
    function saveTodos() {
        $.ajax({
            url: "http://localhost:3000/todos",
            method: "POST",
            data:JSON.stringify({ todos: todos }),
            dataType: "json",
            contentType: "application/json"
        }).done(function() {
            console.log("POST done");
        });
    }
    ```
    

## Cordova 프로젝트 생성

- todolist 프로젝트 생성하기
    - `cordova create todolist com.example.todo TodoList`
    - `cd Todolist`
- `todo` 폴더 만들고 아까 만든 todo.css, -.js, -.html 넣기
- 안드로이드 (8.0.0) 플랫폼 추가
    - `cordova platform add android@8.0.0`
- 가상 디바이스 생성 & 켜기
    - 새 프로젝트마다 하나씩 추가해야 하는 듯
- 앱 실행
    - `cordova run android`
    - deviceready라는 로봇 그림이 있으면 앱 실행 성공

## index.js 수정

- www/js/index.js 의 내용을 아래와 같이 수정
    
    ```jsx
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
      console.log("Device is ready!");
      window.location.href = "./todo/todo.html"
    }
    ```
    
- 다시 디바이스 실행하면 todo list 화면이 보인다.

## Plugin 추가

### Datepicker

- `cordova plugin add cordova-plugin-datepicker`
- 날짜 선택 플러그인
- 사용
    - `datePicker.show(options, onSuccess, onError);`
- option
    - date: 기본으로 설정한 날짜
    - mode: datePicker의 기능 제어, date만 입력할 시에서는 날짜만 고를 수 있고, datetime을 입력하면 날짜와 시간 모두 고를 수 있음
- onSuccess
    - 날짜 선택이 성공적으로 종료되었을 경우 호출되는 callback 함수
    - 실패했을 경우 호출되는 callback 함수
- **todo.js 수정**
    - datePicker를 통해 시간을 설정하면, 할 일이 추가되도록 하기
    
    ```jsx
    // JSON 변수 선언
    var todos = [];
    var options = {
        date: new Date(),
        mode: "datetime"
    };
    
    $.ajax("http://localhost:3000/todos").done(function(result) {
        console.log(result);
    
        todos = result;
        // Object.keys로 해당 JSON 객체의 key들을 배열로 반환
        for (const todo of Object.keys(todos)) {
            $(".contents ul").append(liTemplate(todo.text, todo.checked));
        }
    });
    
    function onSuccess(date) {
        // 저장이 완료되면 inputBox에 val 함수를 사용하여 text 지워주기
        var text = $('#inputBox').val();
        // 할 일의 내용이 key로, 완료 여부를 나타내는 true/false 값을 value로 저장
        todos.push({ text: text, checked: false, date: date});
        $("#inputBox").val("");
        console.log(todos);
        $(".contents ul").append(liTemplate(text, false, date));    
        saveTodos();
    }
    
    // add 버튼이 클릭되면 input 박스에서 텍스트를 읽어와 todos에 저장
    $("#addButton").click(function() {
        datePicker.show(options, onSuccess, onError);
    });
    
    function inputTemplate(text, checked) {
        var inputTag = $('<input type="checkbox" id="checkBox">');
        inputTag.attr("checked", checked);
        return inputTag;
    }
    
    function buttonTemplate(text) {
        var buttonTag = $('<button id="deleteButton">X</button>');
        return buttonTag;
    }
    
    // 어떤 li 태그를 지워야하는지 구분하기
    function liTemplate(text, checked, date) {
        var li = $("<li></li>");
    
        li.append(inputTemplate(text, checked));
        li.append(text);
        li.append(buttonTemplate(text));
        li.append(date.toLocalSTring("ko-KR", {timeZone: "Asia/Seoul"}));
    
        // click 함수의 인자에는 익명 함수 전달, 인자를 입력하지 않아도 되지만, 입력한다면 첫 번째 인자를 통해 event에 대해 전달 받음
        li.click(function(event) {
            // 어떤 태그에 클릭 이벤트가 발생했는지 쉽게 구분하기 위해 el이라는 변수에 event.target 저장
            var el = $(event.target);
            var index = li.index("li");
            console.log(index);
    
            if (el.is("button")) {
                todos.splice(index, 1);
                $("li")[index].remove();
                console.log(todos);
            } else if (el.is("input[type='checkbox']")) {
                var isChecked = el.is(":checked");
                // 체크가 되었을 때
                if (isChecked) {
                    $($("li")[index]).addClass("checked");
                    todos[index].checked = true;
                } else {
                    // 체크가 해제되었을 때
                    $($("li")[index]).removeClass("checked");
                    todos[index].checked = false;
                }
            }
    
            saveTodos();
        });
    
        return li;
    }
    
    // Jquery의 ajax를 사용하여 주어진 API 주소로 POST 요청을 날리는 함수
    function saveTodos() {
        $.ajax({
            url: "http://localhost:3000/todos",
            method: "POST",
            data:JSON.stringify({ todos: todos }),
            dataType: "json",
            contentType: "application/json"
        }).done(function() {
            console.log("POST done");
        });
    }
    ```
    

### local notification

- `cordova plugin add cordova-plugin-local-notification`
- 알림 플러그인
- 사용
    - 정해진 날짜와 시간에 알림
        - `cordova.plugins.notification.local.schedule({
            title: "Design teem meeting",
            text: "3:00 ~ 4:00 PM",
            trigger: {at : new Date(2017, 10, 27, 15) }
        });`
    - 현재 시간으로부터 특정 시간이 지나면 알림이 오게 하기
        - `cordova.plugins.notification.local.schedule({
            title: "Design team meeting",
            trigger: { in : 1, unit: "hour" }
        });`
    - 특정 주기마다 알림이 오게 하기
        - `cordova.plugins.notification.local.schedule({
            title: "Design team meeting",
            trigger: { every: "day", count: 5 )
        });`
- **todo.js 수정**
    - 정해진 시간에 알림이 오게 하기
    
    ```jsx
    // JSON 변수 선언
    var todos = [];
    var options = {
        date: new Date(),
        mode: "datetime"
    };
    
    $.ajax("http://localhost:3000/todos").done(function(result) {
        console.log(result);
    
        todos = result;
        // Object.keys로 해당 JSON 객체의 key들을 배열로 반환
        for (const todo of Object.keys(todos)) {
            $(".contents ul").append(liTemplate(todo.text, todo.checked));
        }
    });
    
    function onSuccess(date) {
        // 저장이 완료되면 inputBox에 val 함수를 사용하여 text 지워주기
        var text = $('#inputBox').val();
        // 할 일의 내용이 key로, 완료 여부를 나타내는 true/false 값을 value로 저장
        todos.push({ text: text, checked: false, date: date});
        $("#inputBox").val("");
        console.log(todos);
        $(".contents ul").append(liTemplate(text, false, date)); 
        
        cordova.plugins.notification.local.schedule({
            title: "Todo list",
            text: text,
            trigger: {at: date }
        });
        
        saveTodos();
    }
    
    // add 버튼이 클릭되면 input 박스에서 텍스트를 읽어와 todos에 저장
    $("#addButton").click(function() {
        datePicker.show(options, onSuccess, onError);
    });
    
    function inputTemplate(text, checked) {
        var inputTag = $('<input type="checkbox" id="checkBox">');
        inputTag.attr("checked", checked);
        return inputTag;
    }
    
    function buttonTemplate(text) {
        var buttonTag = $('<button id="deleteButton">X</button>');
        return buttonTag;
    }
    
    // 어떤 li 태그를 지워야하는지 구분하기
    function liTemplate(text, checked, date) {
        var li = $("<li></li>");
    
        li.append(inputTemplate(text, checked));
        li.append(text);
        li.append(buttonTemplate(text));
        li.append(date.toLocalSTring("ko-KR", {timeZone: "Asia/Seoul"}));
    
        // click 함수의 인자에는 익명 함수 전달, 인자를 입력하지 않아도 되지만, 입력한다면 첫 번째 인자를 통해 event에 대해 전달 받음
        li.click(function(event) {
            // 어떤 태그에 클릭 이벤트가 발생했는지 쉽게 구분하기 위해 el이라는 변수에 event.target 저장
            var el = $(event.target);
            var index = li.index("li");
            console.log(index);
    
            if (el.is("button")) {
                todos.splice(index, 1);
                $("li")[index].remove();
                console.log(todos);
            } else if (el.is("input[type='checkbox']")) {
                var isChecked = el.is(":checked");
                // 체크가 되었을 때
                if (isChecked) {
                    $($("li")[index]).addClass("checked");
                    todos[index].checked = true;
                } else {
                    // 체크가 해제되었을 때
                    $($("li")[index]).removeClass("checked");
                    todos[index].checked = false;
                }
            }
    
            saveTodos();
        });
    
        return li;
    }
    
    // Jquery의 ajax를 사용하여 주어진 API 주소로 POST 요청을 날리는 함수
    function saveTodos() {
        $.ajax({
            url: "http://localhost:3000/todos",
            method: "POST",
            data:JSON.stringify({ todos: todos }),
            dataType: "json",
            contentType: "application/json"
        }).done(function() {
            console.log("POST done");
        });
    }
    ```
    

### todo.html 수정

- 19번째 줄에 추가
    
    ```jsx
    <html>
        <head>
            <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
            <link rel="stylesheet" href="todo.css" />
        </head>
        <body>
            <div class="container">
                <div class="title">
                    <h1>Todo list</h1>
                </div>
    
                <div class="contents">
    
                    <div>
                        <!--사용자 입력창과 입력 버튼-->
                        <input type="text" id="inputBox" />
                        <button id="addButton">Add</button>
                    </div>
    
                    <ul></ul>
    
                </div>
            </div>
            <script src="../cordova.js"></script>
            <script src="todo.js"></script>
        </body>
    </html>
    ```
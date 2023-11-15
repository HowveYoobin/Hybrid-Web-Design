# 1회차 jQuery 소개 2회차 jQuery 응용 1 3회차 jQuery 응용 2

Content: Week 11
Assignment: Yes
Lecture: Yes
STATUS: Note

# 1. JQuery

## JQuery 소개

### 정의

- J Query는 또 다른 하나의 언어가 아님
- 자바스크립트 단순화 라이브러리로, Javascript를 쉽게 작성할 수 있도록 도와줌

### 특징

- 빠르고, 작고, 기능이 많은 Javascript 라이브러리
- HTML 문서 조작, 이벤트 처리, 애니메이션, Ajax와 같은 것들을 간편하게 사용하게 함
- 업계에서는 표준에 가까운 점유율을 가지고 있음

## 라이브러리

- 자주 사용되는 함수, 기능들을 재활용 가능하도록 만든 묶음
- javascript는 다양한 라이브러리를 보유
    - JQuery, React, Moment, lodash 등
- jQuery는 javascript 프로그래밍 시에 도움이 되는 여러 함수들을 제공

## jQuery

| jQuery | Javascript |
| --- | --- |
| $("#continue").text("Next Step...") | document.getElementById("continue").innerHTML = "Next step..." |
| 간편하고 가독성이 좋다. |  |

### jQuery 문법

| jQuery | Javascript |
| --- | --- |
| <scripts src="___"~</script>$(selector).action(): | <script>~<script> |

`$`: Jquery라는 것을 정의

`(selector)` : “질의하거나 찾을” html 요소

`action()` : 이 요소가 수행할 기능

### 라이브러리 추가하기

- 라이브러리를 불러오는 방법 2가지
    1. 소스코드 다운 받기
    2. CDN으로 불러오기
    
    ```jsx
    <html>
    	<head>
    		<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
    	</head>
    	<body>
    		<button id="alert">Alert!</button>
    		<script src=".example.js"></script>
    	</body>
    </html>
    ```
    
    - 3번 라인에서 jQuery 라이브러리 추가
    - javascript 코드를 별도의 파일, example.js로 작성하고, src 속성을 사용하여 추가하는 방식을 사용

### click 함수

- 기존: html 태그에 onClick 속성을 추가하여 사용
- jQuery: 자바스크립트 코드만으로 click 이벤트 제어가 가능
- example.html
    
    ```jsx
    <html>
    	<head>
    		<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
    	</head>
    	<body>
    		<button id="alert">Alert!</button>
    		<script src="./example.js"></script>
    	</body>
    </html>
    ```
    
- example.js
    
    ```jsx
    $("#alert").click(function() {
    	alert("Button Clicked!");
    });
    ```
    
- alert라는 id를 가진 태그를 클릭했을 때 Button clicked!라는 alert이 화면에 표시
- 다른 태그의 click 이벤트를 발생시키는 용도로 사용할 수도 있다.
    
    ```jsx
    <html>
    	<head>
    		<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
    	</head>
    	<body>
    			<button id="alert">Alert!</button>
    			<button id="button2">Click me!</button>
    			<script src="./example2.js"></script>
    	</body>
    </html>
    ```
    
    - example2
    Button2라는 id를 가진 태그 클릭 시 alert라는 id를 가진 태그의 클릭이벤트 호출
    
    ```jsx
    $('#alert').click(function() {
    		alert('Button clicked!');
    });
    $('#button2').click(function() {
    		$('#alert').click();
    });
    ```
    

### html 함수

1. html 태그의 내용을 가져온다.
    - html 함수를 사용하여 demo-container라는 class를 가진 div 태그 안의 내용 가져오기
        
        ```jsx
        <html>
        	<head>
        			<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
        	</head>
        	<body>
        			<div class="demo_container">
        					<div class="demo-box">Demonstration Box</div>
        			</div>
        			<script src="./example3.js"></script>
        	</body>
        </html>
        ```
        
        - example3.js
        
        ```jsx
        alert($("div.demo-container").html());
        ```
        
2. html 태그의 내용을 변경한다.
    - 버튼을 누르면 demo-container 클래스를 가진 div 태그의 내용이 html 함수에 인자를 전달한 것으로 바뀌도록 하기
        
        ```jsx
        <html>
        	<head>
        			<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
        	</head>
        	<body>
        			<div class="demo_container">
        					<div class="demo-box">Demonstration Box</div>
        			</div>
        			<button id="btn">Click me!</button>
        			<script src="./example4.js"></script>
        	</body>
        </html>
        ```
        
        - example4.js
        
        ```jsx
        $("#btn").click(function() {
        	$("div.demo-container").html("<div> Button Clicked!</div>");
        }});
        ```
        

### Text 함수

1. html 태그의 텍스트 내용을 가져온다.
    - html 함수의 경우 태그 안의 태그를 포함한 모든 내용을 다루었지만, text 함수는 innerText처럼 내부의 text만 다룬다.
    
    ```jsx
    <html>
    	<head>
    			<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
    	</head>
    	<body>
    			<div class="demo_container">
    					<div class="demo-box">Demonstration Box</div>
    					<button id="btn">Click me!</button>
    			</div>
    			<script src="./example5.js"></script>
    	</body>
    </html>
    ```
    
    - example5.js
    
    ```jsx
    $("#btn").click(function() {
    	alert($("div.demo-box").text());
    });
    ```
    
2. html 태그의 텍스트 내용을 변경한다.

### remove 함수

- 태그 자체를 지우는 기능

```jsx
<html>
	<head>
			<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
	</head>
	<body>
			<div class="demo_container">
					<div class="demo-box">Demonstration Box</div>
					<button id="btn">Click me!</button>
			</div>
			<script src="./example6.js"></script>
	</body>
</html>
```

### empty 함수

```jsx
<html>
	<head>
		<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
	</head>
	<body>
			<div class="demo-box">Demonstration Box</div>
			<button id="btn">Click me!</button>
			<script src="./example7.js"></script>
	</body>
</html>
```

- example7.js

```jsx
$("#btn").click(function() {
	$("div.demo-box").empty();
});
```

- 버튼을 누르면 demonstration box가 삭제됨

### append 함수

- 선택한 태그 끝 부분에 입력한 컨텐츠를 추가한다.

```jsx
<html>
	<head>
		<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
	</head>
	<body>
			<div class="demo-box">Demonstration Box</div>
			<script>
				 $('div.demo-box').append('<p>Append Sample</p>');
			</script>
	</body>
</html>
```

### addClass & removeClass함수

- `appendClass`: 선택한 태그에 class를 추가한다.
- `removeClass`: 선택한 태그에서 class를 제거한다.
- `hasClass`: 선택한 태그가 해당 class를 가지고 있는지 확인한다.

```jsx
<html>
	<head>
		<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
		<style>
				.red {
						color: #ff0000;
				}
				.yellow {
						color: #ffff00;
				}
		</style>	
	</head>
	<body>
			<div class="demo-box">Demonstration Box</div>
			<button id="red-btn">Red</button>
			<button id="yellow-btn">Yellow</button>
			<script src="./example9.js"></script>
	</body>
</html>
```

- example9.js
    
    ```jsx
    $('#red-btn').click(function() {
    		$('div.demo-box').removeClass('yellow');
    		$('div.demo-box').addClass('red');
    });
    
    $('#yellow-btn').click(function() {
    		$('div.demo-box').removeClass('red');
    		$('div.demo-box').addClass('yellow');
    });
    ```
    

### val함수

- form의 값을 불러온다.
- form의 값을 설정한다.

```jsx
<html>
	<head>
		<script src="https://code.jquery/com/jquery-3.4.1.min.js"></script>
	</head>
	<body>
			<input type="text" id="inputBox">
			<div>
				<select name ="" id="selectBox">
					<option value="1">option1</option>
					<option value="2">option2</option>
					<option value="3">option3</option>
					<option value="4">option4</option>
				</select>
		<script src="./example11.js"></script>
	</body>
</html>
```

- example11.js
    
    ```jsx
    
    $("#inputBox").val("Hi hi");
    $("#selectBox").val(3);
    ```
    

# JQuery 응용 1 : To do List 기능

- 할 일을 기록할 수 있다.
- 저장된 일을 목록으로 보여준다.
- 할 일을 삭제할 수 있다.
- 완료 상태로 만들 수 있다.

## CSS 파일 추가하기

- 정의된 css 스타일이 많아지게 되면, 자연스레 html 코드가 길어지면서 가독성이 떨어지게 된다.
- 자바스크립트처럼 파일로 분리하여 저장하자
- `<style>` 태크를 적을 필요없이 태그 안의 내용만 옮기고 `<head>` 태그 안에 link 태그를 생성하여 아래와 같이 연결해준다.
    
    ```jsx
    <html>
    	<head>
    		<link rel="stylesheet" href="./todo.css" />
    	</head>
    ```
    

### 기본적인 화면 구성

- 사용자에게 할 일을 입력받을 input 박스
- 할 일을 보여줄 리스트(ul과 li 태그 사용)
- 각종 버튼들

### Todo

- `flex-grow` : 화면의 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬, 분산할 수 있는 방법을 제공하는 CSS3의 새로운 레이아웃 방식

```jsx
#inputBox {
	flex-grow: 1;
}
```

# 3. JQuery 응용 2: 동적화면

## JSON (Javascript Object Notation)

- 자바스크립트 객체를 자바스크립트 외부로 전송하기 위해 문자열 형태로 표현
- XML이나 HTML에 비해 데이터가 간결하고 사람이 이해하기 쉬움
⇒ JSON 형식의 데이터가 자바스립트의 객체의 문자열 표현방식이기 때문

| 자바스크립트 Object | JSON(Javascript Object Notion) |
| --- | --- |
| `var object = {
    name: "이름",
    age: 20,
    major: "GLS",
    friends: ["철수", "영희"]
): | {
  “name”:”이름”,
  “age”:20,
  “major”:”GLS”
  “friends”:[”철수”,”영희”]
} |
- JSON에서는 객체의 프로퍼티 이름에 반드시 큰 따옴표로 감싸줘야 한다.
- JSON ↔ Java script object
    - `JSON.parse`: JSON → Javascript object
    - `JSON.stringify`: Javascript object → JSON

## Data Attribute

- HTML 엘리먼트에 데이터를 저장하고 자바스크립트에서 불러와 사용 가능
- `$().data('key','value')` 로 값 저장
- `$().data('key')` 로 값 접근

`is` 함수: 대상 태그가 함수의 인자랑 같은지 체크해서 같다면 참, 아니라면 거짓을 반환
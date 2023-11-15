# 1회차 Javascript 변수와 연산자 2회차 Javascript 배열 3회차 Javascript 객체

Content: Week 8
Assignment: Yes
Lecture: Yes
STATUS: Note

# 1. 자바스크립트 변수와 연산자

## 자바스크립트 소개

- 웹 브라우저에서 동작하는 스크립트 언어
- HTML 요소 조작, 사용자 입력 처리 가능
- 가장 인기있는 프로그래밍 언어
    - 앱 개발
    - 서버측 프로그램 개발
    - 사물인터넷 개발 등
    - 다양한 방면에서 이용됨

## 자바스크립트 장점

- 복잡한 개발환경 없이 웹브라우저에서 코드 작성 및 실행 가능
- 데이터베이스부터 앱까지 모두 개발 가능
- 타언어에 비해 배우기 쉬움

## 변수 사용하기

### 변수란?

- 어떤 값을 저장하는 임시저장 공간
- 프로그램에서 값을 저장해야 할 때 사용
- `=` : 대입 연산자, 수학에서의 = 기호와는 다른 뜻을 가지고 있다.

### 형식

- `var {변수명} = {저장할 값}`

### 값 출력

- `console.log({출력할 값})` 입력 후 Enter

## 사칙 연산자

### 자바스크립트의 사칙 연산

- 덧셈, 뺄셈, 곱셈, 나눗셈

### 연산자 기호

- `+` : 더하기
- `-`: 빼기
- `*` : 곱하기
- `/` : 나누기
- `//` : 주석

### 연산 순서

- 수학과 동일
- 덧셈, 뺄셈보다는 곱셈, 나눗셈 먼저 실행
- 왼쪽에서 오른쪽으로 계산
- 중괄호, 대괄호 등은 구분하지 않고 (,)만 사용

### 증가/감소 연산자

- ++, — 연산자
    - 변수의 값을 1 증가/감소 시킴
- +=, -= 연산자
    - 변수의 값을 원하는 만큼 증가
    - a += 5 는 a = a + 5와 같은 결과
- *=, /= 연산자
    - a *= 5는 a = a * 5와 동일
    - a /= 2 는 a = a/5 동일

### 문자열 합치기

- 문자열 합치기 연산 가능
    - + 연산자로 문자도 연결 가능
    - + 연산자 여러 번 사용 가능
    
    ```jsx
    '안녕' + '하세요' = '안녕하세요'
    ```
    

### 비교 연산자

- 두 값의 대소 비교
- `==`: 같다
- `!=`: 다르다
- `>`: 초과
- `<`: 미만
- `>=`: 이상
- `<=`: 이하

### 논리 연산자

- 논리곱 (AND)
- 논리합 (OR)
- 부정 (NOT)

### 불리언 (Boolean)

- `true` : 참
- `false`: 거짓

### 논리 연산자

- `&&` : AND 연산자, 양쪽 피연산자 모두 true이면 true
- `||` : OR 연산자, 양쪽 피연산자 중 하나만 true여도 true
- `!` : NOT 연산자, true이면 false, false이면 true

# 2. 자바스크립트 배열 알아보기

## 배열 (Array)

### 배열이란?

- 변수 하나에 여러 개의 값을 저장할 수 있는 특별한 데이터형
- 각각의 값을 구분하기 위해 인덱스 값을 사용

### 배열 vs 일반 변수

- 일반 변수는 하나에 하나의 값만 저장
- 배열 변수는 하나에 여러 개의 값만 저장

### 배열 생성 문법

- `var 변수이름 = [데이터[...]];`

### 배열 생성 예제

- 다양한 데이터 형태의 값을 함께 저장 가능

```jsx
var student_name = ['홍길동', '성춘향', '이몽룡'];
var students = ['Gildong', '21900296', '이몽룡'];

```

### 배열 요소 접근

- `배열 이름[n];`
    - n은 배열 요소의 인덱스
    - 인덱스 값은 0부터 시작해서 배열크기 -1 까지의 값
    
    ```jsx
    student_name[1]; //성춘향
    ```
    

### 강의 수강생 목록 만들기

- 강의 수강생 목록 만들기
    
    ```jsx
    var students = ['이xx', '박xx', '최xx', '김xx']
    ```
    
- i 번째 수강생 가져오기
    
    ```jsx
    students[0]
    students[1]
    students[2]
    students[3]
    ```
    
- i 번째 수강생 변경하기
    
    ```jsx
    students[0] = '홍길동'
    ```
    
- 전체 수강생 수 확인하기
    
    ```jsx
    students.length
    ```
    
- 새로 등록한 수강생 추가하기
    
    ```jsx
    students.push('김아무개')
    ```
    
- i 번째 수강생 수강 철회하기
    
    ```jsx
    students.splice(i,1)
    ```
    
- 이름이 ‘이xx’인 학생의 인덱스(번호) 찾기
    
    ```jsx
    var index = students.indexOf('이xx')
    console.log(students[index])
    ```
    

### 네비게이션 만들기

- 갔던 길을 되돌아갈 수 있게 해주는 네비게이션
- 이동할 때마다 이동한 기록 저장
    
    ```jsx
    var navigation = []
    navigation.push('직진 200M')
    navigation.push('우회전')
    navigation.push('직진 50M')
    ```
    
- 목적지 도착 후 저장된 목록에서 거꾸로 꺼내기
    
    ```jsx
    navigation.pop()
    navigation.pop()
    navigation.pop()
    ```
    

### 복불복 게임 만들기

- 목록 중 임의의 요소 선택하기
- `Math.random()` : 0 ~ 0.99의 값을 random하게 얻을 수 있음
- `Math.random() * 10` : 0 ~  9.99…
- `Math.floor({값})`: 값의 소수부분 제거

```jsx
var students = ['김xx', '최xx', '박xx', '이xx']
stdents[Math.floor( Math.random() * students.length )]
```

## HTML 문서에 자바스크립트 코드 포함

- HTML의 `<script>...</script>`  안에 자바스크립트 코드 포함
- 포함된 코드는 문서가 열릴 때 실행됨

### HTML 태그 선택

- 자바스크립트로 HTML 요소를 조작하려면 조작할 요소를 선택해야 함
- 자바스크립트 변수에 HTML 요소 저장
- HTML 태그의 id, class, 태그 이름 등으로 요소를 찾을 수 있음.

### HTML 태그 선택

- `document.getElementByld({id})`: id를 검색
- `document.getElementByTagName({태그명})` : p, div 등 태그 이름으로 검색
- `document.getElementByClassName({class})`: 클래스 이름으로 검색

# 자바스크립트 객체

- 기능이 유사한 것들 모아둔 집합체
- 객체의 구성:
    - 속성 (Property)
    - method
    - e.g. 자동차 객체
    속성: 차의 색깔, 차의 모양…
    메써드: 전진, 후진, 좌회전, 우회전

## 객체

- 하나의 배열에 복합 데이터를 저장
e.g. 학생정보
학생 이름, 학생의 학번, 성별, 주소 등 같이 저장

### 자바스크립트 객체

- 객체는 키와 값(키 : 값)의 쌍으로 복합 정보를 저장
- 객체 저장 형식
    - `{”키1”: “값1”, “키2”: “값2”, … (생략)}`
- 저장된 요소에 접근 방식
    - 점 표기법:  `{객체명}.{키}`
    - 괄호 표기법: `{object}[key]`
- 객체의 한 키/값 쌍을 **프로퍼티라 함**

```jsx
var student = {
			'name':'홍길동', 'id':'219xxxx', 'gender':'남성',
			'address':'포항시 북구'
}

student.name
student.id
student.address
student["address"]
```

### 수강생 목록 예제 확장하기

```jsx
var student = [
		{'name':'홍길동', 'id':'219xxxx'}, 
		{'name':'홍길삼', 'id':'219xxxx'},
		{'name':'홍길사', 'id':'219xxxx'},
]

// 첫 번재 학생을 불러오고 그 학생의 이름 가져오기
student[0].name
// 두 번째 학생의 학번과 이름을 가져와 + 연산자로 연결
var id_name = student[1].id + ' ' + student[1].name

```

## 중첩 객체

- 객체의 프로퍼티의 값으로 객체를 가질 수 있음
- 객체 안에 다른 객체 저장 가능
e.g. 학생 객체
이름 프로퍼티 안에 성 프로퍼티와 이름 프로퍼티 가지고 있는 또 다른 객체 저장
수강 내역 프로퍼티에 배열로 과목 저장
- 접근: 점 표기법 연결하여 사용

```jsx
var student = {
	name: {
				first: '군오',
				last: '김'
	}
	classes: ['자바스크립트', '파이썬']
};

// 이름
console.log(student.name.last + student.name.first);
// 수강목록
console.log(student.classes[0] + ', ' + student.classes[1]);
```

## 자바스크립트 내장객체

- 자바스크립트에서 자주 사용하는 기능을 미리 구현해 놓은 객체
- Math, Number, Date, Array, Set

### Math 객체

- 수학적인 상수와 함수를 가진 객체
- 삼각함수의 각도는 radian 으로 입력

```jsx
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.ceil(1.5));
console.log(Math.round(1.5));
console.log(Math.floor(1.5));
console.log(Math.sqrt(2));
console.log(Math.sin( Math.PI / 2));
console.log(Math.cos( Math.PI / 2));
console.log(Math.tan( Math.PI / 2));
```

### Date 객체

- 날짜와 시간을 다루기 위한 객체
    
    
    | 코드 | 설명 |
    | --- | --- |
    | var today = new.Date() | 변수 today에 현재 날짜, 시간을 저장 |
    | var someday = new.Date('2019-06-03') | 변수 someday에 2019년 6월 3일을 저장 |
    | today.getFullYear() | today에 저장되어 있는 날짜의 4자리 연도를 반환 |
    | today.getMonth() | today에 저장되어 있는 달을 나타내는 0에서 11 사이의 수를 반환. 0은 1월 |
    | today.getDate() | today에 저장되어 있는 날짜의 ‘일’을 반환 |
    | today.getDay() | today에 저장되어 있는 날짜의 요일을 나타내는 0 ~ 6 사이의 수를 반환. 0은 일요일 |
    | today.getHours() | today에 저장되어 있는 시간을 반환 |
    | today.getMinutes() | today에 저장되어 있는 분을 반환 |
    | today.getSeconds() | today에 저장되어있는 초를 반환 |
- 현재 날짜와 시간을 구하거나 프로그램 실행 시간을 구할 수 있음

```jsx
var today = new.Date();
var day = ['일', '월', '화', '수', '목', '금', '토'];
alert(
		today.getFullYear() + '년' +
		(today.getMonth() + 1) '월' +
		today.getDate() + '일' +
		'(' + day[today.getDay()] + ')'
)
```

- 전자시계 만들기
    1. Date 객체를 이용해 현재 시간을 구함
    2. HTML 태그를 선택하고 innerText를 이용해 현재 시간 업데이트
    3. setInterval을 이용해 매초 시간 갱신

```jsx
<p id = "text" class = "content"></p>
<script>
	var element = document.getElementById('next');
	var tick = function() {
		var now = new Date();
		var time = now.getHours() + '시'
				+ now.getMinutes() + '분' + now.getSeconds() + '초';
		element.innerText = time;
	}
	setInterval(tick, 1000);
</script>
```
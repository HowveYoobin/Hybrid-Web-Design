# 1회차 HTML5 구조 2회차 HTML 기본태그 3회차 Table, Iframe 태그/

Content: Week 4
Assignment: Yes
Lecture: Yes
STATUS: Note

# 1. HTML5 구조

## HTML이란?

- Hyer Text Markup Language
- 웹페이지 기술을 위한 마크업 언어 (태그를 이용한 웹페이지 마크업)
- 다양한 종류의 태그를 사용하여 웹페이지의 내용과 구조를 담당

### HTML5란?

- 멀티미디어: 별다른 플러그인 없이 비디오 & 오디오 자체적 지원
- 그래픽: 3차원 그래픽 지원
- 통신: 단방향 통신 → 서버와의 양방향 통신
- 디바이스 접근: 카메라, 센서 등 제어 가능
- 오프라인 및 저장소: 오프라인에서도 동작 가능

### HTML5의 기본 구조

```html
<!DOCTYPE html>
<html>
	<head> 
		<meta charset = "utf-8">
	<title>Hello World</title>
	</head> 
	<body>
		<h1>Hello World<h1/>
		<p>안녕하세요! HTML5</p>
	</body>
</html>
```

- 일반적으로 태그들은 쌍으로 이루어져 있는데, <tag>…</tag>의 형태이다.
    - **<!DOCTYPE html>**: HTML의5의 문서 선언
    - **<html>**: HTML 문서의 시작
    - **<head>**: 이 태그 사이에는 메타 데이터나 문서 이름을 입력
        - **<meta …>**: head 태그 안에서 사용, 사용자에게는 나타나지 않음, 페이지마다 고유한 정보 전달, 구글이나 네이버와 같은 검색 엔진들은 이와 같은 메타 데이터를 읽어 들여 정보를 수집
        e.g. <meta name = “author” content = “kok”>: 웹페이지의 저자는 kok
        - **<charset = “utf-8”>**: 범용성 문자셋, 페이지가 어떻게 인코딩(문자나 기호들의 집합을 컴퓨터에서 표현하는 방법) 되었는지를 알려주는 정보.
        AWS의 EC2 서버에서는 웹페이지 작성 시 charset에 utf-8으로 설정해야만 한글 글자가 깨지지 않음
        e.g. 한글 문자셋: euc-kr, ISO-2022-kr, 일본어 문자셋: euc-jp, shift_js
    - **<body>**: 실질적으로 웹 브라우저 안에 출력될 내용들이 들어감
    - **<h1>~<h6>**: heading의 약자로써 신문 제목의 큰 글자 크기로 나타냄

# 2. HTML 기본태그

## HTML태그란?

### HTML

- 웹 사이트를 구성하는 마크업 언어

### 마크업 언어

- 태그를 사용하여 데이터 구성

### <시작태그>-내용-</종료태그>

## HTML 태그 사용 규칙

### tag의 바른 사용 규칙

- 여러 tag를 혼용할 때에는 짝을 맞춰서 사용
e.g. <B><I><U> HTML부터 웹앱까지 </U></I></B>

## HTML 문서를 구성하는 기본 태그

### <HTML>…</HTML>

- html 문서임을 나타냄
- html 문서의 모든 내용은 html 태그 내에 존재

### <HEAD>…</HEAD>

- html의 머리 부분에 해당
- 문서의 제목, 스타일 등을 정의

### <BODY>…</BODY>

- 구성하고자 하는 웹페이지의 내용이 들어가는 부분

### <TITLE>…</TITLE>

- Title 태그 안의 글자가 웹 브라우저 탭의 제목으로 나타남

## HTML 태그 알아보기

### 링크 삽입

```html
<a href = “URL”>링크할 대상 </a>
```

### 이미지 삽입

```html
<img src="이미지 URL/파일 주소" width="가로크기" height="세로크기">
```

### 이미지에 링크 삽입

```html
<a href = “URL”><img src="이미지 URL/파일 주소" width="가로크기" height="세로크기"></a>
```

### 폰트 스타일 지정

- 볼드체
    
    ```html
    <B> BOLD </B>
    ```
    
- 이탤릭체
    
    ```html
    <I> Italic </I>
    ```
    
- 언더라인
    
    ```html
    <U> Underline </U>
    ```
    
- 텍스트 크기 변경
    
    ```html
    <font-size = "크기">text
    ```
    
- 텍스트 색깔 변경
    
    ```html
    <font color = "16진수 RGB값">text</font>
    ```
    
    ![Untitled](1%E1%84%92%E1%85%AC%E1%84%8E%E1%85%A1%20HTML5%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%202%E1%84%92%E1%85%AC%E1%84%8E%E1%85%A1%20HTML%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%203%E1%84%92%E1%85%AC%E1%84%8E%E1%85%A1%20Table,%20432b31db72c04eaab8ca10f5c5c0c954/Untitled.png)
    
- 텍스트 글씨체 변경
    
    ```html
    <font face = "글씨체">text</font>
    ```
    
- 텍스트 크기, 글씨체, 색 한꺼번에 변경
    
    ```html
    <font size = "크기" color = "RGB값" face = "글씨체">text</font>
    ```
    

### 텍스트 형식

- 줄 바꿈
    
    ```html
    text <br>
    ```
    
- 문단 바꿈 (br보다 줄간격이 넓게 바꿈)
    
    ```html
    <p> text </p>
    ```
    
- 모든 문장 요소를 그대로 반영 (작성한 그대로)
    
    ```html
    <pre> text </pre>
    ```
    

### 배경 변경

- 배경색 변경
    
    ```html
    <body bgcolor="RGB값">
    ```
    
- 그림 삽입
    
    ```html
    <body background = "file path">
    ```
    

### 리스트 (list)

- 목록 요소
    
    ```html
    <li> text </li>
    ```
    
- 순차 리스트 (ordered list) (1, 2, 3, …)
    
    ```html
    <ol>
    	<li> text </li>
    	<li> text </li>
    									</ol>
    ```
    
- 비순차 리스트 (unordered list) (bullet point)
    
    ```html
    <ul>
    	<li> text </li>
    	<li> text </li>
    									</ul>
    ```
    

### 기타

- 띄어쓰기
    
    ```html
    text&nbsptext
    ```
    
- Indentation
    
    ```html
    <blockquote>text</blockquote>
    ```
    
- 가로줄
    
    ```html
    <hr width="두께" align="정렬" size="두께">
    ```
    
- 주석
    
    ```html
    <!--text-->
    ```
    

# 3. TABLE, IFRAME, LAYER 만들기

## Table의 기본 태그

### table의 기본 태그

```html
<table>…</table>
```

- 크기와 테두리 넓이 등의 속성 사용

### table 행 정의

```html
<tr>…</tr>
```

### table 열 정의

```html
<td> … </td>
```

## Table 태그

### 셀 텍스트 정렬

```html
<td valign="top"/"middle"/"bottom">
```

### 셀 텍스트 정렬

```html
<td halign="top"/"middle"/"bottom">
```

### 셀의 열 크기 설정

```html
<td colspan="#">
```

### 셀의 행 크기 설정

```html
<td rowspan="#">
```

### 셀 여백 설정

```html
<table cellspacing="#">
```

### 테이블 셀 색깔 변경

```html
<table bgcolor="RGB">
```

### table 경계선 정의

```html
<table border = #>
```

### table 정렬

```html
<table align="left"/"right"/"center">
```

### 예제

```html
<html> <body>
<table boarder = "3">
	<tr>
		<th>학과</th>    <th>학번</th>    <th>이름</th>
	</tr>
	<tr>
		<td>컴퓨터공학과</td>    <td>12345869</td>    <td>홍길동</td>		
	</tr>

	<tr>
		<td>정보통신학과</td>    <td>12345239</td>    <td>김한동</td>		
	</tr>							

	<tr>
		<td>전자공학과</td>    <td>122357254</td>    <td>이한동</td>		
	</tr>
</table>
</body></html5>				
```

## Iframe 태그

- 내부 프레임(inline frame)
- 하나의 HTML 문서 내에서 다른 HTML 문서를 보여줌
- <frame>과 비교
    - HTML5에서 제공하지 않음
    - <frameset> 태그 사이에 올 필요 없음
    - 독립적으로 <img> 태그와 같이 문서 내의 원하는 위치에 삽입 가능

### Iframe 태그 실습

```html
<iframe src = "URL" width = "600" height="400" name="iframe1"></iframe>
```

- 링크를 눌렀을 때 iframe에 웹페이지가 뜨도록 코딩하기 (유튜브 영상 참조 가능)
    
    ```html
    <a href="URL" target="abc1">링크이름</a><br><br>
    <iframe  src="URL" name="abc1" width="600" height="400"></iframe>
    ```
    

## Layer 형식

- 하나의 문서 내에서 여러 곳에 배치가 가능한 웹 페이지의 내용
- 레이어를 사용하면 기존의 태그로는 불가능했던 웹 페이지 구성요소의 자유로운 위치 지정 가능
- 자바스크립트를 이용하여 레이어의 이동, 감추기, 크기 변화, 스타일 등 레이어 조작 가능

### Layer에 필요한 태그 <div>

- <div> 태그의 역할
    - html 문서의 한 부분을 묶어 인위적으로 구조를 덧붙이는 역할
    - Class, ID 속성을 이용해 웹 페이지의 원하는 부분을 묶어 스타일 지정 가능
- <div> 태그
    - 블록레벨에 사용하여 문서의 블록을 묶는 역할
    - <div> 태그로 묶인 부분의 시작과 끝에서는 줄 바꿈

### Layer 정의 방법

- ID 속성: 스타일 정의
- Position 속성: 레이어가 나타날 위치 정의
    - 레이어 위치에 대한 기준을 지정
    - absolute: 문서 전체에 대한 절대적 위치 지정 (좌측상단: 0,0)
    - relative: 레이어가 서술된 곳을 기준으로 상대적 위치 지정
- Left, top 속성 값: 레이어 위치 지정
- Width, height 속성 값: 레이어 크기 지정

### Layer 정의 실습

```html
<html>
	<head><title>레이어 정의</title>
	<style>
			#place {position: absolute; left:40; top:20; width:320;
					background-color: rgb(255,220,220);
					border-color: white; border-width:1;}
	</style></head>
<body>
<div id="place">
			<h3>한동대학교 현동홀</h3>
			<p><img src="URL" width = "" height="" ALIGN = "left">경상북도 포항시 북구에 위치한 학교로.....</p>
	</div>
</body></html>
```

### 상대적 위치와 절대적 위치

- div 태그가 3개 → 3개의 레이어
- 학교 입구는 사진을 기준으로 한 위

```html
<html>  <head><title>절대적 위치와 상대적 위치</title>
	<style>
	#name0 {  position: absolute; left:40px; top:60px; }
	#name1 {  position: absolute; left:200px; top:132px; }
	#name2 {  position: relative; left:120px; top:-60px; }
	</style>  </head>
<body>

		<div id="name0"><p>-- 생활관 -- </p>
		<div id="name1"><p>-- 평봉필드 -- </p>
		<p><img src="URL" width = "" height="" alt = "한동대학교 캠퍼스 맵" border="3"></p>
		
		<div id="name2"><p>-- 학교 입구 -- <br>  </p>
</div>
</body></html>
```
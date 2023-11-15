# 1회차 form 태그 2회차 멀티미디어 처리 태그 3회차 AWS http 설치 및 웹게시

Content: Week 5
Assignment: Yes
Lecture: Yes
STATUS: Note

# 1. Form 태그

## Form 태그란?

- 사용자로부터 어떠한 정보를 받고 싶을 때 사용
- 숙박부, 주문 양식, 설문조사, 피드백 등

## Form tag의 양식

- `<form>` : form의 시작을 알리는 tag
- `<input>` : 다양한 방법 중 하나로 사용자로부터 정보를 입력받음
- `</form>` : form의 끝을 알리는 tag

## Form 기본 태그

### Action

```html
<form action = 'URL'> 
```

- form을 통해 실행하고자 하는 액션

### Input

```html
<input name = '이름' type = '종류'>
```

- 입력할 수 있는 영역
- name 속성으로 이름 설정
- type 속성으로 종류 설정
    - “text” : 텍스트 박스
    - “submit” : 텍스트 박스 입력 내용 전송하기 위한 버튼
    - ‘button’ : 버튼 생성
    - ‘checkbox’: 여러개 선택 가능
    - ‘radio’:  사용자의 선택을 하나만 입력 받을 수 있음
    - ‘password’: 입력 정보를 비밀 형식으로 받을 수 있음
    - ‘color’: 색상을 선택 가능
    - ‘date’: 날짜 (연도-월-일) 선택 가능
    - ‘file’ : 파일을 첨부 받을 수 있음.
    - ‘number’ : min과 max로 입력 가능한 숫자 범위 지정 가능
- 다양한 input type을 사용한 예

```html
<!DOCTYPE html>
<html>
<body>

<h2> 설문조사 </h2>
<form> <!--action 속성은 생략해서 서버로 전송되지는 않음-->
	이름: <input type = 'text'> <br>
	비밀번호: <input type = "password" <br>
	학년을 선택하세요 <br>
	<div><input type = 'radio'>1학년<br>
	<input type = 'radio'>2학년<br>
	<input type = 'radio'>3학년<br>
	<input type = 'radio'>4학년<br></div><br><br>
	담당자에게 하고 싶은 말을 쓰세요<br>
	<textarea></textarea>
	<input type = 'submit'>
	<iput type = 'reset'>
</form> </body></html>
```

### Select

```html
<form>
	옵션을 선택하십시오. <br>
	<select name = "name">
			<option value = "option1">option1</option>
			<option value = "option2">option2</option>
			<option value = "option3">option3</option>
		</select>
	<input type='submit'>
</form> </body> </html>
```

- `<select name = 'name'>` : name 속성으로 이름 설정
- `<option value = 'name'>` : 선택할 수 있는 속성 추가 태그, value 속성을 통해 속성 이름 부여

### Text area

```html
<form>
메세지를 남겨주세요. <br>
	<textarea name = 'message' rows = '10' cols = '50'>
Please leave a message.
		</textarea>
	<input tupe='submit'>
</form> </body> </html>
```

- 텍스트를 입력할 수 있는 영역 생성
- name 속성 이용해 이름 설정 가능
- rows와 cols 이용해 크기 설정 가능

### Button

```html
<h2> form 태그 연습 </h2>

<button type = "button" onclick = "alert('클릭 성공!')"> 클릭해주세요!! </button>
		</body> </html>
```

- onclick으로 버튼을 클릭했을 시에 어떤 이벤트를 실행할 것인지에 대한 설정 가능

### color

### 예제

```html
<!DOCTYPE html>
<html>
<body>

<h2> form 태그 연습 </h2>

<form action = 'frame.html'>
	당신의 이름은 무엇입니까?
	<input name = "first name" type = 'text'>
	<br><br>
	<input type='submit'>
</form> </body></html>
```

# 2. 멀티미디어 처리 태그

## 멀티미디어란?

- 여러 형식의 정보 콘텐츠와 정보처리를 사용하여 사용자에게 정보를 제공하는 미디어
e.g. 이미지, 사운드, 비디오, 애니메이션 등
- 웹 페이지는 종종 다양한 멀티미디어 요소를 포함

## 멀티미디어 태그 활용

### <video>

```html
<!DOCTYPE html>
<html>
<body>
<h2> Video 태그 예제 - AVI </h2>
<video width = '400' height = '400' controls>
	<source src = "handong.avi">
</video> </body> </html>
```

- 다른 종류의 영상 파일이름 및 확장자도 가능 (MP4 등)
- controls / autoplay 중 선택하여 자동재생도 가증

### <audio>

```html
<!DOCTYPE html>
<html>
<body>
<h2> Audio 태그 예제 </h2>
<audio controls>
	<source src = 'handong.mp3'>
</audio>
</video> </body> </html>
```

## 이미지 맵(image map)

- 한 개의 이미지 파일에 여러 개의 링크를 할당
- 그림을 단순히 연결 시킨 것이 아니라 그림의 부분들이 각기 다른 링크로 연결되어 있음
- 링크와 연결된 이미지의 영역: 핫 스팟 (hotspot)
- 정의하고자 하는 영역에 따라 다양한 도형으로 설정 가능

### 이미지 맵 태그 사용방법

- `<map_name = '이름'>...</map>`
    - 이미지 맵을 사용하기 위한 정보 정의
    - 이름은 여러 이미지 맵을 사용할 경우 해당 이미지 맵 정보를 찾을 수 있도록 함.
- `<area>`
    - 이미지 맵의 링크 영역을 정의
    - 종료 태그 없이 단독 태그로 사용
    - <map> … </map> 내부에서만 사용

### 이미지 맵 태그 속성

- `<map shape = 'rect'/'circle'/'poly'>`
    - 이미지 맵을 사용하기 위한 정보 정의
- `<map href = 'URL'>`
    - 정의된 영역을 마우스로 클릭했을 때 연결될 문서를 지정
- `<map coords = "좌표값">`
    - shape에 따른 영역의 실제 좌표 정의
        - circle → coord = “X, Y, R(반지름)”
        - polygon → coord  = “X1, Y1, X2, Y2,… Xn, Yn” 꼭지점 개수만큼의 X, Y 좌표)
        - rectangle → coord = “X1, Y1(좌측 상단 꼭지점 좌표), X2, Y2 (우측 하단 꼭지점 좌표)”
    - 실제 이미지에서 왼쪽 위의 좌표를 (0,0) 기준으로 하여 오른쪽으로는 X좌표 증가, 아래쪽으로는 Y좌표 증가
    - 좌표 값을 모를 때는 그림판으로 그림을 열어서 마우스를 대어보고 좌측 하단의 좌표를 확인

### 예제

```html
<html>
	<body>
		<h2> 이미지맵 태그 활용 </h2>
		<p><img src = 'image URL' usemap = '#ImageMap1"></p>

	<map name  "ImageMap1">
	<area shape = 'circle' coords = '120, 250, 80' href = "URL">
	<area shape = 'poly' coords = '400, 140, 450, 180, 400, 220, 360,  220, 360, 220, 320, 180, 360, 140' 
				href = "URL">
	<area shape = 'rect', coords = '600, 450, 200, 250' href = "URL" >
	</map>
</body>
</html>
```

# 3. AWS HTTPD 설치 및 웹 게시

## Httpd(Hyper text transfer protocol Daemon)란?

- HTTP 서비스 제공 데몬 서버
- 포트: 80
    - 서버 컴퓨터가 다양한 서비를 지원하기 위해 각기 다른 문들을 열어 두고 그 문들을 통해 서비스를 지원한다고 보면 되는데 ssh 프로토콜은 22번으로, http 프로토콜은 80번 포트로 각각 지원한다.
- 서버 패키지: apache
    - 서버에서 웹 페이지 전송 서비스를 제공해주는 서버 프로그램

### Httpd의 개념

- 강좌 시작 시 생성한 EC2 인스턴스는 일종의 물리적 서버 컴퓨터의 개념
- httpd는 서버 컴퓨터에서 웹 서비스 제공을 위해 동작하는 서버 프로그램

### Httpd 생성하기

1. Putty 프로그램 ec2-user로 로그인
2. 명령 프롬프트에서 yum 패키지를 최신으로 업데이트하는 명령을 실행.
3. `sudo yum update` 명령 입력 & `Enter` → yum 패키지를 최신으로 업데이트
4. `sudo yum install httpd` 입력하여 httpd 설치
5. 설치 완료 시 /var/www/ 디렉토리 생성됨
    - /var/www/html 디렉토리가 웹 루트 디렉토리임
    - Html 디렉토리 안에 웹에 게시할 html 문서를 첨부
6. Httpd 설치 후 `pwd` 입력 후 엔터
7. `cd/var/www` 입력하여 웹 루트 디렉토리로 이동
8. `cd html` 로 html 디렉토리로 이동

### 접근 권한 설정 변경

- Httpd 초기 설치 시 사용자에게 /var/www 디렉토리의 수정 권한이 없음
1. `sudo groupadd www` 입력하여 www 디렉토리를 group에 추가 & html 디렉토리에 대한 수정 권한 부여
2. `sudo usermod -a -G www ec2-user` 을 입력하여 사용자 ec2-user를 www 그룹에 포함시키기
3. 작업 마무리 후 `exit` 입력하여 putty 종료
4. 다시 putty 로그인하여 `groups` 실행하여 www 그룹과 ec2-user가 있는지 확인
5. ec2-user에 root가 가진 디렉토리와 파일 수정 접근 권한을 허락해주기 위해 다음 명령어를 차례로 입력해 주기
`sudo chown -R root:www /var/www
sudo chown -R ec2-user:apache /var/www
sudo chmod 2774 /var/www`

### Httpd 서비스 실행

1. Httpd 서버 프로그램 세팅
`sudo service httpd start`
    - 한 번 실행하면 파일 수정되어도 자동 반영
2. 브라우저 창에 자신의 IP 주소 입력 웹브라우저에서 호스트에 접속하기
    - http 프로토콜에 대한 접속이 막혀있어 html 디렉토리에 index.html 파일이 있음에도 불구, 실제로는 접속이 되지 않음
    - 웹 서버 인스턴스 포트 설정: AWS 웹사이트로 접속 → 보안 그룹 태그를 선택 → 인스턴스 선택 → 하단 인바운드 탭 선택 → 편집 버튼 → 인바운드 규칙 편집 창에서 규칙 추가 버튼 클릭하여 https 포트 80 추가

### 브라우저로 웹서버 게시

- 웹 브라우저 게시 홈페이지 파일: index.html
    - /var/www/html 폴더에 index.html이 반드시 존재해야 하며, 이를 홈페이지라고 부름

### Yum (yellowdog Updater Modified)이란?

- RPM (Red Hat Package Manage) 기반의 시스템을 위한 자동 업데이터 경 패키지 설치/제거 도구
- 온라인 저장소에서 업데이트 된 패키지들을 검사하고, 다운로드하여 설치까지 처리해주는 텍스트 기반의 업데이트 명령어
- 간단하게, 다운 받아 설치해주는 툴
-
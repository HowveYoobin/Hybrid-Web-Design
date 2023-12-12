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

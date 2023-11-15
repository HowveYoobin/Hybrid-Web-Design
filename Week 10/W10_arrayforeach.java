// 배열의 요소를 순서대로 함수에 전달하여 호출 
var balls = ['축구공', '야구공', '배구공', '농구공'];
balls.forEach(throwBall);

// 공을 던지는 함수
function throwBall(ball){
    console.log(ball + '을 던졌다!');
}
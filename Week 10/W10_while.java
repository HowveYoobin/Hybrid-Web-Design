// 응답자가 정답을 맞출 때까지 계속 알림창을 띄우는 퀴즈 프로그램
var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 10);
var answer;

while (answer != (a + b)) {
    answer = prompt( a + '+' + b + '=?');
}

console.log("정답입니다!");
// 성적 계산하기
// 성적을 입력 받아 점수에 따라 A ~ D 부여

var score = prompt("성적을 입력하세요");
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("D");
}
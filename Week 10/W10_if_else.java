// 학생이 수강 중인지 검사하기
var students = ["홍길동", "박철수", "김군오"];
// prompt를 통해 사용자에게 입력값을 받을 수 있음
var name = prompt("이름을 입력하세요.");

if (students.includes(name)) {
    console.log(name + '학생은 현재 수강중입니다.');
} else {
    console.log(name + '학생은 현재 수강중이 아닙니다.');
}
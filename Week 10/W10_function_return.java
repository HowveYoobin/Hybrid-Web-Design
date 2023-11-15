// 값을 반환하는 함수

function square(x) {
    return x * x;
    // 아래 라인은 실행되지 않음
    console.log(x);
}

var value = square(4);
console.log(value);
//함수에 함수 전달하기
console.log(square(square(2)));
// 배열의 원소를 순서대로 꺼내 주어진 함수에 전달하여 참인 요소만 반환
var numbers = [1, 2, 3, 4, 5];
var even = numbers.filter(function(value, index) {
    return value % 2 == 0;
});

console.log(even);
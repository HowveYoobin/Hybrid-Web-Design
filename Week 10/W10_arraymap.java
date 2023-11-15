// 각 원소를 하나씩 꺼내서 함수를 실행하고
// 함수가 반환한 값들로 이루어진 새 배열을 만들어 줌
var numbers = [1, 2, 3, 4, 5];
var twice = numbers.map(function(value, index) {
    return value * 2;
});

console.log(twice)
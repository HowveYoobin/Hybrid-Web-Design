// 함수를 인자로 받는 함수
function operator(x, y, func){
    // 첫 번째와 두 번째 인자를 세 번째 인자인 함수에 전달
    return func(x, y);
}

function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}

console.log(operator(2, 2, add));
console.log(operator(2, 2, subtract));

// 가장 큰 수를 반환하는 함수 만들기
function max(arr) {
    var _max = -999999; //아주 작은 수
    for (var i of arr) {
        if ( i > _max) {
            _max = i
        }
    }

    return _max;
}

console.log("가장 큰 수는 " + max([5, 7, 10, 3, 2]) + " 입니다.");
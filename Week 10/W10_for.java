// 평균 점수 구하기

var scores = [90, 92, 84, 98, 70];
var sum = 0;

for (var score of scores) {
    sum += score;
}
console.log('총점: ' + sum);
console.log('평균: ' + (sum / scores.length));

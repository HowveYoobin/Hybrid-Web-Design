var express = require("express");
var app = express();
var router = require("./W13_router.js");
var booksRouter = require('./books.js');

// express 미들웨어 등록
// 요청이 들어오면 response로 넘겨 OK를 출력하도록 함
// 콜백함수가 하나이기 때문에 next는 사용 안함
app.use(express.json());
// /router 요청이 올때만 실행되도록 하기
app.use(express.static('public'))
app.use('/router', router); 
app.use('/books', booksRouter);

app.listen(3000, function() {
    console.log('3000포트로 웹서버 실행!');
});
var express = require("express");
var app = express();

// to do list를 저장할 변수
var todos = [];

app.use(express.json());
app.use(express.static("public_1"));

app.listen(3000, function() {
    console.log("App listening on port 3000!")
});

// 클라이언트로부터 todo list를 받아 todo 변수에 저장하는 API만들기
// post 요청을 사용하여 request body로부터 데이터 받아오기
app.post("/todos", function(req, res) {
    // request body에 있는 json 문자열이 json 미들웨어에 의해 자동으로 자바스크립트 객체 변환되어 req.body에 저장됨
    todos = req.body.todos; // todos 프로퍼티 값을 todos 변수에 저장
    console.log(req.body);
    res.status(200).send({message:"success"}); // 요청이 정상적으로 수행되었다는 의미로 200번 코드와 success라는 메시지 전송
});

// 저장된 todos의 값을 클라이언트로 보내주는 API
app.get("/todos", function(req, res) {
    res.status(200).send(todos);
});

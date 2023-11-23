var express = require("express");
// 라우터 미들웨어 생성
var router = express.Router();

// 요청을 처리할 URI 전달
router.get('/', function(req, res, next) {
    res.send("파라미터: " + req.params);
});

// 미들웨어 함수 등록
router.post('/', function(req,res,next) {
    res.send("제목: " + req.body.title);
});

router.put('/', function(req, res, next) {
    res.send("PUT /");
});

router.delete('/', function(req, res, next){
    res.send("Year: " + req.query.year);
});

module.exports = router;
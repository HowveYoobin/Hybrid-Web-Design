var express = require("express");
var router = express.Router();

var books = [];
var id = 1;

// 단순히 books 배열을 돌려줌
router.get('/', function(req, res, next) {
    res.send(books);
});

// 새 도서 등록
router.post('/', function(req, res, next) {
    // 새 도서의 정보를 http id 형태로 전송 받음
    var book = req.body;
    // id를 id 변수에 저장된 값으로 저장
    book.id = id;

    // books 배열에 새 책을 할당하고 성공하면 id를 +1
    books.push(req.body);
    id += 1;
    // 새 책 등록은 값을 반환할 필요가 없으므로 200 status만 전송
    res.sendStatus(200);
});

// 도서 수정: router parameter로 수정하려는 도서의 id 받아오기
router.put('/:id', function(req, res, next) {
    // 배열에서 해당하는 도서의 index 찾기
    var index = books.findIndex(function(book) {
        return book.id == req.params.id;
    });
    // 해당 책의 인덱스를 교체 (교체/삭제하려는 index, 교체/삭제하려는 원소의 개수, 교체할 목록을 전달)
    books.splice(index, 1, req.body);
    res.sendStatus(200);
});

// 도서 삭제: router parameter로 삭제하려는 도서의 id 받아오기
router.delete('/:id', function(req, res, next) {
    var index = books.findIndex(function(book) {
        return book.id == req.params.id;
    });
    // 세번째 인자 생략하여 책을 삭제
    books.splice(index, 1);
    res.sendStatus(200);
});

module.exports = router;

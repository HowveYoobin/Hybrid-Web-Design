var title = $("#title");
var author = $("#author");
var save = $("#save");
var list = $("#list");

function getBooks() {
    $.getJSON('/books') 
    .done(function(books) {
        // 서버 호출 성공 시 list를 비워줌
        list.empty();
        // 서버에서 받은 books 변수를 순회
        for (var book of books) {
            // li 태그 만들기
            var li = $("<li />");
            // Book 객체 등록
            li.data("book", book);
            li.text(book.title + '(' + book.author + ')');
            // li 태그를 누르면 책 삭제
            li.click(function(event) {
                var book = $(event.target).data("book");
                deleteBook(book.id);
            });

            list.append(li);
        }
    });
}

function createBook() {
    $.ajax('/books', {
        type: "POST",
        data: JSON.stringify({
            title: title.val(),
            author: author.val()
        }),
        contentType: "application/json; charset=utf-8"
    })
    .done(getBooks)
}

function deleteBook(id) {
    $.ajax('/books/'+id, {
        type:'DELETE'
    })
    .done(getBooks)
}

save.click(createBook);
getBooks();
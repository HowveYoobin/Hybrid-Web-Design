var menu = $('#sidemenu li');
var content = $('#content');

// 클릭 이벤트 등록 --> li 태그 중 하나를 클릭하게 되면 이벤트 발생
menu.click(function(event) {
    var url = event.target.innerText + '.html';
    $.ajax(url)
        .done(function(html) {
            content.html(html);
        });
});


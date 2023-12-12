// JSON 변수 선언
var todos = [];
var options = {
    date: new Date(),
    mode: "datetime"
};

$.ajax("http://localhost:3000/todos").done(function(result) {
    console.log(result);

    todos = result;
    // Object.keys로 해당 JSON 객체의 key들을 배열로 반환
    for (const todo of Object.keys(todos)) {
        $(".contents ul").append(liTemplate(todo.text, todo.checked));
    }
});

function onSuccess(date) {
    // 저장이 완료되면 inputBox에 val 함수를 사용하여 text 지워주기
    var text = $('#inputBox').val();
    // 할 일의 내용이 key로, 완료 여부를 나타내는 true/false 값을 value로 저장
    todos.push({ text: text, checked: false, date: date});
    $("#inputBox").val("");
    console.log(todos);
    $(".contents ul").append(liTemplate(text, false, date)); 
    
    cordova.plugins.notification.local.schedule({
        title: "Todo list",
        text: text,
        trigger: {at: date }
    });
    
    saveTodos();
}

// add 버튼이 클릭되면 input 박스에서 텍스트를 읽어와 todos에 저장
$("#addButton").click(function() {
    datePicker.show(options, onSuccess, onError);
});

function inputTemplate(text, checked) {
    var inputTag = $('<input type="checkbox" id="checkBox">');
    inputTag.attr("checked", checked);
    return inputTag;
}

function buttonTemplate(text) {
    var buttonTag = $('<button id="deleteButton">X</button>');
    return buttonTag;
}

// 어떤 li 태그를 지워야하는지 구분하기
function liTemplate(text, checked, date) {
    var li = $("<li></li>");

    li.append(inputTemplate(text, checked));
    li.append(text);
    li.append(buttonTemplate(text));
    li.append(date.toLocalSTring("ko-KR", {timeZone: "Asia/Seoul"}));

    // click 함수의 인자에는 익명 함수 전달, 인자를 입력하지 않아도 되지만, 입력한다면 첫 번째 인자를 통해 event에 대해 전달 받음
    li.click(function(event) {
        // 어떤 태그에 클릭 이벤트가 발생했는지 쉽게 구분하기 위해 el이라는 변수에 event.target 저장
        var el = $(event.target);
        var index = li.index("li");
        console.log(index);

        if (el.is("button")) {
            todos.splice(index, 1);
            $("li")[index].remove();
            console.log(todos);
        } else if (el.is("input[type='checkbox']")) {
            var isChecked = el.is(":checked");
            // 체크가 되었을 때
            if (isChecked) {
                $($("li")[index]).addClass("checked");
                todos[index].checked = true;
            } else {
                // 체크가 해제되었을 때
                $($("li")[index]).removeClass("checked");
                todos[index].checked = false;
            }
        }

        saveTodos();
    });

    return li;
}

// Jquery의 ajax를 사용하여 주어진 API 주소로 POST 요청을 날리는 함수
function saveTodos() {
    $.ajax({
        url: "http://localhost:3000/todos",
        method: "POST",
        data:JSON.stringify({ todos: todos }),
        dataType: "json",
        contentType: "application/json"
    }).done(function() {
        console.log("POST done");
    });
}
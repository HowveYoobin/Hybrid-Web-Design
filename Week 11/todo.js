// JSON 변수 선언
var todos = {};

// add 버튼이 클릭되면 input 박스에서 텍스트를 읽어와 todos에 저장
$("#addButton").click(function() {
    // 저장이 완료되면 inputBox에 val 함수를 사용하여 text 지워주기
    var text = $('#inputBox').val();
    // 할 일의 내용이 key로, 완료 여부를 나타내는 true/false 값을 value로 저장
    todos[text] = false;
    $("#inputBox").val("");
    console.log(todos);

    $(".contents ul").append(liTemplate(text));
});

function inputTemplate(text) {
    var inputTag = $('<input type="checkbox" id="checkBox">');
    inputTag.data("value",text);
    return inputTag;
}

function buttonTemplate(text) {
    var buttonTag = $('<button id="deleteButton">X</button>');
    buttonTag.data("value", text);
    return buttonTag;
}

// 어떤 li 태그를 지워야하는지 구분하기
function liTemplate(text) {
    var li = $("<li></li>");

    li.attr("value", text);
    li.append(inputTemplate(text));
    li.append(text);
    li.append(buttonTemplate(text));

    // click 함수의 인자에는 익명 함수 전달, 인자를 입력하지 않아도 되지만, 입력한다면 첫 번째 인자를 통해 event에 대해 전달 받음
    li.click(function(event) {
        // 어떤 태그에 클릭 이벤트가 발생했는지 쉽게 구분하기 위해 el이라는 변수에 event.target 저장
        var el = $(event.target);
        console.log(el.data("value"));

        if (el.is("button")) {
            delete todos[text];
            $(`li[value='${text}']`).remove();
            console.log(todos);
        } else if (el.is("input[type='checkbox']")) {
            var isChecked = el.is(":checked");
            // 체크가 되었을 때
            if (isChecked) {
                $(`li[value='${text}']`).addClass("checked");
                todos[text] = true;
            } else {
                // 체크가 해제되었을 때
                $(`li[value='${text}']`).removeClass("checked");
                todos[text] = false;
            }
        }
    });

    return li;
}
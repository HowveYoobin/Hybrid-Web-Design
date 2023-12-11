var express = require("express");
var app = express();

var messages = [];

app.use(express.json());
app.use(express.static("public"));

app.listen(3000, function () {
console.log("3000 포트로 웹서버 실행!");
});

app.post("/send", function (req, res) {
    var message = {
    sender: req.body.sender,
    ko: req.body.ko,
    en: req.body.en,
    };
    
    console.log(message);
    
    // messages.push(message);
    
    // res.status(200).send({ message: "Success" });
    
    var options = {
        url: "https://openapi.naver.com/v1/papago/n2mt",    
        form: {
            source: message.ko.length == 0 ? "en" : "ko",
            target: message.ko.length == 0 ? "ko" : "en",
            text: message.ko.length == 0 ? message.en : message.ko,
        },
        headers: {
            "X-Naver-Client-Id": "EkBD2UInrpErYKt9cStX",
            "X-Naver-Client-Secret":"PpLAb1KgYl" ,
            "Content-Type": "application/x-www-form-urlencoded; charset=UT-8",
        },
    };
    request.post(options, function (error, response) {

        var result = JSON.parse(response.body).message.result;
        
        message.ko = message.ko.length == 0 ? result.translatedText : message.ko;
        message.en = message.en.length == 0 ? result.translatedText : message.en;
        
        console.log(message);
        messages.push(message);
        res.status(200).send({ message: "Success" });
        
    });   
});

app.get("/receive", function (req, res) {
    var result = { total: messages.length, messages: [] };
        
    if (messages.length > req.query.from) {
        result.messages = messages.slice(req.query.from);
    }

    res.status(2).send(result);    
});
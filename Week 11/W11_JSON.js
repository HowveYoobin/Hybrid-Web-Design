var obj = {
    a: "JSON",
    b: "NOSJ",
    arr: [1, 2, 'test']
}
console.log(obj);
// {a: 'JSON', b: 'NOSJ', arr: Array(3)}

var json = JSON.stringify(obj);
console.log(json);
// {"a":"JSON","b":"NOSJ","arr":[1,2,"test"]}

var newObj = JSON.parse(json);
console.log(newObj);
// {a: 'JSON', b: 'NOSJ', arr: Array(3)}
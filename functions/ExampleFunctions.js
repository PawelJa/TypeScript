var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        this.msg = 'Witaj swiecie';
        this.hello4 = function (message) { return console.log('Witaj swiecie, fukncja fat arrow - hello4' + message); };
        this.hello5 = function () { return console.log('Witaj swiecie, funkcja fat arrow - hello5'); };
        this.hello6 = function (message) {
            return 'Witaj swiecie, funckaj hello6' + message;
        };
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return 'Witaj swiecie, funkcja hello';
    };
    ExampleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.hello2 = function (message, message2) {
        console.log(message + " -- " + message2);
    };
    ExampleFunctions.prototype.hello3 = function (message, message2) {
        if (message2 === void 0) { message2 = 'hello3'; }
        console.log(message + " -- " + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();
example.hello1('Witaj swiecie, hello1');
example.hello2('Witaj swiecie', 'hello2');
example.hello2('Witaj swiecie bez drugieg param');
example.hello3('Witaj swiecie');
example.hello4('wywolana');
example.hello5();
console.log(example.hello6('fat arrow with param'));

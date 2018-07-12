var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        this.msg = 'Witaj swiecie';
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return 'Witaj swiecie, funkcja hello';
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();

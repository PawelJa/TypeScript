var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            console.log(i_1);
        }
        console.log('Wypisz i: ' + i);
    };
    LetConstVar.prototype.checkIf = function () {
        var a = 'jestem A';
        if (true) {
            var b = 'jestem B';
            console.log(b);
            console.log(a);
        }
        console.log(b);
    };
    return LetConstVar;
}());
var example = new LetConstVar();
example.printNumber();

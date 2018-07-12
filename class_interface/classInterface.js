var ClassInterface = /** @class */ (function () {
    function ClassInterface(msg) {
        this.msg = "Hello";
    }
    ClassInterface.prototype.printMe = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var example = new ClassInterface();
example.printMe();
var dog = ({
    name: 'Reksio',
    age: 3,
    color: 'szary'
});
console.log(dog);
console.log(dog.name);
var json = '{ "name" : "Max", "age" : "4", "color" : "red", "date" : "2017-12-31" }';
var myDog = JSON.parse(json);
console.log(myDog);

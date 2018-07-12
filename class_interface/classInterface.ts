class ClassInterface {

    msg: string = "Hello";

    constructor(msg?: string) {

    }

    printMe() {
        console.log(this.msg);
    }
}

let example = new ClassInterface();
example.printMe();

interface Dog {
    name: string;
    age: number;
    color: string;
    date?: Date;
}

let dog: Dog = ({
    name: 'Reksio',
    age: 3,
    color: 'szary'
})

console.log(dog);
console.log(dog.name);

let json = '{ "name" : "Max", "age" : "4", "color" : "red", "date" : "2017-12-31" }';
let myDog: Dog = JSON.parse(json);

console.log(myDog);
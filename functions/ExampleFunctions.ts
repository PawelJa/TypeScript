class ExampleFunctions {
    msg: string = 'Witaj swiecie';

    showMsg(): void {
        console.log(this.msg);
    }

    hello(): string {
        return 'Witaj swiecie, funkcja hello'
    }

    hello1(message: string) {
        console.log(message);
    }

    hello2(message: string, message2?: string) {
        console.log(message + " -- " + message2);
    }

    hello3(message: string, message2 = 'hello3') {
        console.log(message + " -- " + message2);
    }

    hello4 = message => console.log('Witaj swiecie, fukncja fat arrow - hello4' + message);

    hello5 = () => console.log('Witaj swiecie, funkcja fat arrow - hello5');

    hello6 = (message: string): string => {
        return 'Witaj swiecie, funckaj hello6 ' + message;
    }

}

var example = new ExampleFunctions();
example.showMsg();
example.hello1('Witaj swiecie, hello1');
example.hello2('Witaj swiecie', 'hello2');
example.hello2('Witaj swiecie bez drugieg param');
example.hello3('Witaj swiecie');
example.hello4('wywolana')
example.hello5();
console.log(example.hello6('fat arrow with param'));
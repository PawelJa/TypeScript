class ExampleFunctions {
    msg: string = 'Witaj swiecie';

    showMsg() {
        console.log(this.msg);
    }

    hello() {
        return 'Witaj swiecie, funkcja hello'
    }

}

var example = new ExampleFunctions();
example.showMsg();
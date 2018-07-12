class LetConstVar{

    printNumber() {
        let i = 99;

        for (let i=0; i< 3; i++) {
            console.log(i);
        }
        console.log('Wypisz i: ' + i);
    }
    
    checkIf() {
        let a ='jestem A';

        if(true) {
            var b = 'jestem B';
            console.log(b);
            console.log(a);
        }
        console.log(b);
    }

    showConst() {
        const num = 100;
        console.log(num);
    }
}

let example = new LetConstVar();
example.printNumber();
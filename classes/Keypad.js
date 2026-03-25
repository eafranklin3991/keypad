class Keypad {
    constructor() {
        this.passCode = [];
        this.genRandCode();
    }

    genRandCode() {
        const passCode = [];
        const arr = [0,1,2,3,4,5];
        for (let i = 0; i < 6; i++) {
            let randIndex = Math.floor(Math.random() * arr.length);
            let num = arr[randIndex];
            passCode.push(num);
            arr.splice(randIndex, 1);
        }

        this.passCode = passCode;
    }

}

export default Keypad;
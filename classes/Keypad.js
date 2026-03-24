class Keypad {
    constructor() {
        this.passCode = [];
        this.genRandCode();
    }

    genRandCode() {
        const passCode = [];
        for (let i = 0; i < 6; i++) {
            let num = Math.floor(Math.random() * 10);
            passCode.push(num);
        }

        this.passCode = passCode;
    }

}

export default Keypad;
import Keypad from "../classes/Keypad.js";

test("keypad generates six-digit code", () => {
    const keypad = new Keypad();
    expect(keypad.passCode).toHaveLength(6);
});

test("keypad generates random code", () => {
    const keypad1 = new Keypad();
    const keypad2 = new Keypad();
    expect(keypad1.passCode).not.toEqual(keypad2.passCode);
})
import { passwordGenerator } from "../index";

describe("passwordGenerator", () => {
    test("should return a number with two digits", () => {
        let n = passwordGenerator(2);

        expect(true).toBe(n > 9 && n < 100);
    });
    test("should return a number with 5 digits", () => {
        let n = passwordGenerator(5);

        expect(true).toBe(n > 9999 && n < 100000);
    });
    test("should return a number with 25 digits", () => {
        let n = passwordGenerator(25);

        expect(true).toBe(
            n > 999999999999999999999999 && n < 10000000000000000000000000
        );
    });
});

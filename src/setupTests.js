// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import App from "./App";
describe("some stupid test", () => {
    test("it should be some test", () => {
        let someApp = App()
        expect(someApp).toBeDefined()
    })
})
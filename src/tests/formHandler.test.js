import { handleSubmit } from '../client/js/formHandler'


describe('Testing "handleSubmit()" existence' , () => {
    test('It should exist', () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Testing that "handleSubmit()" is a function' , () => {
    test('It should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});

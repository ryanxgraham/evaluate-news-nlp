import {validURL} from '../client/js/urlChecker'


describe('Testing "validURL()" existence' , () => {
    test('It should exist', () => {
        expect(validURL).toBeDefined();
    });
});
describe('Testing that "validURL()" is a function' , () => {
    test('It should be a function', () => {
        expect(typeof validURL).toBe("function");
    });
});

describe('Testing functionality of "validURL()" for valid url' , () => {
    var url = "https://www.thisisvalidhtml.com/index.html";
    test('It should return true', () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Testing functionality of "validURL()" for invalid url' , () => {
    var url = "htpshttps://www.thisisnotvalidhtml.com/index.html";
    test('It should return false', () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});

//Core
import { sum, delay, getUniqueID, getFullApiUrl } from './';

jest.setTimeout(10000);

describe('instrumentsS:', () => {
    test('sum function should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    test('sum function should throw, when called with non-number type as second argument', () => {
        expect(() => sum(2, 'privet')).toThrow();
    });

    test('sum function should throw, when called with non-number type as first argument', () => {
        expect(() => sum('privet', 2)).toThrow();
    });

    test('sum function should return an addition of two arguments', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 8)).toMatchSnapshot();
    });

    test('delay should return resolved promise', async () => {
        await expect(delay()).resolves.toBeUndefined();
    });

    test('getUniqueID should be a function', () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('getUniqueID function should throw, when called with non-number type argument', () => {
        expect(() => getUniqueID('privet')).toThrow();
    });

    test('getUniqueID function should produce string of desired', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(5)).toHaveLength(5);
        expect(getUniqueID(13)).toHaveLength(13);
        expect(getUniqueID()).toHaveLength(15);
    });

    test('getFullApiUrl should be a function', () => {
        expect(getFullApiUrl).toBeInstanceOf(Function);
    });

    test('getFullApiUrl function should throw, when called with type number of first argument', () => {
        expect(() => getFullApiUrl('api', 2)).toThrow();
    });

    test('getFullApiUrl function should throw, when called with type number of second argument', () => {
        expect(() => getFullApiUrl(3, 'GROUP_ID')).toThrow();
    });

    test('getFullApiUrl must return Url', () => {
        expect(getFullApiUrl('api', 'GROUP_ID')).toBe('api/GROUP_ID');
    });

});

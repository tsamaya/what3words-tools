const util = require('../lib/util');

describe('Utility library', () => {
  describe('function util.isArray', () => {
    test('undefined', () => {
      const input = undefined;
      const result = util.isArray(input);
      expect(result).toBe(false);
    });
    test('null', () => {
      const input = null;
      const result = util.isArray(input);
      expect(result).toBe(false);
    });
    test('empty Object', () => {
      const input = {};
      const result = util.isArray(input);
      expect(result).toBe(false);
    });
    test('boolean', () => {
      const input = false;
      const result = util.isArray(input);
      expect(result).toBe(false);
    });
    test('number 1', () => {
      const input = 12;
      const result = util.isArray(input);
      expect(result).toBe(false);
    });
    test('number 2', () => {
      const input = -12.5;
      const result = util.isArray(input);
      expect(result).toBe(false);
    });
    test('string', () => {
      const input = '';
      const result = util.isArray(input);
      expect(result).toBe(false);
    });
    test('empty array', () => {
      const input = [];
      const result = util.isArray(input);
      expect(result).toBe(true);
    });
    test('an array with a number', () => {
      const input = [12];
      const result = util.isArray(input);
      expect(result).toBe(true);
    });
    test('an array with a string', () => {
      const input = ['hello'];
      const result = util.isArray(input);
      expect(result).toBe(true);
    });
    test('an array with a object', () => {
      const input = [{}];
      const result = util.isArray(input);
      expect(result).toBe(true);
    });
  });
  describe('function util.isNumber', () => {
    test('undefined', () => {
      const input = undefined;
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('null', () => {
      const input = null;
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('nan', () => {
      const input = NaN;
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('empty string', () => {
      const input = '';
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('empty Object', () => {
      const input = {};
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('boolean', () => {
      const input = false;
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('string', () => {
      const input = 'hello';
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('string with number', () => {
      const input = '12';
      const result = util.isNumber(input);
      expect(result).toBe(false);
    });
    test('positive integer', () => {
      const input = 12;
      const result = util.isNumber(input);
      expect(result).toBe(true);
    });
    test('negative integer', () => {
      const input = -12;
      const result = util.isNumber(input);
      expect(result).toBe(true);
    });
    test('positive float', () => {
      const input = 12.4;
      const result = util.isNumber(input);
      expect(result).toBe(true);
    });
    test('negative float', () => {
      const input = -12.4;
      const result = util.isNumber(input);
      expect(result).toBe(true);
    });
    test('negative float from string', () => {
      const input = Number('12.4');
      const result = util.isNumber(input);
      expect(result).toBe(true);
    });
    test('scientific notation', () => {
      const input = 2.7e-5;
      const result = util.isNumber(input);
      expect(result).toBe(true);
    });
  });
  describe('function util.isUndefinedOrEmpty', () => {
    test('undefined', () => {
      const input = undefined;
      const result = util.isUndefinedOrEmpty(input);
      expect(result).toBe(true);
    });
    test('empty', () => {
      const input = '';
      const result = util.isUndefinedOrEmpty(input);
      expect(result).toBe(true);
    });
    test('a', () => {
      const input = 'a';
      const result = util.isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
    test('0', () => {
      const input = '0';
      const result = util.isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
    test('10', () => {
      const input = '10';
      const result = util.isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
    test('100', () => {
      const input = 100;
      const result = util.isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
  });
});

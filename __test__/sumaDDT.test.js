const sum = require('../utils/suma');

describe('calculator', () => {
  test.each`
    firstValue | secondValue | expectedResult
    ${3}       | ${1}        | ${4}
    ${-4}      | ${-1}       | ${-5}
  `('$firstValue + $secondValue = $expectedResult', ({ firstValue, secondValue, expectedResult }) => {
    expect(sum(firstValue, secondValue)).toBe(expectedResult);
  });
});

describe('calculator edge cases', () => {
  test.each`
    firstValue | secondValue | expectedResult
    ${0}       | ${0}        | ${0}
    ${-1}      | ${1}        | ${0}
    ${-10}     | ${-10}      | ${-20}
    ${999}     | ${1}        | ${1000}
  `('sum($firstValue, $secondValue) = $expectedResult', ({ firstValue, secondValue, expectedResult }) => {
    expect(sum(firstValue, secondValue)).toBe(expectedResult);
  });
});

describe('calculator decimals', () => {
  test.each`
    firstValue | secondValue | expectedResult
    ${1.5}     | ${1.5}      | ${3}
    ${2.1}     | ${3.2}      | ${5.3}
    ${-1.5}    | ${1.5}      | ${0}
  `('sum($firstValue, $secondValue) ≈ $expectedResult', ({ firstValue, secondValue, expectedResult }) => {
    expect(sum(firstValue, secondValue)).toBeCloseTo(expectedResult);
  });
});
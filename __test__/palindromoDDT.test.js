const esPalindromo = require('../utils/palindromo');

describe('esPalindromo DDT', () => {
  test.each`
    input      | expectedResult
    ${'oso'}   | ${true}
    ${'hola'}  | ${false}
    ${'radar'} | ${true}
    ${''}      | ${true}
    ${'ana'}   | ${true}
  `('"$input" → $expectedResult', ({ input, expectedResult }) => {
    expect(esPalindromo(input)).toBe(expectedResult);
  });
});

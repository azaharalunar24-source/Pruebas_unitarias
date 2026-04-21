const esMayuscula = require('../utils/esmayuscula');

describe('esMayuscula DDT', () => {

  test.each`
    input    | expected
    ${'HOLA'} | ${true}
    ${'hola'} | ${false}
    ${'Hola'} | ${false}
    ${'123'}  | ${true}
    ${''}     | ${true}
  `('"$input" debería devolver $expected', ({ input, expected }) => {
    expect(esMayuscula(input)).toBe(expected);
  });

});
const esPalindromo = require('../utils/palindromo');

test('invierte un string correctamente (palindromo simple)', () => {
  expect(esPalindromo('oso')).toBe(true);
});

test('detecta que "hola" no es palindromo', () => {
  expect(esPalindromo('hola')).toBe(false);
});

test('funciona con string vacío', () => {
  expect(esPalindromo('')).toBe(true);
});
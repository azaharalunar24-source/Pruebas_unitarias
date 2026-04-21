const esMayuscula = require('../utils/esmayuscula');

test('detecta texto en mayúsculas', () => {
  expect(esMayuscula('HOLA')).toBe(true);
});

test('detecta texto en minúsculas', () => {
  expect(esMayuscula('hola')).toBe(false);
});

test('detecta mezcla de mayúsculas y minúsculas', () => {
  expect(esMayuscula('Hola')).toBe(false);
});
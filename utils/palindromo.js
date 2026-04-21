const esPalindromo = (string) => {
  return string === string.split('').reverse().join('');
};

module.exports = esPalindromo;
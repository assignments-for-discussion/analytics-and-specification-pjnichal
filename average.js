function average(numbers) {
  return (
    numbers.reduce((p, c) => (c.isNaN ? p + 0 : p + c), 0) / numbers.length
  );
}

module.exports = { average };

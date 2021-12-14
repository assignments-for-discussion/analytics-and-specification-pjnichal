function average(numbers) {
  return (
    numbers.reduce((p, c) => {
      return isNaN(c) ? p + 0 : p + c;
    }, 0) / numbers.length
  );
}

module.exports = { average };

function average(numbers) {
  var len = numbers.length;
  return (
    numbers.reduce((p, c) => {
      if (isNaN(c)) {
        len -= 1;

        return (p += 0);
      } else {
        return (p += c);
      }
    }, 0) / len
  );
}

module.exports = { average };

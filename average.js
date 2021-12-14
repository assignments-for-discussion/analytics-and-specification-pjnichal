function average(numbers) {
  var len = numbers.length;
  return (
    numbers.reduce((p, c) => {
      if (isNaN(c)) {
        p += 0;
        return (len -= 1);
      } else {
        return (p += c);
      }
    }, 0) / len
  );
}

module.exports = { average };


function emptyString(a) {
  if (a === '') {
    return 0;
  } else if (a[0] === '/' && a[1] === '/') {
    // console.log(a[2]);
    // a.pop();
    // a.pop();
    const separator = a[2];
    console.log(a.slice(3));
    return a.slice(3).split(separator).map(Number).reduce((x, y) => x + y, 0);
  } else if (a.includes(',') || a.includes('\n')) {
    a.split(/[\s,]+/).forEach((element) => {
      if (parseInt(element, 10) < 0) {
        throw new Error('Have Negative');
      }
    });
    return a.split(/[\s,]+/).map(Number).reduce((x, y) => {
      if (y <= 1000) {
        return x + y;
      }
      return x;
    }, 0);
  } else if (parseInt(a, 10)) {
    return parseInt(a, 10);
  }
  return 1;
}

module.exports = emptyString;

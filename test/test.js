
function emptyString(a) {
  if (a === '') {
    return 0;
  } else if (parseInt(a, 10)) {
    return parseInt(a, 10);
  }
  return 1;
}

module.exports = emptyString;

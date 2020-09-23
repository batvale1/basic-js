const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //[ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]
  let result = 0;
  matrix.forEach(item => {
    if (Array.isArray(item)) {
      result += countCats(item);
    } else {
      if (item === '^^') {
        result += 1;
      }
    }
  })
  return result;
};

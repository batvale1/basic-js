const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error('');
  const arrToReturn = [];
  const removedItemIndexes = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i += 1;
        removedItemIndexes.push(i);
      } else if (arr[i] === '--discard-prev') {
        if (removedItemIndexes.findIndex(item => item === (i - 1)) === -1 ) {
          arrToReturn.pop();
        }
      } else if (arr[i] === '--double-next') {
        if (typeof arr[i + 1] !== 'undefined') {
          arrToReturn.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev') {
        if (typeof arr[i - 1] !== 'undefined' && removedItemIndexes.findIndex(item => item === (i - 1)) === -1) {
          arrToReturn.push(arr[i - 1]);
        }
      } else {
        arrToReturn.push(arr[i]);
      }
  }
  return arrToReturn;
};

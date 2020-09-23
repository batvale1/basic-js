const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const { repeatTimes, separator = '+', addition, additionRepeatTimes , additionSeparator = '|' } = options;
  if (repeatTimes === undefined) {
    return str + addition;
  }
  let additionString = '';
  if (additionRepeatTimes !== undefined){
    for (let i = 1; i <= additionRepeatTimes; i++) {
      if (i === additionRepeatTimes) {
        additionString += String(addition)
      } else {
        additionString += String(addition) + additionSeparator;
      }
    }
  }
  let strToReturn = '';
  for (let i = 1; i <= repeatTimes; i++) {
    if (i === repeatTimes) {
      strToReturn += String(str) + additionString;
    } else {
      strToReturn += String(str) + additionString + separator;
    }
  }

  return strToReturn;
};
  
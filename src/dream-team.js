const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  return members.reduce((acc, item) => {
    if (typeof(item) === 'string') {
      acc += item.trim().charAt(0).toUpperCase();
    }
    return acc;
  }, '').split('').sort().join('');
};

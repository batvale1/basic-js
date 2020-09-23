const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(arr.some(item => Array.isArray(item))) {
      return 1 + this.calculateDepth(arr.flat());
    }
    return 1;
  }
};
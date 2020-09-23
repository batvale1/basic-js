const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const sampleActivityAsNumber = +sampleActivity;
  if (isNaN(sampleActivityAsNumber) || sampleActivityAsNumber <= 0 || sampleActivityAsNumber > MODERN_ACTIVITY || typeof(sampleActivity) !== 'string') {
    return false;
  }
  return Math.ceil(Math.log( MODERN_ACTIVITY / sampleActivityAsNumber ) * HALF_LIFE_PERIOD / 0.693);
};

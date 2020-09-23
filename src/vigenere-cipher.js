const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isBackwardMachine) {
    if (isBackwardMachine === false) {
      this.isBackwardMachine = true;
    } else {
      this.isBackwardMachine = false;
    }
  }
  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error('');
    if (this.isBackwardMachine) {
      message = message.split('').reverse().join('');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    //создадим массив латинских букв
    const symbols = [];
    const table = [];
    const aCapitalizeCode = 'A'.charCodeAt(0);
    const zCapitalizeCode = 'Z'.charCodeAt(0);
    const alphabetLength = zCapitalizeCode - aCapitalizeCode;
    for (let i = 0; i <= alphabetLength; i++) {
      symbols.push(String.fromCharCode(aCapitalizeCode + i));
    }
    for (let i = 0; i <= alphabetLength; i++) {
      table[i] = [...symbols];
      table[i].push(...table[i].splice(0, i));
    }

    let result = '';
    let j = 0; //need to avoid non-alphabet letters
    for (let i = 0; i < message.length; i++) {
      const currentMessageSymbol = message[i].charCodeAt(0);
      const currentKeySymbol = key[(i - j) % key.length].charCodeAt(0);
      if (currentMessageSymbol < aCapitalizeCode || currentMessageSymbol > zCapitalizeCode) {
        result += message[i];
        j++;
      } else {
        result += table[currentMessageSymbol - aCapitalizeCode][currentKeySymbol - aCapitalizeCode];
      }
    }
    return result;
  }
  decrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error('');
    if (this.isBackwardMachine) {
      message = message.split('').reverse().join('');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    //создадим массив латинских букв
    const symbols = [];
    const table = [];
    const aCapitalizeCode = 'A'.charCodeAt(0);
    const zCapitalizeCode = 'Z'.charCodeAt(0);
    const alphabetLength = zCapitalizeCode - aCapitalizeCode;
    for (let i = 0; i <= alphabetLength; i++) {
      symbols.push(String.fromCharCode(aCapitalizeCode + i));
    }
    for (let i = 0; i <= alphabetLength; i++) {
      table[i] = [...symbols];
      table[i].push(...table[i].splice(0, i));
    }

    let result = '';
    let j = 0; //need to avoid non-alphabet letters
    for (let i = 0; i < message.length; i++) {
      const currentMessageSymbol = message[i].charCodeAt(0);
      const currentKeySymbol = key[(i -j) % key.length].charCodeAt(0);
      if (currentMessageSymbol < aCapitalizeCode || currentMessageSymbol > zCapitalizeCode) {
        result += message[i];
        j++;
      } else {
        result += symbols[table[currentKeySymbol - aCapitalizeCode].indexOf(message[i])];
      }
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;

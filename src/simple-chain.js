const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Number.isInteger(position) || position < 1 || typeof this.chain[position - 1] === 'undefined') {
      this.chain = [];
      throw new Error('');
    } else {
      this.chain.splice(position - 1,1);
    }
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const finishedChainAsString = this.chain.join('~~');
    this.chain = [];
    return finishedChainAsString;
  }
};

module.exports = chainMaker;

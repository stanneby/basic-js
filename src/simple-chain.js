const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.chain.length){ 
      this.chain = [];
      throw new Error("Error thrown");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.chain.forEach( (element, index) => {
      if(index != 0){
        str += '~~'
      }
      str += '( ' + element + ' )';
    });
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;

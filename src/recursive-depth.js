const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let result = 0;
    arr.forEach( (value) => {
      if(Array.isArray(value)){
        let inermediateResult = this.calculateDepth(value);
        if(inermediateResult > result ){
          result = inermediateResult;
        }
      }
    })
    return result + 1;
  }
};
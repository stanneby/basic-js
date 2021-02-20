const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach( (row) => {
    row.forEach( (value) => {
      if(value == '^^'){
        count++;
      }
    })
  })
  return count;
};

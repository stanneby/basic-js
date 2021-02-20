const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date == 'undefined') return 'Unable to determine the time of year!';
  if(! (typeof date.getMonth === 'function') ) throw new Error("Error thrown");;
  let stringed = date.toString().split(' ');
  if(date.getDate() != parseInt(stringed[2])) throw new Error("Error thrown");;

  let month = date.getMonth();
  if(month >= 11 || month <= 1){ return 'winter' }
  else if(month >= 2 && month <= 4){ return 'spring' }
  else if(month >= 5 && month <= 7){return 'summer' }
  else { return 'autumn' }
};

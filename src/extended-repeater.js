const CustomError = require("../extensions/custom-error");

function repeat(str, times, separator){
  if( typeof str == 'undefined') return '';
  if(times == undefined) return str;
  let result = '';
  for(let i = 0; i < times; i++){
    if(i != 0){
      result += String(separator);
    }
    result += String(str);
  }
  return result;
}

module.exports = function repeater(str, options) {
  let separator = options.separator;
  let additionSeparator = options.additionSeparator;
  if(typeof additionSeparator != 'string') additionSeparator = '|';
  if(typeof separator != 'string') separator = '+';
  let subresult = str + repeat(options.addition, options.additionRepeatTimes, additionSeparator);
  return repeat(subresult, options.repeatTimes, separator);
};

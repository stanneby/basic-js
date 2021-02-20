const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let result = [];
  members.forEach( (value) => {
    if(typeof value == "string"){
      result.push(value
        .split('')
        .find( (value) => value!=' ' )
        .toUpperCase());
    }
  })
  return result.sort().join('');
};

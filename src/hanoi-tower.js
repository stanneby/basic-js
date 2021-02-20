const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_IN_HOUR = 3600;
  let turns = 2**disksNumber-1;
  let seconds = Math.floor(turns*SECONDS_IN_HOUR/turnsSpeed);
  return { 
    turns: turns,
    seconds: seconds,
   }
};

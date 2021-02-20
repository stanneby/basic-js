const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const control_sequences = ['--discard-next', '--discard-prev', '--double-prev', '--double-next', 'deleted'];
  if(!Array.isArray(arr)) throw new CustomError();

  let array = [];
  Object.assign(array, arr);

  let value = 0;
  let index = 0;
  while(true){
    if(!Array.isArray(arr)) throw new CustomError();

    let array = [];
    Object.assign(array, arr);
    
  let value = 0;
  let index = 0;
  while(true){
    if(index == array.length) break;
    value = array[index];
    
    switch(value){
      case '--discard-next':
        if(index == array.length-1){
          break;
        }
        array[index+1] = 'deleted';
        index++;
        break;
      case '--discard-prev':
        if(index == 0 || array[index-1] == 'deleted'){
          break;
        }
        array.splice(index-1, 2);
        index-=2;
        break;
      case '--double-prev':
        if(index == 0 || array[index-1] == 'deleted' ){
          break;
        }
        array.splice(index, 1, array[index-1]);
        break;
      case '--double-next':
        if(index == array.length-1){
          break;
        }
        array.splice(index, 1, array[index+1]);
        break;
    }
    
    index++;
  }
  
  return array.filter( (value) => !(control_sequences.includes(value)) );
  }
};

exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      // console.log(1 & (num >> (bit - 1))) AND and right shift
      return 1 & (num >> (bit-1));
  },

  base10: function(str) {
      return parseInt(str, 2);
  },

  convertToBinary: function(num) {
      var binNum= [];
      var check = num;
      for(i = 0; i < 8; i++){
        if((check % 2) !== 0){
          binNum.unshift(1);
          check = check / 2;
          check = Math.floor(check);
        }
        else if((check % 2) === 0){
          binNum.unshift(0);
          check = check / 2;
          check = Math.floor(check);
        }
      }
      return binNum.join("");
  },

  multiply: function(a, b) {  //clean up work. repeating the same thing twice. Maybe push string values into an array and the perform an each? Get back to this when you finish the assessment
    sNum1 = a.toString();
    var count = 0;
    for(i=0; i < sNum1.length; i ++){
          if(sNum1[i] === "."){
              var start = 1;
          }
          if(start === 1){
            if(sNum1[i] !== "."){
              count++;
            }
          }
    }

    sNum2 = b.toString();
    var count2 = 0;
    for(i=0; i < sNum2.length; i ++){
          if(sNum2[i] === "."){
              var start = 1;
          }
          if(start === 1){
            if(sNum2[i] !== "."){
              count2++;
            }
          }
    }

    if(count > count2){
      var precision = count;
    }
    if(count2 > count){
      var precision = count2
    }
    return Number((a * b).toPrecision(precision));
  }
};

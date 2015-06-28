exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
      // var nStr= str.toLowerCase();
      // var array= nStr.split('');
      // var isNumber= false;
      //
      // _.each(array, function(e){
      //   if(!isNaN(e)){
      //     isNumber = true;
      //   }
      // });
      // return isNumber;

      return  /\d/.test(str); //  /d Matches a digit character. Equivalent to [0-9].
  },

  containsRepeatingLetter : function(str) {
    // var nStr = str.toLowerCase();
    // var arr = nStr.split('');
    // var hasRepeat = false;
    // var obj = {};
    //   _.filter(arr, function(e){
    //     if(obj[e] === undefined){
    //       obj[e] = 1;
    //     }
    //     else{
    //       obj[e] += 1;
    //     }
    //   })
    // var strN =[];
    //
    // _.filter(obj, function(e, idx){
    //   if(e !== 1){
    //     strN.push(idx);
    //     if(/[a-z]/i.test(strN)){
    //       hasRepeat= true;
    //     }
    //   }
    // });
    // return hasRepeat;



//([a-zA-Z]) - A letter which it captures in the first group
//.*? - zero or more characters until \1 it finds a repeat of the first matched character
    return /([a-zA-Z]).*?\1/.test(str);

  },

  endsWithVowel : function(str) {
    var nStr = str.toLowerCase();
    var arr = nStr.split('');
    var lengthOfString = arr.length;
    var lastElement= arr[lengthOfString - 1];
    var endsInVowel= false;

    if(/[aeiou]/.test(lastElement)){
      endsInVowel = true;
    }

    return endsInVowel;

  },

  captureThreeNumbers : function(str) {

    var nStr = str.toLowerCase();
    var arr = nStr.split('');
    var captureThree = [];

    _.each(arr, function(e){
      if(captureThree.length !== 3){
        if(!isNaN(e)){
          captureThree.push(e);
          if(captureThree.length === 3){
            return captureThree;
          }
        }
        else if(captureThree.length !== 0){
          captureThree = [];
        }
      }
    });
    if(captureThree.length !== 0){
      var foundThese = captureThree.join("");
      return foundThese;
    }
    else{
      return false;
    }

  },

  matchesPattern : function(str) {
    if(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str)){
      return true;
    }
    else{
      return false;
    }
  },


  isUSD : function(str) {
    var nStr = str.toLowerCase();
    var arr = nStr.split('');
    if(arr[0] !== '$'){
      return false;
    }

    if(/^\$?\d+((,\d{3})+)?(\.\d+)?$/.test(str)){
      if(_.contains(arr, '.')){
        arr2 = nStr.split('.');
        arr3 = arr2[1].split("");
        if(arr3.length !== 2){
          return false;
        }
      }

      return true;
    }
    else{
      return false;
    }
  }
};

exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var filesArray= data['files'];
    var fullFilesArray = [];
    var lookIn = dirName;
    var rawData= data;


    var addFiles = function(){
      lookAt= Array.prototype.slice.call(arguments)
      _.each(lookAt, function(val2){

        if(typeof(val2) === 'string'){
          fullFilesArray.push(val2);
        }
        if(typeof(val2)=== 'object'){
          addFiles.apply(null, val2['files']);
        }
      });

      return fullFilesArray;
    };


    if(lookIn === undefined){
      return addFiles.apply(null, filesArray);
    }
    else{
      if(rawData['dir']=== lookIn){
        console.log('We dont need to change filesArray');
      }
      else{
        _.each(rawData['files'], function(val){
          if(val['dir'] == lookIn){
            filesArray= val['files'];
          }
        });
      }
      return addFiles.apply(null, filesArray);
    }
  },

  permute: function(arr) {
      var length= arr.length;
      var originalArray = arr;
      //first compute the factorial of the length of array to find out how many combinations we need
      function fact(x) {
          if(x==0) {
              return 1;
          }
          return x * fact(x-1);
      }

      var combination = fact(length);


      var doTheShuffle = function(permutatedToDate, howLong){
        var cupid = _.shuffle(originalArray, 4);
        var canWeShuffle= _.find(permutatedToDate, cupid);
        if(!canWeShuffle){
          permutatedToDate.push(cupid);
        }
        if(permutatedToDate.length !== howLong){
          doTheShuffle(permutatedToDate, howLong);
        }

        permutatedToDate.sort();
        return permutatedToDate;

      }

      return doTheShuffle([], combination);
  },

  fibonacci: function(n) {
      var fibArray= [];
      fibArray.push(1);
      fibArray.push(1);
      for(i=1; i <= n; i++){
        var past = i-1;
        var future = i + 1;
        fibArray[future] = fibArray[past] + fibArray[i];
      }
      return fibArray[n-1];
  },

  validParentheses: function(n) {
    if (n == 0){
      return [""];
    }
    var result = [];
    for (var i = 0; i < n; ++i) {
      var lefts = recursionAnswers.validParentheses(i);
      var rights = recursionAnswers.validParentheses(n - i - 1);

      for (var l = 0; l < lefts.length; ++l){
         for (var r = 0; r < rights.length; ++r){
           console.log("pringing this stuff: ", "(" + lefts[l] + ")" + rights[r])
             result.push("(" + lefts[l] + ")" + rights[r]);
          }
      }
 }

 console.log("these are results: ", result);
 return result;
  }
};

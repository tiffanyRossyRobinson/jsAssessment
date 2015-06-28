exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(undefined, arr);
      //argArray(first element) is an array-like object, specifying the arguments with which fun should be called, or null or undefined if no arguments should be provided to the function.
  },

  speak : function(fn, obj) {
      // console.log(fn.apply(obj));
      return fn.apply(obj);
  },

  functionFunction : function(str) {
    first = str;
    return function(str){
      // console.log(first + ", "+ str)
      return first + ", "+ str;
    }
  },

  makeClosures : function(arr, fn) {
    var ret = [];
   _.each(arr, function(e, idx){
     ret.push( function(){
          return fn(e);
     });
   })

  //  console.log("it is returning: ", ret);
   return ret;
  },

  partial : function(fn, str1, str2) {
      // console.log(fn.call( null, str1, str2, "!!"));
      var partial = function(punct){
        return fn.call(null, str1, str2, punct);
      }
      return partial;
  },

  useArguments : function() {
      var sum = 0;
      _.each(arguments, function(e){
        sum += e;
      });
      return sum;
  },

  callIt : function(fn) {
      var args= Array.prototype.slice.call(arguments);
      var func= args.shift();
      return func.apply(null, args);
  },

  partialUsingArguments : function(fn) { //need more help
    var variables = Array.prototype.slice.call(arguments);
    if(variables.length > 1){
      var funct= variables.shift();
      return function(){
        var theseVariables = Array.prototype.slice.call(arguments);
        var allVariables = variables.concat(theseVariables);
        return fn.apply(null, allVariables);
      }
    }
    return function(){
      var theseVariables = Array.prototype.slice.call(arguments);
      return fn.apply(null, theseVariables);
    }
  },

curryIt : function(fn) {
  var completeFunction = function(fn, arguments){
    // console.log("complete function", arguments);
    return fn.apply(null, arguments);
  };

  var checkVariables = function(latestArgList, totalArgCount){
    return function(newestArg){
      // console.log("newestArg: ", newestArg);
        latestArgList.push(newestArg);
        var gotEmAll = (latestArgList.length === totalArgCount);
        if(!gotEmAll){
          return checkVariables(latestArgList, totalArgCount);
        }
        else{
          return completeFunction(fn, latestArgList);
        }
    };
  };

  return checkVariables([], fn.length);
}
};

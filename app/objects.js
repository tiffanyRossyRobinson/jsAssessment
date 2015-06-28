exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
      return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
        var partialArray = Object.getOwnPropertyNames(obj);
        var fullArray = [];
        _.each(partialArray, function(val){
          var combination = val + ": " + obj[val];
          fullArray.push(combination);
        });
        return fullArray;
  }
};

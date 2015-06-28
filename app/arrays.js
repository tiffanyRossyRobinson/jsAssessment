exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
      var sum = 0;
      arr.forEach(function(value){
        // console.log(value);
          sum += value;
      })
      return sum;
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy : function(arr, item) {
    arr.forEach(function(value, idx){
      if(value === item){
        // console.log(idx, value)
        arr.splice(idx, 2);
      }
    })
      return  arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
      var check =_.filter(arr, function(e){
        return e === item;
      })
      return check.length;
  },

  duplicates : function(arr) {
    // console.log(arr);
    var obj = {};
      _.filter(arr, function(e){
        // console.log(e);
        if(obj[e] === undefined){
          obj[e] = 1;
        }
        else{
          obj[e] += 1;
        }
      })
    var arrN =[];

    _.filter(obj, function(e, idx){
      if(e !== 1){
        arrN.push(Number(idx));
      }
    });
    return arrN;
  },

  square : function(arr) {
    return _.map(arr, function(e){
      return e*e;
    })
  },

  findAllOccurrences : function(arr, target) {
      var newArr = [];
      _.filter(arr, function(e, idx){
        // console.log("this is idx ", idx );
        if(e === target){
          newArr.push(Number(idx));
        }
      })
      return newArr;
  }
};

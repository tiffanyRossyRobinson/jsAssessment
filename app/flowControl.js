exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // console.log(num);
    if((num % 3 === 0) && (num % 5 === 0)){
      // console.log("both 3 and 5 ", num)
      return "fizzbuzz";
    }
    else if(num%3=== 0){
      // console.log("just 3 ", num)
      return "fizz";
    }
    else if(num % 5 === 0){
      // console.log("just 5 ", num)
      return "buzz";
    }
    else if (num === undefined || typeof(num) !== 'number'){
      return false;
    }
    else{
      return num;
    }
    }
};

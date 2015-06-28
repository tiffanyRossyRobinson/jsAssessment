exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {  //Review!!! Needed help to complete
  count : function (start, end) {
    countNumber();
    var myCount;

    function countNumber () {
      console.log(start++);

      if (start <= end) {
        myCount= setTimeout(countNumber, 100);
      }
    }
    
    cancelObj= {
      cancel: function(){
        clearTimeout(myCount);
      }
    }
    return cancelObj;
  }
};

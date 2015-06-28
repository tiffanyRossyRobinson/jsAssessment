exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      var deferred = $.Deferred();
      setTimeout(function bogusFunction(value) {
        deferred.resolve(value);
      }(value),10);
      return deferred.promise();
  },

  manipulateRemoteData : function(url) {
    var deferred = $.Deferred();
       var data = $.ajax({
         url: url,
         method: "GET",
       }).then(function(response) {
         var names = $.map(response.people, function(person) {
           return person.name;
         })
         deferred.resolve(names.sort());
       });

       return deferred.promise();
     }
};

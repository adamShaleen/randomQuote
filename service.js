angular.module('quoteGenerator').service('Service', function($http) {

// Random quote endpoint
this.getQuote = function() {
    return $http ({
        method: 'GET',
        url: "http://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json?dataType=%27jsonp%27&type=%27GET%27"
    }).then(function(response) {
        return response.data;
    });
};

});

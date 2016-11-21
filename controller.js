angular.module('quoteGenerator').controller('Controller', function($scope, Service) {

//display random quote
$scope.displayQuote = function() {
    Service.getQuote().then(function(response) {
        $scope.response = response;
        console.log(response);
    });
};

});

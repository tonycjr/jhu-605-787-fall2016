(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = '';

  $scope.displayString = function () {
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculatNumericForString(string) {

    var separator = ',';
    var arrayOfStrings = string.split(separator);
    var arrayLength = 0;
    var returnString = '';

    arrayLength = arrayOfStrings.length;

    if (arrayLength > 3)
    {

      returnString = 'Too much!';

    } 
    else if (string == '')
    {

      returnString = 'Please enter data first';

    } 
    else {
      returnString = 'Enjoy!';
    }

    return returnString;
  }

});

})();

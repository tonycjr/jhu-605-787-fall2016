(function() {
  'use strict';

  angular.module('public')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$scope', 'MenuService', 'RegistrationService'];
  function RegistrationController($scope, MenuService, RegistrationService) {
    var ctrl = this;
    ctrl.menuItemIsValid = false;

    ctrl.signUp = function() {
      RegistrationService.register(ctrl.registration);
      ctrl.completed = true;
    };

    ctrl.verifyMenuItem = function() {
      if (angular.isDefined(ctrl.registration.menuItem)) {
        MenuService.getMenuItem(ctrl.registration.menuItem)
        .then(function(response) {
          ctrl.menuItemIsValid = true;
          $scope.signUpForm.menuItem.$invalid = false;
        })
        .catch(function(response) {
          $scope.signUpForm.menuItem.$invalid = true;
        });
      } else {
        $scope.signUpForm.menuItem.$invalid = true;
      }
    };
  }
})();

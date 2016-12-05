(function() {
  'use strict';

  angular.module('public')
  .service('RegistrationService', RegistrationService);

  RegistrationService.$inject = ['$http'];
  function RegistrationService($http) {
    var service = this;

    service.register = function(userInfo) {
      service.registration = userInfo;
    };

    service.getRegistration = function() {
      return service.registration;
    };
  }
})();

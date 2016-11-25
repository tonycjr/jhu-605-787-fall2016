(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // Categories list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/category-list.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories().then(function (categories) {
            return categories.data;
          });
        }]
      }
    })
    .state('items', {
      url: '/categories/{category}/items',
      templateUrl: 'src/menuapp/templates/items-list.template.html',
      controller: 'ItemsController as itemsDetail',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category).then(function (items) {
            return items.data.menu_items;
          });
        }]
      }
    });
  }
})();

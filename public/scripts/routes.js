/**
 * Created by siyengar on 2/8/15.
 */
'use strict';
angular.module('ngreflect').config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
//    sample pages
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('evalHome', {
            url: '/',
            templateUrl: '../assets/views/evalHome.html',
            controller: 'evalHomeCtrl'
        });
}]);

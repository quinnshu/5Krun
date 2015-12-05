angular.module('5kApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            });
        $urlRouterProvider.otherwise('/home');
    });
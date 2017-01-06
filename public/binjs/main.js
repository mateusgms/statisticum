var dashboardApp = angular.module('dashboard', ['diretivasDashboard', 'ngAnimate', 'ngRoute']);
dashboardApp.config(['$routeProvider', '$locationProvider',
    
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'controllerContrato'
                }).when('/blogPost/:id', {
                    templateUrl: 'partials/blogPost.html',
                    controller: 'BlogViewCtrl'
                }).when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'LoginCtrl'
                }).when('/logOut', {
                    templateUrl: 'partials/login.html',
                    controller: 'LogoutCtrl'
                });

        $locationProvider.otherwise({redirectTo : "/"});
    }]);

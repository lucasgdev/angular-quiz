// app.js
// create our angular app and injects
// =============================================================================
angular.module('FormApp', ['ngAnimate', 'ui.router', 'ngMaterial', 'SWModule', 'GotModule', 'FoodModule'])


    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        $stateProvider
            // App routing
            .state('form', {
                url: '/',
                templateUrl: 'formBase.html',
                controller: 'formController',
            })

            .state('form.profile', {
                url: '/profile',
                templateUrl: 'modules/profile/profile.view.html'
            })

            .state('form.starwarsmovie', {
                url: '/starwarsmovie',
                templateUrl: 'modules/starwars/starwars.view.html',
                controller: 'SWController as vm'
            })
 
            .state('form.gameofthrones', {
                url: '/gameofthrones',
                templateUrl: 'modules/got/got.view.html',
                controller: 'GotController as vm'
            })

            .state('form.food', {
                url: '/food',
                templateUrl: 'modules/food/food.view.html',
                controller: 'FoodController as vm'
            })

            .state('form.review', {
                url: '/review',
                templateUrl: 'review.view.html',
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('//profile');

        $mdThemingProvider.theme('default')
            .primaryPalette('red');
    })

    // our controller for the form
    // ============================
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function() {
            alert('Thank you! “Powerful you have become, the dark side I sense in you.” - Yoda!');
        };

    });
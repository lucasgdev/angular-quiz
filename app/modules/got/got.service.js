(function () {
    'use strict';

    angular 
        .module('GotModule')
        .factory('GotService', GotService);


    GotService.$inject = [
        '$http'
    ];

    /**
     *
     **/

    function GotService($http) {
        console.log('... GotService');

        return {
            getSerie: function() {
                return $http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones');
            },

            getSeason: function(season) {
                return $http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=' + season);
            },

        };
    }
})();

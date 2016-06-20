(function () {
    'use strict';

    angular
        .module('SWModule')
        .factory('SWService', SWService);

    SWService.$inject = [ 
        '$http'
    ];

    /**

     **/

    function SWService($http) {
        console.log('... SWService');

        return {
            getMovies: function() {
                return $http.get('http://www.omdbapi.com/?s=%22Star%20Wars:%20Episode%22');
            }
        };
    }
})(); 

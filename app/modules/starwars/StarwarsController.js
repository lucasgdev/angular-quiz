(function(){

    angular
        .module('SWModule')
        .controller('SWController', SWController);

    SWController.$inject = [
        'SWService'
    ];

    /**

     **/

    function SWController( SWService ) {

        console.log('...SWController');

        var vm = this;

        SWService.getMovies().then( function( data ) {
            vm.swmovies  = data.data;

            console.log(vm.swmovies);

        });
    }

})();

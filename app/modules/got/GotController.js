(function(){

    angular
        .module('GotModule')
        .controller('GotController', GotController);

    GotController.$inject = [
        'GotService',
    ]; 

    /**

     **/

    function GotController( GotService ) {

        console.log('...GotController');

        var vm = this;

        GotService.getSerie().then( function( data ) {
            vm.gotserie  = data.data;

            console.log(vm.gotserie);
        });

        // Get Seasons

        GotService.getSeason(1).then( function( data ) {
            vm.gotseason1 = data.data;
        });

        GotService.getSeason(2).then( function( data ) {
            vm.gotseason2 = data.data;
        });

        GotService.getSeason(3).then( function( data ) {
            vm.gotseason3 = data.data;
        });

        GotService.getSeason(4).then( function( data ) {
            vm.gotseason4 = data.data;
        });

        GotService.getSeason(5).then( function( data ) {
            vm.gotseason5 = data.data;
        });

        GotService.getSeason(6).then( function( data ) {
            vm.gotseason6 = data.data;

        });


    }

})();

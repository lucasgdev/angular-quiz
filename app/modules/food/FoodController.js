(function(){

    angular
        .module('FoodModule')
        .controller('FoodController', FoodController);

    /**

     **/

    function FoodController() {

        console.log('...FoodController');

        var vm = this;

        vm.foods = {
            items: [
                {
                    name: 'vegan',
                    title: 'I am an insect.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Leaf-cutting_ant.jpg'
                },
                {
                    name: 'pasta',
                    title: 'I love pasta.',
                    image: 'https://pixabay.com/static/uploads/photo/2015/12/28/16/00/pasta-1111592_960_720.jpg'
                },
                {
                    name: 'meat',
                    title: 'Gimme Meat.',
                    image: 'https://pixabay.com/static/uploads/photo/2015/08/21/18/19/spare-ribs-899306_960_720.jpg'
                },
                {
                    name: 'allfood',
                    title: 'Is it food? I am in',
                    image: 'https://s-media-cache-ak0.pinimg.com/736x/86/cb/6b/86cb6b1518570e01bb45ff7a22961fc5.jpg'
                }
            ]
        };
    }

})();

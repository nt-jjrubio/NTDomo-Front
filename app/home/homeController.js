/**
 * Created by 'jjrubio' on 20/05/2017.
 */


(function () {
    'use strict';


    /**
     * @ngdoc controller
     * @name NTDomo.home:HomeController
     * @description
     * Controller used to show the login page
     */

    angular
        .module('NTDomo.home', [])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', '$mdSidenav'];

    /* @ngInject */
    function HomeController($location, $mdSidenav) {

        var vm = this;

        vm.openLeftMenu = function() {
            console.log('open');
          $mdSidenav('left').toggle();
        };

        vm.devices = [
            {
                'name':'Temperatura salon',
                'address': '0x09',
                'type':'temperature',
                'icon':'fa-thermometer-half'
            },
            {
                'name':'Temperatura Habitacion',
                'address': '0x29',
                'type':'temperature',
                'icon':'fa-thermometer-half'
            },
            {
                'name':'Luces exterior',
                'address': '0x19',
                'type':'temperature',
                'icon':'fa-lightbulb-o'
            }
        ];

        /*   $('.main-background').slick({
         dots: true,
         infinite: true,
         speed: 500,
         fade: true,
         cssEase: 'linear',
         accessibility: false,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 3000,
         pauseOnFocus: false,
         pauseOnHover: false,
         responsive: false,
         respondTo: 'slider'
         });*/
        console.log('HomeController');
    }
})();


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

    HomeController.$inject = ['$location'];

    /* @ngInject */
    function HomeController($location) {
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


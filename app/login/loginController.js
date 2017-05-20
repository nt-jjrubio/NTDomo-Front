/**
 * Created by 'jjrubio' on 20/05/2017.
 */


(function () {
    'use strict';


    /**
     * @ngdoc controller
     * @name NTDomo.login:LoginController
     * @description
     * Controller used to show the login page
     */

    angular
        .module('NTDomo.login', ['ngMaterial'])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location'];

    /* @ngInject */
    function LoginController($location) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.login = function() {
            console.log('username', vm.username);
            console.log('password', vm.password);
            $location.path('/home');
        };

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
        console.log('LoginController');
    }
})();


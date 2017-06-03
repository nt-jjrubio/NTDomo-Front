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
        .controller('LoginController', LoginController)
        .controller("SignUpController", SignUpController)
        .controller("LogoutController", LogoutController);

    LoginController.$inject = ['$location', '$auth', '$mdToast'];

    /* @ngInject */
    function LoginController($location, $auth, $mdToast) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        // Check if user is authenticated
        if($auth.isAuthenticated())
        {
            $location.path('/home');
        }

        // AngularMaterial Toast (messages) position


        // Function to login
        vm.login = function() {
            $auth.login({
                username: vm.username,
                password: vm.password
            })
                // If response is OK redirect to /home
                .then(function(){
                    $location.path("/home")
                })
                // If login fails
                .catch(function(response){
                    console.log(response);
 // .textContent('Usuario o password incorrecto')
                    $mdToast.show({
                        templateUrl: '../templates/toast/loginErrorToast.html',
                        position: 'top right',
                        hideDelay: 3000
                    });

                });
        };

        console.log('LoginController');
    }

    function SignUpController() {}

    function LogoutController($auth, $location) {
        // Remove localStorage token and redirect to login
        $auth.logout()
            .then(function() {
                $location.path('/login')
            });
    }

})();


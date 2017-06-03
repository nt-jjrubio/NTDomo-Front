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

    LoginController.$inject = ['$location', '$auth'];

    /* @ngInject */
    function LoginController($location, $auth) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        if($auth.isAuthenticated())
        {
            $location.path('/home');
        }

        vm.login = function() {
            $auth.login({
                username: vm.username,
                password: vm.password
            })
                .then(function(){
                    // Si se ha logueado correctamente, lo tratamos aquí.
                    // Podemos también redirigirle a una ruta
                    //console.log('Login OK')
                    $location.path("/home")

                })
                .catch(function(response){
                    // Si ha habido errores llegamos a esta parte
                    console.log(response);
                });
        };


        console.log('LoginController');
    }

    function SignUpController() {}

    function LogoutController($auth, $location) {
        $auth.logout()
            .then(function() {

                $location.path('/login')
            });
    }

})();


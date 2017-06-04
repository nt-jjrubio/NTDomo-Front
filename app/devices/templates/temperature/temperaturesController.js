(function () {
    'use strict';
    angular
        .module('NTDomo')
        .controller('TemperaturesController', TemperaturesController);

    TemperaturesController.$inject = ['$rootScope', '$interval', 'I2CRequestService', '$mdDialog'];

    function TemperaturesController($rootScope, $interval, I2CRequestService, $mdDialog) {
        console.log('Entra en el controlador de temperaturas');
        var vm = this;
        vm.switch = [];
        vm.error = false;
        vm.reloadTime = 1000;
        vm.device = $rootScope.device;
        vm.refreshTimes = [500, 1000, 2000, 5000, 10000];
        $rootScope.$on('deviceSelected', function (event, data) {
           vm.device = data;
           vm.switchStatus();
            console.log('deviceSelected ', vm.device);
        });
        vm.value=0;
        // Function to get switch status
        vm.switchStatus = function (){
            //console.log('entra en la consulta?');

            var query = {};
            query.dev = vm.device.address;

            // Command to check digital pin 2 status
            query.cmd = 52;
            /*if (ENV.env === 'dev') {
             //query.idA = '2';
             } else{
             query.dev = '0x08';
             }*/

            I2CRequestService.query(query, function (data) {
                vm.error = false;
                if(data.value){
                    vm.switch[0] = true;
                }else{
                    vm.switch[0] = false;
                }

                console.log('switchStatus', data.value);
            }, function (err) {
                console.error(err);

                // To prevent multiple popups
                if(!vm.error)
                {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Ups... ha ocurrido un error')
                            .textContent('Parece que no se puede establecer la comunicacion con el dispositivo.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Cerrar')
                        //.targetEvent(ev)
                    );
                }
                vm.error = true;
                //console.error('error!');
                var msg = '';
                switch (err.status) {
                    case 404:
                        msg = 'Error 404';//TranslationService.err404; '
                        break;
                    case 500:
                        msg = 'Error 500'; //TranslationService.err500;
                        break;
                    default:
                        msg = 'Error default'; //TranslationService.errDefault;
                        break;
                }
            });


        };

        // Function to read temperature (Analog read)
        var reloadQuery = function (){
            //console.log(vm.device);
            var query = {};
            query.dev = vm.device.address;
            // 40 is command for read Analog PIN 0
            query.cmd = '40';
            /*if (ENV.env === 'dev') {
             //query.idA = '2';
             } else{
             query.dev = '0x08';
             }*/

            I2CRequestService.query(query, function (data) {
                //console.log('Entra en el query');
                vm.a0 = data;

                vm.millivolts = (data.value / 1023.0) * 5000;
                vm.celsius = vm.millivolts / 10;
                vm.celsius = vm.celsius.toFixed(1);

                //console.log('Resultado', vm.a0);
                vm.error = false;
            }, function (err) {
                
                if(!vm.error)
                {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Ups... ha ocurrido un error')
                            .textContent('Parece que no se puede establecer la comunicacion con el dispositivo.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Cerrar')
                        //.targetEvent(ev)
                    );
                }
                vm.error = true;

            });


        };
        $interval(reloadQuery, vm.reloadTime);

        // Function to change switch(Digital Write)
        vm.onOffSwitch = function (){
            var query = {};
            query.dev = vm.device.address;

            // Command for digital pin 2
            query.cmd = 102;
            /*if (ENV.env === 'dev') {
             //query.idA = '2';
             } else{
             query.dev = '0x08';
             }*/
            I2CRequestService.query(query, function (data) {
                // If has an error with arduino comunication API returns error message
                //console.log('data', data.status);

                if(data.value){
                    vm.switch[0] = true;
                }else{
                    vm.switch[0] = false;
                }
                console.log('switchOnOff', vm.query);
                vm.error = false;
            }, function (err) {
                console.error(err);
                if(!vm.error)
                {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Ups... ha ocurrido un error')
                            .textContent('Parece que no se puede establecer la comunicacion con el dispositivo.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Cerrar')
                        //.targetEvent(ev)
                    );
                }
                vm.error = true;

            });


        };

        vm.whatDevice = function(){
            console.log("Device selected = ", vm.device);
        };




        
    }


})();


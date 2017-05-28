(function () {
    'use strict';
    angular
        .module('NTDomo')
        .controller('TemperaturesController', TemperaturesController);

    TemperaturesController.$inject = ['$rootScope', '$interval', 'I2CRequestService'];

    function TemperaturesController($rootScope, $interval, I2CRequestService) {
        console.log('Entra en el controlador de temperaturas');
        var vm = this;
        vm.switch = [];

        vm.reloadTime = 1000;
        vm.device = $rootScope.device;
        vm.refreshTimes = [500, 1000, 2000, 5000, 10000];
        $rootScope.$on('deviceSelected', function (event, data) {
           vm.device = data;
           vm.switchStatus();
            console.log('deviceSelected ', vm.device);
        });
        vm.value=0;
        vm.switchStatus = function (){
            console.log('entra en la consulta?');
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

                if(data.value){
                    vm.switch[0] = true;
                }else{
                    vm.switch[0] = false;
                }

                console.log('switchStatus', data.value);
            }, function (err) {
                console.error(err);
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
        // Function to query
        var reloadQuery = function (){
            //vm.value++;
            /** Devices query **/
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

                console.log('Entra en el query');
                vm.a0 = data;

                vm.millivolts = (data.value / 1023.0) * 5000;
                vm.celsius = vm.millivolts / 10;
                vm.celsius = vm.celsius.toFixed(1);
               /* console.log(vm.celsius); */
                console.log('Resultado', vm.a0);
            }, function (err) {
                console.error(err);
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
        $interval(reloadQuery, vm.reloadTime);

        vm.onOffSwitch = function (){
            //vm.value++;


            /** Devices query **/

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

                if(data.value){
                    vm.switch[0] = true;
                }else{
                    vm.switch[0] = false;
                }

                console.log('switchOnOff', vm.query);
            }, function (err) {
                console.error(err);
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




        vm.whatDevice = function(){
            console.log("Device selected = ", vm.device);
        };




        
    }


})();


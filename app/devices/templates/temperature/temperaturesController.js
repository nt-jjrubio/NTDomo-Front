(function () {
    'use strict';
    angular
        .module('NTDomo')
        .controller('TemperaturesController', TemperaturesController);

    TemperaturesController.$inject = ['$rootScope', '$interval', 'I2CRequestService'];

    function TemperaturesController($rootScope, $interval, I2CRequestService) {
        console.log('Entra en el controlador de temperaturas');
        var vm = this;
        vm.reloadTime = 1000;
        vm.device = $rootScope.device;
        vm.refreshTimes = [500, 1000, 2000, 5000, 10000];
        $rootScope.$on('deviceSelected', function (event, data) {
           vm.device = data;
            console.log('deviceSelected ', vm.device);
        });
        vm.value=0;

        // Function to query
        var reloadQuery = function (){
            //vm.value++;


            /** Devices query **/
            console.log(vm.device);
            var query = {};
            query.dev = vm.device.address;
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

        var onOffSwitch = function (){
            //vm.value++;


            /** Devices query **/

            var query = {};
            query.dev = '0x08';
            query.cmd = '0x02';
            /*if (ENV.env === 'dev') {
             //query.idA = '2';
             } else{
             query.dev = '0x08';
             }*/

            I2CRequestService.query(query, function (data) {

                console.log('Entra en el query');
                vm.query = data;

                console.log('Resultado', vm.query);
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


        vm.whatDevice = function(){
            console.log("Device selected = ", vm.device);
        };




        
    }


})();


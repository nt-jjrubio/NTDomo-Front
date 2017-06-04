(function () {
    'use strict';

    angular
        .module('NTDomo.modifyDeviceCtrl', [])
        .controller('modifyDeviceController', modifyDeviceController);

    modifyDeviceController.$inject = ['$location', '$rootScope', '$route', '$mdToast', '$mdDialog'];

    /* @ngInject */
    function modifyDeviceController($location,   $rootScope, $route, $mdToast, $mdDialog) {

        var vm = this;
        console.log('Entra');
        vm.address = [];
        vm.title = 'Modificar dispositivo';
        vm.deleteAllowed = true;


        vm.close = function()
        {
            $mdDialog.cancel();
        };

        for (var i=2; i<256; i++){
            var add = '';
            if(i<16)
            {
                add= '0'+(+i).toString(16).toUpperCase();
            }else {
                add = (+i).toString(16).toUpperCase();
            }
            vm.address.push(add);
        }
        console.log('Seleccionado desde modificar', $rootScope.device);
        var selectedDevice = $rootScope.device;
        vm.device = {
            'name': selectedDevice.name,
            'address':  selectedDevice.address,
            'type': selectedDevice.type,
            'icon': selectedDevice.icon
        };
        /*vm.save = function(){

            switch(vm.device.type)
            {
                case 'temperature':
                    vm.device.icon = 'fa-thermometer-half';
                    break;
                case 'light':
                    vm.device.icon = 'fa-lightbulb-o';
                    break;
            }
            NewDeviceService.post( vm.device, function (data) {
                console.log(data);
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Dispositivo creado correctamente')
                        .position('top right')
                        .hideDelay(3000)
                );
                $mdDialog.cancel();
                $route.reload();


            }, function (err) {
                console.debug(err.message);
                var msg = '';
                switch (err.status) {
                    case 404:
                        vm.error = '404 - No tienes permiso';
                        msg = 'Error 404';//TranslationService.err404; '
                        break;
                    case 500:
                        msg = 'Error 500'; //TranslationService.err500;
                        vm.error = 'Parece que ya existe este dispositivo';
                        break;
                    default:
                        msg = 'Error default'; //TranslationService.errDefault;
                        break;
                }
            });
        };*/
    }






})();


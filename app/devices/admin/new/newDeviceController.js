(function () {
    'use strict';

    angular
        .module('NTDomo.newDevice', [])
        .controller('newDeviceController', newDeviceController);

    newDeviceController.$inject = ['$location', 'ENV','$rootScope'];

    /* @ngInject */
    function newDeviceController($location,  ENV,  $rootScope) {

        var vm = this;
        console.log('Entra');
        vm.address = [];

        for (var i=2; i<256; i++){
            var add = '';
            if(i<16)
            {
                add= '0'+(+i).toString(16).toUpperCase();;
            }else {
                add = (+i).toString(16).toUpperCase();
            }
            vm.address.push(add);

        }
        vm.device = {
            'name':'Luces exterior',
            'address': '0x19',
            'type':'light',
            'icon':'fa-lightbulb-o'
        };

    }






})();


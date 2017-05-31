(function () {
    'use strict';

    angular
        .module('NTDomo.newDeviceCtrl', [])
        .controller('newDeviceController', newDeviceController);

    newDeviceController.$inject = ['$location', 'ENV','$rootScope','NewDeviceService'];

    /* @ngInject */
    function newDeviceController($location,  ENV,  $rootScope, NewDeviceService) {

        var vm = this;
        console.log('Entra');
        vm.address = [];

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
        vm.device = {
            'name':'Luces exterior',
            'address': '0x19',
            'type':'light',
            'icon':'fa-lightbulb-o'
        };
        vm.save = function(){
            /*

             .post(query, vm.asset, function (data) {
             console.log('data',data);
             var source = {
             'name':'',
             'type': 1,
             'id_asset':-1,
             'id_parent':-1
             };
             source.name = data.name;
             source.id_asset = data.id;
             source.id_parent = idTreeNode;
             $rootScope.$emit('newAsset',source);


             cont = 0;
             vm.clearForm();
             }, function (err) {
             console.log('err',err);
             SweetAlert.swal({
             title: '',
             text: TranslationService.messageError + err.status,
             customClass: 'csightAlert'
             });
             });
             }
             */

            NewDeviceService.post( vm.device, function (data) {
                console.log(data);

            }, function (err) {
                console.debug(err.message);
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
    }






})();


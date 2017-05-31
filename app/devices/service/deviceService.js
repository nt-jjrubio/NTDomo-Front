'use strict';
angular.module('NTDomo.device.service', ['ngResource', 'NTDomo.config'])
    .factory('DeviceService', DeviceService);

    DeviceService.$inject = ['$resource', 'devices', 'ENV'];
    function DeviceService($resource, devices, ENV) {
        console.log('Device Query');
        return $resource(ENV.server + devices.devices, '@data', {
            query: {
                method: 'GET',
                isArray: true
            },
            get: {
                method: 'GET',
                isArray: false
            }

        });
    }





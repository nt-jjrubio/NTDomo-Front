
'use strict';
angular.module('NTDomo.deleteDevice.service', ['ngResource', 'NTDomo.config'])
    .factory('DeleteDeviceService', DeleteDeviceService);

DeleteDeviceService.$inject = ['$resource', 'devices', 'ENV'];
function DeleteDeviceService($resource, deleteDevice, ENV) {
    console.log('$resource');
    return $resource(ENV.server + deleteDevice.deleteDevice, '@data', {
        delete: {
            method: 'DELETE'
        }
    });
}

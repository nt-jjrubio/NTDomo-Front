
'use strict';
angular.module('NTDomo.newDevice.service', ['ngResource', 'NTDomo.config'])
    .factory('NewDeviceService', NewDeviceService);

NewDeviceService.$inject = ['$resource', 'devices', 'ENV'];
function NewDeviceService($resource, newDevice, ENV) {
    return $resource(ENV.server + newDevice.newDevice, '@data', {
        post: {
            method: 'POST'
        },
        put: {
            method: 'PUT'
        }
    });
}

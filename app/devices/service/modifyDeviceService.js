
'use strict';
angular.module('NTDomo.modifyDevice.service', ['ngResource', 'NTDomo.config'])
    .factory('ModifyDeviceService', ModifyDeviceService);

ModifyDeviceService.$inject = ['$resource', 'devices', 'ENV'];
function ModifyDeviceService($resource, modifyDevice, ENV) {
    return $resource(ENV.server + modifyDevice.modifyDevice, '@data', {
        post: {
            method: 'POST'
        }
    });
}

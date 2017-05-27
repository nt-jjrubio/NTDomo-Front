
'use strict';
angular.module('NTDomo.i2cRequest.service', ['ngResource', 'NTDomo.config'])
    .factory('I2CRequestService', I2CRequestService);

I2CRequestService.$inject = ['$resource', 'devices', 'ENV'];
function I2CRequestService($resource, devices, ENV) {
    console.log('i2cRequest Query');
    return $resource(ENV.server + devices.i2cRequest, '@data', {
        query: {
            method: 'GET',
            isArray: false
        },
        get: {
            method: 'GET',
            isArray: false
        }

    });
}

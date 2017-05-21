
angular.module('NTDomo.config', [])
    .constant('ENV', {
        'env': 'dev'
    })
    .constant('devices', {
        'devices': 'devices/data/devices.json'
    });

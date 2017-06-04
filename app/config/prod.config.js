angular.module('NTDomo.config', [])
    .constant('ENV', {
        'env': 'prod',
        'server': 'http://192.168.2.190:3001/api/'
    })
    .constant('devices', {
        'devices': 'devices',
        'newDevice': 'newDevice',
        'deleteDevice': 'deleteDevice/:dev',
        'modifyDevice': 'modifyDevice',
        'i2cRequest': 'i2cRequest/:dev/:cmd'
    });






//i2cRequest: ENV.urlBase + 'i2cRequest/:dev/:cmd'
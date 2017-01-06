angular.module('meusServicos', ['ngResource'])
    .factory("recursoIndice", function($resource) {
        return $resource("/", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        })
    .factory('listaIndices',['$resource', function(){
        return $resource('/', {}, {
            get: {method:'GET', cache: false, isArray: true}
        });
    }]);
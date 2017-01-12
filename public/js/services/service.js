angular.module('meusServicos', ['ngResource'])
    .factory("recursoIndice", function($resource) {
        return $resource("/", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        })
    .factory('listaIndices',['$resource', function(){
        /*var rm = this;
        var busca = '' ;
        if(busca.isEmpty){
            this.busca = busca;
        };
        var link = "http://sandbox.buscape.com.br/service/findProductList/lomadee/2b306b414d622f4c6137733d/BR/?sourceId=35716948&keyword="+ busca +"&format=json";*/
        
        return $resource('/', {}, {
            get: {method:'GET', cache: false, isArray: true}
        });
    }]);
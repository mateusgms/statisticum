angular.module('diretivasDashboard', [])
    .directive('selecaoGrupo',
        function () {
            var ddo = {};
            ddo.restrict = "AE";
            ddo.templateUrl = 'dist/diretivas/selecao-grupos.html';
            
            return ddo;
         })
    .directive('menuPrincipal',
        function () {
            var ddo = {};
            ddo.restrict = "AE";
            ddo.templateUrl = 'dist/diretivas/menu-principal.html';
            
            return ddo;
         })
    .directive('rodapePrincipal',
        function () {
            var ddo = {};
            ddo.restrict = "AE";
            ddo.templateUrl = 'dist/diretivas/rodape-principal.html';
            
            return ddo;
         });

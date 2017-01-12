angular.module("minhasDiretivas", [])
       .directive("meuPainel", function() {
         var ddo = {};

         ddo.restrict = "AE";

         ddo.scope = {
           titulo : "@titulo",
         };

         ddo.transclude = true;

         ddo.templateUrl = "js/directives/meu-painel.html";

         return ddo;
       })
       .directive("minhaFoto", function() {
         var ddo = {};

         ddo.restrict = "AE";

         ddo.scope = {
           titulo : "@titulo",
           url : "@url"
         };

         ddo.templateUrl = "js/directives/minha-foto.html";

         return ddo;
       })
       .directive("botaoExcluir", function() {
         var ddo = {};

         ddo.restrict = "AE";

         ddo.scope = {
           acao : "&acao",
           nome : "@nome"
         };

         ddo.templateUrl = "js/directives/botao-excluir.html";

         return ddo;
       })
        .directive('selecaoGrupo',
        function () {
            var ddo = {};
            ddo.restrict = "AE";
            ddo.templateUrl = 'partials/selecao-grupos.html';
            
            return ddo;
         })
        .directive('menuPrincipal',
        function () {
            var ddo = {};
            ddo.restrict = "AE";
            ddo.templateUrl = 'partials/menu-principal.html';
            
            return ddo;
         })
        .directive('rodapePrincipal',
        function () {
            var ddo = {};
            ddo.restrict = "AE";
            ddo.templateUrl = 'partials/rodape-principal.html';
            
            return ddo;
         });


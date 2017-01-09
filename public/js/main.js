angular.module("dashboardApp", ["minhasDiretivas", "ngAnimate", "ngRoute", "meusServicos"])
       .config(function($routeProvider, $locationProvider) {
         $locationProvider.html5Mode(true);
         $routeProvider.when("/", {
             templateUrl : "partials/selecao-produtos.html",
             controller : "ProdutosController"
         });
         $routeProvider.when("/mediadeprecos", {
             templateUrl : "partials/media-preco.html",
             controller : "ProdutosController"
         });
        $routeProvider.when("/selecaodegrupos", {
             templateUrl : "partials/selecao-grupos.html",
             controller : "SelecaoController"
         });
         $routeProvider.when("/comparativo", {
           templateUrl : "partials/comparativo-indicadores.html",
           controller : "ProdutosController"
         });
         $routeProvider.when("/consultasanteriores", {
           templateUrl : "partials/lista-consultas.html",
           controller : "ProdutosController"
         });
         $routeProvider.when("/atribuimes",{
          templateUrl : "partials/atribui-mes.html",
          controller : "SelecaoController"
         });
          $routeProvider.when("/novogrupo",{
          templateUrl : "partials/adiciona-grupo.html",
          controller : "SelecaoController"
         });
           $routeProvider.when("/novoindice",{
          templateUrl : "partials/adiciona-indice.html",
          controller : "SelecaoController"
         });
         $routeProvider.when("/resultadofinal", {
           templateUrl : "partials/resultado-final.html",
           controller : "SelecaoController"
         });

         

         $routeProvider.otherwise({redirectTo : "/"});
       });

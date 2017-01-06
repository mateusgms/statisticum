angular.module("dashboardApp", ["minhasDiretivas", "ngAnimate", "ngRoute", "meusServicos"])
       .config(function($routeProvider, $locationProvider) {
         $locationProvider.html5Mode(true);
         $routeProvider.when("/", {
             templateUrl : "partials/welcome.html",
             controller : "ContratoController"
         });
         $routeProvider.when("/novocontrato", {
             templateUrl : "partials/novo-contrato.html",
             controller : "ControllerContrato"
         });
        $routeProvider.when("/selecaodegrupos", {
             templateUrl : "partials/selecao-grupos.html",
             controller : "SelecaoController"
         });
         $routeProvider.when("/fotos", {
           templateUrl : "partials/principal.html",
           controller : "FotosController"
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

         $routeProvider.when("/fotos/edit/:fotoId", {
           templateUrl : "partials/foto.html",
           controller : "FotoController"
         });

         $routeProvider.otherwise({redirectTo : "/"});
       });

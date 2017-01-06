angular.module("dashboardApp")
    .controller("ContratoController", ['$scope',
        function ($scope) {

            /* 
              
              Para quando for colocar ligado ao servidor!!
                          
              $http.get('caminho no servidor')
              .success(function(contratos){
              $scope.contratos = contratos;
              })
              .error(function(erro){
                  console.error('Os dados do contrato nao foram carregados')
              });
              */


            $scope.nome = 'Mateus Gomes';
            $scope.contratos = [
                {
                    _id: 1,
                    nome: 'Contrato Médio',
                    numero: '101'
        }
      , {
                    _id: 2,
                    nome: 'Contrato Gigante',
                    numero: '031'
            }
      , {
                    _id: 3,
                    nome: 'Contrato Exponencial',
                    numero: '051'
            }
      ];
        }]);

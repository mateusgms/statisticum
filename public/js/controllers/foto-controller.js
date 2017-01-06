angular.module("dashboardApp")
    .controller("FotoController", function ($scope, recursoFoto, $routeParams, cadastroDeFotos) {
        $scope.indice = {};
        $scope.mensagem = "";

        if ($routeParams.fotoId) {
            recursoFoto.get({
                fotoId: $routeParams.fotoId
            }, function (indice) {
                $scope.indice = indice;
            }, function (erro) {
                $scope.mensagem = "Não foi possível obter a foto";
            });
        }

        $scope.submeter = function () {
            if ($scope.formulario.$valid) {
                cadastroDeFotos.cadastrar($scope.indice)
                    .then(function (dados) {
                        $scope.mensagem = dados.mensagem;

                        if (dados.inclusao) {
                            $scope.indice = {};
                        }
                    })
                    .catch(function (erro) {
                        $scope.mensagem = erro.mensagem;
                    });
            }
        };
    });

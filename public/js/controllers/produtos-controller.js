angular.module("dashboardApp")
	.controller('ProdutosController', function produtosController($scope, ProdutosList){

		$scope.produtosList = [];
        ProdutosList.get({},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.produtosList = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );

		

	});
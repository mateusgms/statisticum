angular.module("dashboardApp")
	.controller('ProdutosController', function produtosController($scope, $http){

		$scope.product = '';
        $http({
            method:'GET',  url:'http://sandbox.buscape.com.br/service/findProductList/lomadee/2b306b414d622f4c6137733d/BR/?sourceId=35716948&keyword=pneu&format=json'
        })       
		.success(function(data, status, headers, config){
            $scope.product = data.product;
        })
        .error(function(data, status, headers, config){
            console.log(status);
        });

	});
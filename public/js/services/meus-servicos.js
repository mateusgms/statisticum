angular.module("meusServicos", ["ngResource"])
       .factory("recursoFoto", function($resource) {
         return $resource("/v1/fotos/:fotoId", null, {
           "update" : {
             method : "PUT"
           }
         });
       })
       .factory("cadastroDeFotos", function(recursoFoto, $q) {
         var service = {};

         service.cadastrar = function(indice) {
           return $q(function(resolve, reject) {
             if (indice._id) {
               recursoFoto.update({fotoId : indice._id}, indice, function() {
                 resolve({
                   mensagem : "Indice " + indice.titulo + " atualizado com sucesso",
                   inclusao : false
                 });
               }, function(erro) {
                 console.log(erro);
                 reject({
                   mensagem : "Não foi possível atualizar o indice" + indice.titulo
                 });
               });
             } else {
               recursoFoto.save(indice, function() {
                 resolve({
                   mensagem : "Indice " + indice.titulo + " incluído com sucesso",
                   inclusao : true
                 });
               }, function(erro) {
                 console.log(erro);
                 reject({
                   mensagem : "Não foi possível incluir a foto " + indice.titulo
                 });
               });
             }
           });
         };

         return service;
       });

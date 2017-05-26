angular.module('contatooh').controller('ContatosController',
	function($scope, $resource) {

		$scope.contatos = [];

		$scope.total = 0;

		$scope.filtro = '';

		$scope.mensagem = {texto: ''};

		$scope.incrementa = function() {
			$scope.total++;
		};

		var Contato = $resource('/contatos/:id');

		function buscaContatos() {
			Contato.query(
				function(contatos) {
					$scope.contatos = contatos;
				},
				function(erro) {
					$scope.mensagem = {
						'texto': 'Não foi possível obter a lista de contatos'
					}
				}
			);
		}

		buscaContatos();

		$scope.remove = function(contato) {
			Contato.delete(
				{id: contato._id},
				buscaContatos,
				function(erro) {
					$scope.mensagem = {
						'texto': 'Não foi possível remover o contato'
					}
				}
			);
		};

	}
);

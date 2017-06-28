
module.exports = function(app) {
	var controller = app.controllers.contato;

	app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obtemContato);
	app.post('/contatos', controller.salvaContato);
	app.delete('/contatos/:id', controller.removeContato);
};

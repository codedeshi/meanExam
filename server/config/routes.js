var mongoose = require('mongoose');

var uc = require('../controller/usersController.js');  
var lc = require('../controller/listController.js');


module.exports = function(app){
	app.post('/user', uc.register);
	app.get('/users/:user', uc.getUsers);
	app.post('/addItem', lc.addItem);
	app.get('/getUserList/:id', lc.getUserList);
	app.post('/updateCheck/:title/:user/:loguser/:check', lc.updateCheck);
}

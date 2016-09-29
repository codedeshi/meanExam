var mongoose = require('mongoose');
var List = mongoose.model('listModel');

function ListController(){
	var votes;

	this.addItem = function(req,res){
		console.log(req.body);
		var error =[];
		List.insertMany(req.body, function(err,data) {
			if(err) {
				for(key in err.errors){
					error.push(err.errors[key].message)
				}
				res.json({errors: error,data:data});
			}
			else {
				res.json({errors:error,data:data})
			}
		});
	}
	this.getUserList = function(req,res){
		List.find({user:req.params.id},function(err,data){
			res.json(data);
		})
	}

	this.updateCheck = function(req,res){
		List.find({title:req.params.title,user:req.params.loguser},function(err,data){
			if(data.length==0){
				return res.json(data);
			}
			else {
				List.update({title:req.params.title,user:req.params.user},{check:req.params.check},function(err,data){
					return res.json(data);
				})

			}
		})
	}
}

module.exports = new ListController();
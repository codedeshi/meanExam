var mongoose = require('mongoose'),
	titlelength = 5,
	desclength = 10,
	requiredMessage = '{PATH} cannot be empty',
	error = '`{PATH}` should be at least {MINLENGTH} characters.';

var listSchema = new mongoose.Schema({
	title	: 	{
					type : String, 
					required:  requiredMessage,
					minlength: [titlelength , error],
					trim: true
				},
	description	: 	{
					type : String, 
					required:  requiredMessage,
					minlength: [desclength , error],
					trim: true
				},
	check	: 	{
					type : Boolean, 
					default: false
				},
	user	:	{
					type : String,
					required:  requiredMessage,
	},
	addedBy	:	{
					type : String,
					required:  requiredMessage,
	}
},  {timestamps: true});

var listModel = mongoose.model('listModel', listSchema);

myApp.factory('listFactory', function($http,$routeParams) {
		function listFactory(){
		var _this = this;

		this.addItem = function(createObj,callback){
			$http.post("/additem",createObj).then(function(returnedData){
				if (returnedData.data.errors.length == 0) {
					callback(returnedData.data.errors);
				}
				else {
					callback(returnedData.data.errors)
				}
			})
		}
		this.getUserList = function(id,callback){
			$http.get("/getUserList/"+id).then(function(returnedData){
				callback(returnedData.data);
			})
		}

		this.updateCheck = function(title,user,check,loguser,callback){
			$http.post("/updateCheck/"+title+"/"+user+"/"+loguser+"/"+check).then(function(returnedData){				
				callback(returnedData);
			})
		}

		// this.getlist = function(callback){
		// 	$http.get("/getlist").then(function(returnedData){
		// 		callback(returnedData.data);
		// 	})
		// }
	}
	return new listFactory();
});

myApp.factory('userFactory', function($http,$routeParams,$cookies) {

	function userFactory(){
		var _this = this;

		_this.register = function(user,callback){
			$http.post('/user',user).then(function(res){
				if ('error' in res.data) {
					callback(res.data);
				}
				else{
					$cookies.putObject('current_user',res.data);
					callback(res.data);
				}
			});
		}
		_this.getUsers = function(user,callback){
			$http.get('/users/'+user).then(function(res){
				callback(res.data)
			})
		}
	}
	return new userFactory();
});

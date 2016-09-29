myApp.controller('listController', function($routeParams,$location, listFactory, userFactory,$cookies) {
	var self = this;
	this.newPoll = {};
	this.createObj = [];
	this.listCreateError = [];
	this.cu = $cookies.getObject('current_user');

	this.logCheck = function(){
		if (!this.cu) {
			$location.path('/');
		}
	}

	this.getUsers = function(){
		this.logCheck();
		userFactory.getUsers(self.cu.username,function(returnData){
			self.users = returnData;
		})
	}

	this.addItem = function() {
		this.logCheck();		
		var userOne, userTwo;
	
		if(self.secondUser){
			userOne = {
				user		: self.cu.username,
				title 		: self.title,
				description	: self.description
			}
			userTwo = {
				user		: self.secondUser,
				title 		: self.title,
				description	: self.description
			}
			self.createObj.push(userOne,userTwo);
		}
		else {
			userOne = {
				user		: self.cu.username,
				title 		: self.title,
				description	: self.description
			}
			self.createObj.push(userOne);
		}
		
		listFactory.addItem(self.createObj,function(returnData) {

			if (returnData.length){
				self.listCreateError  = returnData;
				$location.path("/dashboard");
			}
			else {
				self.title ='';
				self.description ='';
				self.secondUser ='';
				self.createObj =[];
				self.getUserList(self.cu.username);
			}
		});
	}

	this.getUserList = function(user){
		this.logCheck();
		if (typeof user == 'undefined'){
			listFactory.getUserList($routeParams.user,function(returnData){
				self.userlist = returnData;
			})
		}
		else {
			listFactory.getUserList(user,function(returnData){
				self.userlist = returnData;
			})
		}
	}

	this.updateCheck = function(title,user,check){
		listFactory.updateCheck(title,user,check,self.cu.username, function(returnData){
			self.getUserList(user);
		})
	}
})

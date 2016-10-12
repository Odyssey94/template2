var helloApp = angular.module("helloApp", []);
helloApp.controller("CompanyCtrl", function($scope) {
$scope.companies = [
                    { 'name':'Infosys Technologies',
                    	'email': 'firstdawn1994@gmail.com',},
                    	{ 'name':'Cognizant Technologies',
	                    	'email': 'cognizant@gmail.com',},
	                    	{ 'name':'Wipro',
		                    	'email': 'wipro@gmail.com',},
		                    	{ 'name':'Tata Consultancy Services (TCS)',
			                    	'email': 'tata@gmail.com',},
			                    	{ 'name':'HCL Technologies',
				                    	'email': 'hcl@gmail.com',},
                    ];
$scope.addRow = function(){ 
  //store the new company in a variable for easy reference
  var newCompany = { 'name':$scope.name, 'email': $scope.email };
  //loops through existing companies to check if the email exists already
  var emailExists = $scope.companies.some(function(item){
         return item.email === newCompany.email;
  });

  //validation check before inserting the new company.
  if( $scope.companies.length < 10 && !emailExists){
    $scope.companies.push(newCompany);
    $scope.name='';
    $scope.email='';
  }else{
    //display some validation messages
  }

};
$scope.removeRow = function(name){				
		var index = -1;		
		var comArr = eval( $scope.companies );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.companies.splice( index, 1 );

	};
});

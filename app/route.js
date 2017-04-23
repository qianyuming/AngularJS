
function route($routeProvider){
	$routeProvider
        .when('/',{
            templateUrl:'view/updateInformation.html',
            controller:'aaa'
        }) 
        .when('/jianjie',{
            templateUrl:'view/introduce.html',
            controller:'aaa'
        })
        .when('/xinxi',{
            templateUrl:'view/information.html',
            controller:'aaa'
        })
        .when('/caozuo',{
        	
        })
        .when('/lanmu',{

        })
        .when('/more',{
    
        })
        .otherwise({redirectTo:'/'});
}


function showBanner(){
        return {
            restrict: 'EA',
            template:'<span class="glyphicon glyphicon-list" ng-click="showBanner=!showBanner" ng-model="showBanner"></span>',
        	link:function(scope, element, attrs){
        		scope.$watch("showBanner",function(newValue,oldValue, scope){
				        if(newValue){
				        	angular.element('.bg2').removeClass('col-md-10');
				        	angular.element('.bg2').addClass('col-md-12');
				        	angular.element('.ys4').removeClass('col-md-10');
				        	angular.element('.ys4').addClass('col-md-12');
				        }
				        else{
				        	angular.element('.bg2').removeClass('col-md-12');
				        	angular.element('.bg2').addClass('col-md-10');
				        	angular.element('.ys4').removeClass('col-md-12');
				        	angular.element('.ys4').addClass('col-md-10');
				        }
				});
        	}
        };
    }

function addComment(){
        return {
            restrict: 'EA',
        	link:function(scope, element, attrs){
        		element.on('click', function () {
                    var comArr={};
					comArr.userImg="images/a5.jpg";
					comArr.commTarget="请叫我大帅柯";
					comArr.userName="我是黄小明";
					comArr.userComment=scope.com;
					comArr.time=new Date();
					scope.comments.push(comArr);
					scope.$apply();
                });
        	}
        };
    }

angular.module('animate_server', ["ngAnimate"])
.factory('animater', function(){
    return {
        log:function(msg){
            console.log(msg+'111');
        }
    }
});
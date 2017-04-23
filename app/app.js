
angular.module('myapp', ['ngRoute','ngAnimate'])
	.config(route)                               
    .controller('mainctrl',mainctrl)             
    .controller('aaa',aaa)                       
    .animation('.fadeComment',fadeComment)		 
    .directive('showBanner',showBanner)          
    .directive('addComment',addComment);	     
    
    
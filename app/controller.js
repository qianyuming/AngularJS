
function mainctrl ($scope){
	$scope.userArr=[
			{'userName':"别无所求",'tag':'IT大牛','userAddress':'石家庄，河北','userImg':'images/a0.jpg'},
			{'userName':'小鱼儿','userImg':'images/a9.jpg','content':'不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。 蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。'},
			{'userName':'帕金森','userImg':'images/a6.jpg','content':'日动影移，日穿帘隙，时间悄无声息地离去。不知不觉，那么多渐行渐远的岁月，如今只剩下依稀的背影，翻过岁月的篱墙，面对那些悄然散场的旧时光，莞尔一笑，只言感恩岁月，不诉岁月离殇。','contentImg':'images/c5.jpg'},
			{'userName':'请叫我大帅柯','userImg':'images/a4.jpg','content':'这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。'},
			{'userName':'月亮的影子 ','userImg':'images/a2.jpg','content':'孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。'}
			
	];
	$scope.fansArr=[
			{'fansImg':'images/a1.jpg','fansName':'小王','fansTag':'设计师，博客'},
			{'fansImg':'images/a2.jpg','fansName':'张琳','fansTag':'作家，杂志编辑'},
			{'fansImg':'images/a3.jpg','fansName':'李小明','fansTag':'艺术总监，电影剪辑'},
			{'fansImg':'images/a4.jpg','fansName':'赵大城','fansTag':'音乐家，运动员'},
	];
	$scope.navArr=[
			{nav:'首页',href:'#/',navClass:'glyphicon glyphicon-home'},
			{nav:'简介',href:'#/jianjie',navClass:'glyphicon glyphicon-file'},
			{nav:'信息',href:'#/xinxi',navClass:'glyphicon glyphicon-envelope'},
			{nav:'操作',href:'#/caozuo',navClass:'glyphicon glyphicon-cog'}
	];
	$scope.caozuoArr=[
			{nav:'设置栏目',href:'#/lanmu'},
			{nav:'更多设置',href:'#/more'},
			{nav:'分割线',href:'#/fenge'}
	];
	$scope.showNav=true;
	$scope.showBanner=false;
	$scope.showNavFun=function(){
		$scope.showNav=!$scope.showNav;
	}
	
	$scope.comments=[
			{commTarget:'小鱼儿',userImg:"images/a5.jpg",userName:"大张李",userComment:'希望你能每天都快乐',time:''},
			{commTarget:'请叫我大帅柯',userImg:"images/a5.jpg",userName:"我是黄小明",userComment:'我只是从这里路过......',time:''}
	]
	$scope.addComment=function(){
		var comArr=[];
		comArr.userImg="images/a5.jpg";
		comArr.commTarget="请叫我大帅柯";
		comArr.userName="我是黄小明";
		comArr.userComment=this.com;
		comArr.time=new Date();
		$scope.comments.push(comArr);
		console.log(comArr);
	}
	
}

function aaa ($scope){
	console.log("调用路由");
}



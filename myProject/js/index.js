var header_left=['品牌推荐','服饰鞋帽','食品酒水','母婴玩具','日用百货','智能电配','个护化妆','鞋包饰品','户外运动'];
var header_left1=['&#xe64a;','&#xe657;','&#xe60b;','&#xe503;','&#xe624;','&#xe613;','&#x3441;','&#xe618;','&#xe604;'];
$('#header_left ul').on('mouseover','li',function(){
	$(this).children().html(header_left[$(this).index()])
			.css('font-size','12px');
			
	$(this).mouseout(function(){
		$(this).children().html(header_left1[$(this).index()])
			.css('font-size','22px');
	})
});
$('#header_top ul li').click(function(){
	
	$('#header_top ul li ul').css('display','none');
	$(this).children().eq(1).css('display','block');
	
})
//$(document).click(function(){
//		$('#header_top ul li ul').css('display','none');
//})
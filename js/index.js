$(document).ready(function(){
	//轮播图
	$('.q-img').css('left','200%');
	$('.q-img').eq(0).show().css('left','0');
	let len = $('.q-img').length;
	let i = 0;
	let j = 0;
	function move(){
		j = i + 1;
		if( j > len - 1){
			j = 0;
		}
		$('.q-img').removeAttr('id');
		$('.q-img').eq(j).show().css('left','200%');
		$('.q-img').eq(i).show().animate({left:'-200%'}).removeAttr('id');
		$('.q-img').eq(j).show().animate({left:0}).attr('id','q-active-r');
		i = j;
	}
	let t = setInterval(move,5000);
	$('.q-ban').mouseover(function(){
		clearInterval(t);
	});
	$('.q-ban').mouseout(function(){
		t = setInterval(move,1500);
	});
	$('.q-left').click(function(){
		j = i - 1;
		if(j<0){
			j=len - 1;
		}
		$('.q-img').removeAttr('id');
		$('.q-img').eq(j).show().css('left','-200%');
		$('.q-img').eq(i).show().animate({left:'200%'}).removeAttr('id');
		$('.q-img').eq(j).show().animate({left:0}).attr('id','q-active-r');
		i = j;
	});
	$('.q-right').click(function(){
		move();
	});
});
//大的轮播图
$(document).ready(function(){
	let qImgs = $('.q-b-box .col-sm-4');
	let qreal = qImgs.children();
	let width = qImgs.width();
	let i=1;
	$('.q-bleft').click(function(){
		i--;
		if(i < 0){
			i = qImgs.length-1;
		}
		qreal.removeAttr('id').eq(i).attr('id','q-img-b-active');
	});
	$('.q-bright').click(function(){
		i++;
		if(i > qImgs.length-1){
			i = 0;
		}
		qreal.removeAttr('id').eq(i).attr('id','q-img-b-active');
	});
});

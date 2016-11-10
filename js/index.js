//回顶部
$('.to-top').toTop();
//tab切
$('.xox').click(function () {
	$('.sf').hide();
	$('.sf2').show();
})
//yangshi
$(function () {
	$('.outcen li').click(function () {
		 var c = $(this).index();
    /*alert(c)*/
    $('.outcen li').eq(c).addClass('out_color').siblings().removeClass('out_color');
	})
})
//账单切换
$(function () {
	var x=0;
 	var tpl=$('.x_qi').outerWidth(true);
 	var ang=true;

 	
	$('.lgf').click(function (){
		if (ang) {
			ang=false;
			x++;
			if (x>0) {
				$(".rgf").attr("src","../../images/descend1.png");
				$('.viio').css('border','1px dashed #f6b042')
			}
			if (x>=$('.x_qi').length) {
				x=0;
				$(".rgf").attr("src","../../images/descend.png");
				$('.viio').css('border','1px dashed #ccc')


			};
			
			$('.nlu').stop().animate({scrollLeft:tpl*x},'slow','easeOutExpo',function (){
				ang=true;
			});
		};
	})
	$('.rgf').click(function (){
		if (ang) {
			ang=false;
			x--;
			if (x<1) {
				$(".rgf").attr("src","../../images/descend.png");
				$('.viio').css('border','1px dashed #ccc')
			}
			if (x<0) {
				x=$('.nlu').length-1;
			};
			
			$('.nlu').stop().animate({scrollLeft:tpl*x},'slow','easeOutBounce',function (){
				ang=true;
			});
		};
	});
});
//微调
$('.wrrt p').eq(1).hide();

//
$(function () {
	$('.logs').click(function () {
		$('.weivo').hide();
		$('.weivo2').show();
	})
	$('.logs2').click(function () {
		$('.weivo2').hide();
		$('.weivo').show();
	})
})
//setmen
$(function () {
	$('.dd_ww').click(function () {
		$('.dd_ww').attr("src","../images/4564.png")
		$('.qieowe_d').css('color','#42a6fa')

		$('.ww_dd').attr("src","../images/213.png")
		$('.qieowe').css('color','#333')

	})
	$('.ww_dd').click(function () {
		$('.ww_dd').attr("src","../images/4564.png")
		$('.qieowe').css('color','#42a6fa')
		$('.dd_ww').attr("src","../images/213.png")
		$('.qieowe_d').css('color','#333')
	})
})
$('.w').click(function () {
	var i = $('.w').index(this);
	$('.w').eq(i).addClass('w_nice').siblings().removeClass('w_nice');
})
//lingyu
$('.dje').css({'visibility':'hidden'})

$('.zej').click(function () {
	$('.dje').css({'visibility':'visible'})


		var i = $('.bens').length
		if (i>=3) {
			$('.zej').hide();
			$('.bens .wwe').eq(0).hide();
			$('.bens').eq(1).css('bottom','120px;')
		}
		
		 
		

		 $('.bens').eq(i-1).before($('.bens').eq(i-1).clone(true))
		  $('.dje').eq(0).css({'visibility':'hidden'})
		  $('.kui').eq(1).css({'visibility':'hidden'})
		  $('.zej').eq(1).css({'visibility':'hidden'})


		
	})

$('.dje').on('click',function(){
	var i = $('.bens').length
	if (i<5) {
		$('.zej').show();
		$('.bens .wwe').eq(0).show();

	}

	var w=$('.dje').index(this);
	$(this).parents('.bens').animate({right:'40px'},400);
	
		 setTimeout(function() {
      $(".bens").eq(w).remove();},300);
})
if ($('.bens').length>=3){
        
    }
//微调
$('.wrrt p').eq(1).hide();




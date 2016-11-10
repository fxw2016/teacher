
$('.to-top').toTop();


	/*$('.and').click(function () {
		 var html = $('.oiss'); 
		 $('.oiss').after( $('.oiss').clone(true))
	})*/
	$('.dje').css({'visibility':'hidden'})
	$('.and').click(function () {
		$('.dje').css({'visibility':'visible'})
		 var html = $('.oiss');
         var i = $('.oiss').length
		 $('.oiss').eq(i-1).after($('.oiss').eq(i-1).clone(true))
		 $('.dje').eq(0).css({'visibility':'hidden'})
	})





$('.dje').on('click',function(){
	var w=$('.dje').index(this);
	$(this).parents('.oiss').animate({left:'40px'},400);
	$(this).parents('.oiss').css('box-shadow',"1px 1px 35px 5px red");
		 setTimeout(function() {
      $(".oiss").eq(w).remove();},300);
})


//Î¢µ÷
$('.wrrt p').eq(1).hide();
/*$('.oiss:first .dje').css('opacity','0');*/
/*$('.oiss').eq(0).find('.dje').css('opacity','0')*/

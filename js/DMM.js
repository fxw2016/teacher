$('#gw li').click(function () {
	var c = $(this).index();
    /*alert(c)*/
    $('#gw li').eq(c).addClass('psp').siblings().removeClass('psp');
})
//判断类型
$(function () {
	$('.dy').click(function () {
		if ($('#pou').hasClass('psp')) {
				$('.yyo a').attr("href","DMMtwo.html")

		}else{
		/*	$('.yyo a').attr("href","DMMsc.html")*/
		
		}
	})
})
//继续添加
$('.pengke').click(function () {
	alert(1)
	    $(".rongq").after(
                $('.rongq').clone()
            )


	
})
//微调
$('.wrrt p').eq(1).hide();
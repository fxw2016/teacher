
//�γ�����
  $('.dq_fe .dww').click(function () {

    var i = $(this).index();

    $('.dq_fe .dww').eq(i).addClass('vip_gg').siblings().removeClass('vip_gg');

  });

//�γ�״̬
  $('.wdgq .asd').click(function () {
    var c = $(this).index();
    /*alert(c)*/
    $('.wdgq .asd').eq(c).addClass('dsd').siblings().removeClass('dsd');

  });


  //�۸�״̬
/*$('.ssw').click(function () {
    var jdd = $(this).index();
    alert(jdd)
    $('.ssw').eq(jdd).addClass('zoyo').siblings().removeClass('zoyo');

  });*/



//ɾ���ڵ�
$('.hulue').click(function () {
	var w = $(this).parents('.wq_gg').index();
 
 /* alert(w)*/
	 $(".wq_gg").eq(w).animate({left:'40px'},400);
	 $(".wq_gg").eq(w).css('box-shadow',"1px 1px 35px 5px red")
	 setTimeout(function() {
      $(".wq_gg").eq(w).remove();},300);
	 
})

//�γ̶���
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//�ض���
$('.to-top').toTop();
//�༭ѧϰȦ
$('.swl2').click(function () {

  $('.wucun').removeAttr("disabled");
  $('.wucun').css('border','solid 1px #2598f9')
})
$('.swl3').click(function () {

  $('.wucun').attr("disabled","disabled"); 
  $('.wucun').css('border','solid 1px #fff')
  
})
//΢��
$('.wrrt p').eq(1).hide();

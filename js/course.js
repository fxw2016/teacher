
//课程搜索
  $('.dq_fe .dww').click(function () {

    var i = $(this).index();

    $('.dq_fe .dww').eq(i).addClass('vip_gg').siblings().removeClass('vip_gg');

  });

//课程状态
  $('.wdgq .asd').click(function () {
    var c = $(this).index();
    /*alert(c)*/
    $('.wdgq .asd').eq(c).addClass('dsd').siblings().removeClass('dsd');

  });


  //价格状态
/*$('.ssw').click(function () {
    var jdd = $(this).index();
    alert(jdd)
    $('.ssw').eq(jdd).addClass('zoyo').siblings().removeClass('zoyo');

  });*/



//删除节点
$('.hulue').click(function () {
	var w = $(this).parents('.wq_gg').index();
 
 /* alert(w)*/
	 $(".wq_gg").eq(w).animate({left:'40px'},400);
	 $(".wq_gg").eq(w).css('box-shadow',"1px 1px 35px 5px red")
	 setTimeout(function() {
      $(".wq_gg").eq(w).remove();},300);
	 
})

//课程定价
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//回顶部
$('.to-top').toTop();
//编辑学习圈
$('.swl2').click(function () {

  $('.wucun').removeAttr("disabled");
  $('.wucun').css('border','solid 1px #2598f9')
})
$('.swl3').click(function () {

  $('.wucun').attr("disabled","disabled"); 
  $('.wucun').css('border','solid 1px #fff')
  
})
//微调
$('.wrrt p').eq(1).hide();

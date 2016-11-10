
//注册动画
   $(function(){
    var $el = $('.rubberBand');
    $el.hDialog({box: '#HBox'});
    var $password = $('.rotateInDownLeft');
    $password.hDialog({box: '#forget_password'});
    $password.hDialog({height: '380'});
    //提交并验证表单
    $('.submitBtn').click(function() {
        var EmailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //邮件正则
        var PhoneReg = /^0{0,1}(13[0-9]|15[0-9]|153|156|18[7-9])[0-9]{8}$/ ; //手机正则
        var $nickname = $('.nickname');
        var $email = $('.email'); 
        var $phone = $('.phone');
        if($nickname.val() == ''){
            $.tooltip('昵称还没填呢...'); $nickname.focus();
        }else if($phone.val() == ''){
            $.tooltip('手机还没填呢...'); $phone.focus();
        }else if(!PhoneReg.test($phone.val())){
            $.tooltip('手机格式错咯...'); $phone.focus();
        }else if($email.val() == ''){
            $.tooltip('密码还没填呢...'); $email.focus();
        }else if($('.oiuss').val() == ''){
            $.tooltip('请再次输入密码...'); $email.focus();
        }else if($('.piuss').val() == ''){
            $.tooltip('请输入验证码...'); $email.focus();
        }
        else{
            $.tooltip('提交成功，2秒后自动关闭',2000,true);
            setTimeout(function(){ 
                //$el.hDialog('close',{box:'#HBox'},'http://smwell.sinaapp.com/');  //也可以加跳转链接哦~
                $el.hDialog('close',{box:'#HBox'}); 
            },2000);
        }
    });
     
  
    
   
});
//忘记密码验证
$('.koss').click(function(){
        var email = $('#herk').val()
        var pass = $('#kerw').val()
        if ( email== '') {
            $.tooltip('请输入邮箱或手机号！！！');
        }else if (pass=='') {
            $.tooltip('请输入验证码！！！');
        }
         else{
            $.tooltip('验证成功！', 2500, true);
                $(".dt").animate({left:'60px'},400);
                setTimeout(function(){ 
                $('.dt').hide();
                $('.dt2').show();
            },400);
             
           

        }
   });

/*$('.bigo').click(function () {
    $(".dt").animate({'scrollTop': '0'}, 'slow', 'easeInOutExpo');
     setTimeout(function(){ 
    $('.dt').hide();
    $('.orange').show();
    },400);
})

$('.bigo2').click(function () {
      $(".dt").animate({'scrollTop': '0'}, 'slow', 'easeInOutExpo')
     setTimeout(function(){ 
    $('.orange').hide();
    $('.dt').show();
    },400);
})*/
$(function () {
  var x=0;
  var tpl=$('.hzi .one').outerHeight(true);
  var ang=true;

  /*var i=$(this).index()*/
  //点击使用邮箱
  $('.bigo').click(function (){
    if (ang) {
      ang=false;
      x++;
      if (x>=$('.hzi .one').length) {
        x=0;
      };
      
      $('#piog').stop().animate({scrollTop:tpl*x},'slow','easeOutBack',function (){
        ang=true;
      });
    };
  });
//点击是用手机
  $('.bigo2').click(function (){
    if (ang) {
      ang=false;
      x++;
      if (x>=$('.hzi .one').length) {
        x=0;
      };
      
      $('#piog').stop().animate({scrollTop:tpl*x},'slow','easeOutBounce',function (){
        ang=true;
      });
    };
  });
 
})

//重置密码
$('.losthot').click(function(){
       
        var email = $('#comis').val()
        var pass = $('#ovpas').val()
        if ( email== '') {
            $.tooltip('请输入密码！！！');
        }else if (pass=='') {
            $.tooltip('请确认密码！！！');
        }else if (pass != email) {
            $.tooltip('两次输入密码不一致！！！');
        }
         else{
           $.tooltip('密码重置成功，2秒后自动关闭',2000,true);

            setTimeout(function(){ 
                //$el.hDialog('close',{box:'#HBox'},'http://smwell.sinaapp.com/');  //也可以加跳转链接哦~
               window.location.href="enroll.html"
            },3000);
        }
   });

    //登录动画
        
    $(function() {

        $('#login #password').focus(function() {
            $('#owl-login').addClass('password');
        }).blur(function() {
            $('#owl-login').removeClass('password');
        });
    });
    $('#cb').click(function () {
     
        $('#tick').show();

    })
    $('#tick').click(function () {
        $('#tick').hide();
        
    })
    $('.demo10').click(function(){
        var email = $('#email').val()
        var pass = $('#password').val()
        if ( email== '') {
            $.tooltip('请输入用户名！！！');
        }else if (pass=='') {
            $.tooltip('请输入密码！！！');
        }
         else{
            $.tooltip('登录成功！', 2500, true);

        }
        
    });
//f发送邮件
$('.cout').click(function () {
    $('.fit').hide();
    $('.iow').show();
})
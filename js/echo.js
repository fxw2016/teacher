//图片上传回显
 function PreviewImage(imgFile) 
   { 
    var path; 
     if(document.all)//IE 
     { 
      imgFile.select(); 
      path = document.selection.createRange().text; 
      $(imgFile).parent().prev().css({'filter':"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")"})
     }
     else//FF 
     { 
      path = URL.createObjectURL(imgFile.files[0]);
      //document.getElementById("imgPreview").innerHTML = "<img src='"+path+"'/>"; 
      $(imgFile).parent().prev().html("<img src='"+path+"'/>")
     } 

   }  
 $('.dsds').click(function(){
    $(this).next().find('input').click();
});

 $('.to-top').toTop();
 //微调
 $('#qieos a').click(function () {
   var i = $(this).index();
  $('#qieos a').eq(i).addClass('vips').siblings().removeClass('vips');
 })
 //微调
$('.wrrt p').eq(1).hide();
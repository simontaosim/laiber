(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $.AMUI.fullscreen.isFullscreen ? $fullText.text('关闭全屏') : $fullText.text('开启全屏');
    });
  });
})(jQuery);



window.onload=function(){
    var alnput=document.getElementsByTagName('input');
    var Iname=alnput[0];
    var Ipwd=alnput[1];
    var Ipwd2=alnput[2]
    var Iinvate=alnput[3];
    var aMsg=document.getElementsByClassName('notice');
    var name_Msg=aMsg[0];
    var psw_Msg=aMsg[1];
    var psw2_Msg=aMsg[2];
    var invite_Msg=aMsg[3];
    
//用户名规则，只能是英文数字或者中文中的一种或者混搭，5-15个字符。
//unicode \u4e00-\u9fa5 代表所有的汉字
    
    var re＝/[^\w\u4e00-\u9fa5]/g;
    
    
    Iname.onfocus=function(){
        name_Msg.style.display=block;
//        name_Msg.innerHTML='<i class=""></i>只能英文字母、数字、中文中的一种或者混搭'
//    };
    Iname.onblur=function(){
        //含有非法字符
    //不能为空
        //
        //
    };
    
    

}



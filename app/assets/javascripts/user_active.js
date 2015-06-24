//=========ajax调用成功后的操作
function operateObj(obj,flag, msg){
  if(flag == 'reflash_data'){
    for(var i=0; i< msg.length; i++){
    var oBox=$('<div></div>').addClass('box').attr({
      post_id: msg[i][0].$oid
    });;
    var oPic=$('<div></div>').addClass('pic').appendTo($(oBox));
    var oA=$('<a></a>').addClass('al-alert').attr({
      href: "javascript:popAlert('"+msg[i][0].$oid+"')",
    });;
    oA.appendTo($(oPic));
    //============加载图片，如果有图片，加载图片，如果图片，加载默认图片；
    if (msg[i][2]!==null) {
      $.ajax({
        url :obj.attr('images'),
        type: 'GET',
        dataType: 'json',
        data:"id="+msg[i][2][0].$oid,
      })
      .done(function(data) {
        console.log("success");
        $('<img>').attr('src','../'+data.url_from_content).height("400px").appendTo($(oA));
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });

  }


     else{
      console.log('加载默认图片');

        $('<img>').attr('src','/image_for_good/default.jpg').height("400px").appendTo($(oA));
    };
   //============加载图片，如果有图片，加载图片，如果图片，加载默认图片；
    var oTitle=$('<div></div>').addClass('ideaTitle1').html('<a><h3>'+msg[i][1]+'</h3></a>').appendTo($(oPic));
    var oHr1=$('<hr>').appendTo($(oPic));
    var oHr2=$('<hr>').appendTo($(oPic));
    // var oIntruduce=$('<div></div>').addClass('ideaIntruduce').appendTo($(oPic));
    // var oA=$('<a></a>').appendTo($(oIntruduce));
    var ideaClassify=$('<div></div>').addClass('ideaClassify').html('<a>'+msg[i][2]+'</a>').appendTo($(oPic));
    obj.append(oBox);
    waterfall();
}
  };

  //========================================mark
  // {//根据旗标给予返回的ajax不同的操作
  //   for(var i=0; i< msg.length; i++){
  //     var createdBox = $('<div></div>').attr('class','box');
  //     var createdPic = $('<div></div>').attr('class','pic');
  //     var createdA = $('<a></a>');
  //     var hr = $('<hr>');
  //     var hr1 = $('<hr>');  
  //     if (msg[i][2] == null) {
  //        var createdImg = $('<img>').height('400px').attr('src','/image_for_good/default.jpg');
  //     } else{
  //        // params = {'id':msg[i][2][0]};
  //        // url = '<%= welcome_get_image_by_id %>';
  //        // flag = 'get_img'
  //        // ByGet(params, $obj, url, flag);
  //        //  if (flag == 'get_img') {
  //        //    alert('加载头像');
  //           var createdImg = $('<img>').height('400px').attr('src',msg[i][2]);
  //         // };
  //     };
  //     var createdTitle = $('<div></div>').html('<a><h3>'+msg[i][1]+'</h3></a>').addClass('ideaTitle1');
  //     var createdClassify = $('<div></div>').html('<a>'+msg[i][2]+'</a>').addClass('ideaClassify');
  //     var creatTime = $('<div></div>').html(msg[i][2]);
  //     createdBox.append(createdPic);
  //     createdA.append(createdImg);
  //     createdPic.append(createdA);
  //     createdPic.append(createdTitle);
  //     createdPic.append(hr);
  //     createdPic.append(hr1);
  //     createdPic.append(createdClassify);
  //     obj.append(createdBox);
  //     // $('#post'+i).addClass('post_box')
  //   }
    
  // }
  if(flag == 'user_is_exist'){
    if(msg == 1){
      obj.html('用户名已经存在');
      obj.show();
      obj.attr('user-exist','1');
      $("#toSubmit").attr("type","button");
    }else{
      obj.html('用户名可用');
      obj.show();
      obj.fadeOut("slow");
      obj.attr('user-exist','0');
      $("#toSubmit").attr("type","submit");
    }
    
  }
  if (flag == 'collect_post') {
    //alert(msg);
    obj.find("#errorM").html(msg);
    obj.foundation('reveal', 'open');
    $("#post_collect").html('取消收藏');
  $("#post_collect").attr('flag','cancel');
  }
  if (flag == 'collect_cancel') {
    //alert(msg);
    obj.find("#errorM").html(msg);
    obj.foundation('reveal', 'open');
    $("#post_collect").html('收藏');
  $("#post_collect").attr('flag','collect');
  }
  if (flag == 'user_exist_yes') {
    if(msg == 0){
      obj.html('<i class="am-icon-smile-o"></i>&nbsp;该用户名可用');
    }
    else{
      obj.html('<i class="am-icon-frown-o"></i>&nbsp;该用户名不可用');
    }
  } 
  if (flag == 'idea_if_uncollect') {
                alert(msg);
              }
  if (flag == 'idea_if_collect') {
                alert(msg);
              };
  if (flag == 'if_already_collected') {
        if(msg == 0){
           obj.removeClass('active');
           obj.attr('src','/image_for_good/xing2.png');
        }
        if(msg == 1)  {
           obj.addClass('active');
           obj.attr('src','/image_for_good/xing.png');
        }
    }


  }

//============ajax调用前的操作
function beforeOperate(obj){

}
//==============ajax 两种方式
  function ByPost(params, $obj, url, flag){
    $.ajax({
                method: "POST",
                url: url,
                beforeSend: function( xhr ) {
                  xhr.overrideMimeType( "text/plain; charset=utf-8" );
                  beforeOperate($obj)
                 },
                data: params,
                dataType: "json"
              }).done(function( msg ){ 
                operateObj($obj,flag, msg);
              }) ;
  }
  function ByPostText(params, $obj, url, flag){
    $.ajax({
                method: "POST",
                url: url,
                beforeSend: function( xhr ) {
                  xhr.overrideMimeType( "text/plain; charset=utf-8" );
                  beforeOperate($obj)
                 },
                data: params,
                dataType: "text"
              }).done(function( msg ){ 
                operateObj($obj,flag, msg);
              });
  }
  function ByGet(params, $obj, url, flag, handle){
    $.ajax({
                method: "GET",
                url: url,
                beforeSend: function( xhr ) {
                xhr.overrideMimeType( "text/plain; charset=utf-8" );

                 },
                data: params,
                dataType: "json"
              }).done(function( msg ){ 
                operateObj($obj, flag, msg);
                handle = true;
              }).fail(function(){alert('请等待服务器');
              });


  }
  function ByGetText(params, $obj, url, flag){
    $.ajax({
                method: "GET",
                url: url,
                beforeSend: function( xhr ) {
                  xhr.overrideMimeType( "text/plain; charset=utf-8" );

                 },
                data: params,
                dataType: "text"
              }).done(function( msg ){ 
                operateObj($obj, flag, msg);
              }).fail(function(){alert('请等待服务器');});

  }
      function ByGetImg(params, $obj, url, flag){
    $.ajax({
                method: "GET",
                url: url,
                beforeSend: function( xhr ) {
                xhr.overrideMimeType( "text/plain; charset=utf-8" );

                 },
                data: params,
                dataType: "json"
              }).done(function( img ){ 
                imagesReady($obj, flag, img);
              }).fail(function(){alert('获取图片失败');
              });
            };
//==============

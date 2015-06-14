//=========ajax调用成功后的操作
function operateObj(obj,flag, msg){
	if(flag == 'get_top15_posts'){//根据旗标给予返回的ajax不同的操作
		var rows
		for(var i=0; i< msg.length; i++){
      var post_box = '<div id="post'+i+'" post-id:"'+msg[i][0]['$oid']+'">post'+i+''
      post_box += '<div id="img_box'+i+'"></div>' 
      post_box += '</div>'
			obj.append(post_box);
      $('#post'+i).addClass('post_box')
		}
		
	}
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
        if(msg == 0)
        {
       obj.removeClass('active').attr('src','/assets/xing2.png')
        };
        if(msg == 1)
        {
       obj.addClass('active').attr('src','/assets/xing.png')
        };
        }

  };
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
	function ByGet(params, $obj, url, flag){
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
              }).fail(function(){alert('请等待服务器');});

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

//==============



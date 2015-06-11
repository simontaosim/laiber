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
	alert(flag);
	if (flag == 'collect_post') {
		alert(msg);
    obj.find("#errorM").html(msg);
    obj.foundation('reveal', 'open');
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
//==============



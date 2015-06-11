//=========ajax调用成功后的操作
function operateObj(obj,flag, msg){
	if(flag == 'get_top15_posts'){
		var rows
		for(var i=0; i< msg.length; i++){
      var post_box = '<div id="post'+i+'" post-id:"'+msg[i][0]['$oid']+'">post'+i+''
      post_box += '<div id="img_box'+i+'"></div>' 
      post_box += '</div>'
			obj.append(post_box);
      $('#post'+i).addClass('post_box')
		}
		
	}
  if (flag == 'collect_post') {
    obj.find("#errorM").html(msg[0]);
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
//==============



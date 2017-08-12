(function($){
     $.fixedTopicWidth=function(str,length,fill){
           var pos=length-str.length;
           if(pos>0){
           	return str;
           }else{
           	if(fill){
           		var fs="";
           		for(var i=0;i<3;i++){
           			 fs=fs+fill;
           		}
           		return (str.substr(0,length-3)+fs);
           	}else{
           		return str.substr(0,length);
           	}
           }
     }
})(jQuery);*/
(function($){
     $.fixedTopicWidth=function(str,option){
     	var setting=$.extend({length:50,fill:null;fillLength:3},option||{});
           var pos=setting.length-str.length;
           if(pos>0){
           	return str;
           }else{
           	if(setting.fill){
           		var fs="";
           		for(var i=0;i<setting.fillLength;i++){
           			 fs=fs+setting.fill;
           		}
           		return (str.substr(0,setting.length-3)+fs);
           	}else{
           		return str.substr(0,setting.length);
           	}
           }
     }
})(jQuery);
//把上面重新封装
$.fn.formatTopic=function(option){

          this.each(function(n){
              //这个this不是包装集对象而是闭包对象
              //此时闭包对象中的引用是一个html的节点，而要访问就需要使用$(this);
             $(this).html($.fixedTopicWidth($(this).html,option));
          });
}
//调用$("").formatTopic({length:23})
/*function topicHandler();*/
//调用
/*$.fixedTopicWidth($(this).html(),{length:21,fill:".",fillLength:5});


//点击获取与上面一样的内容

$("#").click(function(){
	var isc=$(this).prop("checked");
	if(isc){
	$(#).val($(this).val);
	}else{
	$(#).val($(this).val);
	}
})

//如果state为true就表示readonly否则false
$.fn.setReadOnly=function(state){
	
}
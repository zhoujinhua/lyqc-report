;(function($){
	var Validator = function(val){
		this.value = val;
	};
	
	var fn = Validator.prototype;
	
	/**
	 * 检查是否在长度范围内 
	 */
	fn.stringlength = function(params){
		var min = params.minLength;
		var max = params.maxLength;
		
		var value = params.trim?this.value.replace(/(^\s*)|(\s*$)/g, ""):this.value;
		if(min){
			if(!this.value || this.value.length<min)return false;
		}
		if(max){
			if(this.value && this.value.length>max){
				return false;
			}
		}
		return true;
	}
	
	/**
	 * 必填验证
	 */
	fn.required = function(params){
		if(this.value){
			return true;
		}
		return false;
	}
	
	/**
	 * 必填字符串(trim可指定是否执行trim)
	 */
	fn.requiredstring = function(params){
		if(!this.value || this.value.length == 0){
			return false;
		}
		if(params && params.trim){
			return this.value.replace(/(^\s*)|(\s*$)/g, "").length>0;
		}
		return true;
	}
	
	/**
	 * 检查整数范围
	 */
	fn.short = fn.long = fn.int = function(params){
		if(isNaN(this.value)){
			return false;
		}
		var val = parseInt(this.value,10);
		if(params.min && val< params.min){
			return false;
		}
		if(params.max && val>params.max){
			return false;
		}
		return true;
	}
	
	/**
	 * 检查double范围
	 */
	fn.double = function(params){
		if(isNaN(this.value)){
			return false;
		}
		var val = parseFloat(this.value);
		if(params.min && val< params.min){
			return false;
		}
		if(params.max && val>params.max){
			return false;
		}
		return true;
	}
	/**
	 * TODO 检查日期范围
	 */
	fn.date = function(params){
		var val = this.value;
		if(params.min && val< params.min){
			return false;
		}
		if(params.max && val>params.max){
			return false;
		}
		return true;
	}
	
	/**
	 * EMAIL匹配
	 */
	fn.email = function(params){
		return this.regex({expression:""});
	}
	
	/**
	 * URL匹配
	 */
	fn.url = function(params){
		return this.regex({expression:""});
	}
	
	/**
	 * 正则表达式
	 */
	fn.regex = function(params){
		
	}
	
	/**
	 * 针对form表单进行客户端验证
	 * 参数格式:
	 * {
	 * 		"fieldName":[
	 * 			{type:"required",message:'只能是整型',max:100,min:1},
	 * 			{type:"int",message:'只能是整型',max:100,min:1}
	 * 		]
	 * }
	 */
	$.fn.validate = function(fields){
		var $form = this;
		this.submit(function(evn){
			var errors = {};
			var haserror = false;
			
			for(var i=0;i<this.elements.length;i++){
				var e = this.elements[i];
				var valids = fields[e.name];
				if(valids && valids.length>0){
					$e = $(e);
					var validator = new Validator(e.value);
					var fielderrors = [];
					for(var j=0;j<valids.length;j++){
						var v = valids[j];
						//当对应的前端验证方法存在，且验证失败时记录
						if(validator[v.type] && !validator[v.type](v)){
							fielderrors.push(v.message);
						}
					}
					if(fielderrors.length>0){
						errors[e.name] = fielderrors;
						haserror = true;
					}
				}
			}
			if(haserror){
				$form.fieldErrors(errors);
				evn.preventDefault();
			}
			
		});
	}
	
	/**
	 * 设置字段错误
	 */
	$.fn.fieldError = function(message){
		if(this && this.length){
			this.addClass("error");
			this.attr("title",message);
			this.tooltip('show');
		}
	};
	/**
	 * 设置字段成功
	 */
	$.fn.fieldSuccess = function(message){
		if(this && this.length){
			this.addClass("success");
			this.attr("title",message);
			this.tooltip('show');
		}
	};
	
	/**
	 * 清除字段错误
	 */
	$.fn.fieldErrorClear = function(){
		this.removeClass("error");
		this.tooltip('destroy');
		/*this.removeAttr("title");*/
	};
	/**
	 * 清除字段错误
	 */
	$.fn.fieldSuccessClear = function(){
		this.removeClass("success");
		this.tooltip('destroy');
		/*this.removeAttr("title");*/
	};
	
	/**
	 * 绑定错误信息
	 */
	$.fn.fieldErrors = function(messages){
		$errors = $(".error").each(function(idx,e){
			$(e).fieldErrorClear();
		});
		
		if(!messages){
			return;
		}
		for(var x in messages){
			var name = x.replace(/[.]/,"\\.");
			var field = $("*[name='"+name+"']",this);
			if(messages[x].join){
				field.fieldError(messages[x].join("\n"));
			}else{
				field.fieldError(messages[x]);
			}
		}
	};
	
	/**
	 * action error
	 */
	$.fn.actionErrors = function(messages){
		var $error_view = $(".action-error");
		if(!$error_view[0]){
			$error_view = $('<div class="action-error alert alert-error"><button class="close" data-dismiss="alert" type="button">×</button><ul></ul></div>');
			$(this).append($error_view);
		}
		var $ul = $error_view.find("ul");
		if(!messages){
			$error_view.remove();
			return;
		}
		$ul.empty();
		for(var i=0;i<messages.length;i++){
			$ul.append("<li><span>"+messages[i]+"</span></li>");
		}
	};
	
	/**
	 * Action 消息
	 */
	$.fn.actionMessages = function(messages){
		var $info_view = $(".action-message");
		if(!$info_view[0]){
			$info_view = $('<div class="action-message alert alert-success"><button class="close" data-dismiss="alert" type="button">×</button><ul></ul></div>');
			$(this).append($info_view);
		}
		var $ul = $info_view.find("ul");
		if(!messages){
			$info_view.remove();
			return;
		}
		$ul.empty();
		for(var i=0;i<messages.length;i++){
			$ul.append("<li><span>"+messages[i]+"</span></li>");
		}
	};
	
	$.fn.showValidateResult = function(result){
		if(!result){
			return;
		}
		if(result.actionMessages && result.actionMessages.length){
			this.actionMessages(result.actionMessages);
		}
		if(result.actionErrors && result.actionErrors.length){
			this.actionErrors(result.actionErrors);
		}
		if(result.fieldErrors){
			this.fieldErrors(result.fieldErrors);
		}
	};
	
})(jQuery);
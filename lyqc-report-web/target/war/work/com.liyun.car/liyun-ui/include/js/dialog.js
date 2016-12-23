(function(window,$){
	var win = window;
	//声明api对象
	var api = win.zapi = win.webframe = win.webframe || {};
	//数据对象，用于各组件保存数据
	var data = {};
	
	
	/**
	 * 兼容ie和w3c的frame，使之能使用frame.window
	 * @param _frm
	 * @returns {___anonymous525_575}
	 */
	api.frame = function(_frm){
		return {
			window:_frm.open?_frm:_frm.contentWindow
		};
	};
	
})(window,jQuery);

/**
* 常用的一些方法
**/
(function($){
	var api = window.zapi = window.zapi || {};
	//解析像素，转换成字符串
	api.parsePixel=function(x){
		if(!x) return 0;
		
		if(typeof(x) == 'string'){
			var _x = x.replace(/[pP][xX]/g,"");
			if(!isNaN(_x)){
				return parseInt(_x);
			}
		}else if(typeof(x) == 'number'){
			return x;
		}
		return 0;
	};
	//横向对齐
	api.align = function(target,type){
		var _parent = $(window);
		switch(type.toLowerCase()){
		case 'center':
			target.css({left:((_parent.width() - target.width())/2)+"px"});
			break;
		case 'left':
			target.css({left:"0px"});
			break;
		case 'right':
			target.css({left:(_parent.width() - target.width())+"px"});
			break;
		}
		return this;
	};
	//纵向对齐
	api.valign = function(target,type){
		var _parent = $(window);
		switch(type.toLowerCase()){
		case 'top':
			target.css({top:"0px"});
			break;
		case 'middle':
			target.css({top:((_parent.height() - target.outerHeight())/2)+"px"});
			break;
		case 'bottom':
			target.css({top:(_parent.height() - target.outerHeight())+"px"});
			break;
		}
		return this;
	};
	//设置高度（含边框）
	api.outerHeight = function(target,height){
		_target = target instanceof $?target:$(target);
		_target.height( height-_target.outerHeight() + target.height());
	};
	//设置宽度（含边框）
	api.outerWidth = function(target,width){
		_target = target instanceof $?target:$(target);
		_target.width( width-_target.outerWidth() + target.width());
	};
})(jQuery);


/**
* 最大的Z轴索引
*/
(function($){
	var api = window.zapi = window.zapi || {};
	//最大的zIndex值
	api.maxZIndex=null;
	
	//取下一个zIndex值
	api.nextZIndex = function(idx){
			if(idx && typeof(idx) == 'number'){
				return this.maxZIndex = idx;
			}
			
			return ++this.maxZIndex;
		}
	//初始化maxZIndex
	$(function(){
		$("div,span,ul,dl,li,dd,dt").each(function(){
			var _idx = $(this).css("zIndex");
			//对于大于100000，说明是遮罩层，忽略
			if(_idx != '0' && _idx != 'auto' && parseInt(_idx)<100000){
				var idx = parseInt(_idx);
				if(api.maxZIndex){
					api.maxZIndex = idx>api.maxZIndex?_idx:api.maxZIndex;
				}else{
					api.maxZIndex = idx;
				}
			}
			api.maxZIndex=api.maxZIndex?api.maxZIndex:1000;
		});
	});
})(jQuery);

//特征
(function($){
	var _win = window;
	var api = _win.zapi = _win.zapi || {};
	
	/**
	* 描述一个节点的特征的对象
	* 根据需要描述特征的对象（dom节点或jquery对象）创建一个特征对象
	* 创建过特征对象的节点,在一些状态变更后可还原到原始特征状态
	* 只支持节点的部分特征
	* 特征对象中提供一个方法，可还原节点的特征
	*/
	api.feature=function(_target){
		var target = _target instanceof $ ? _target : $(_target);
		var position = target.position();
		var _feature = {
			target:target,
			position:{type:target.css("position"),left:position?position.left:null,top:position?position.top:null},
			size:{width:target.width(),height:target.height()},
			display:target.css("display"),
			parent:target.parent(),
			previous:target.prev(),
			next:target.next(),
			//恢复原有的特征
			resume:function(){
				var _target = this.target;
				_target.css({display:this.display
										,position:this.position.type
										,left:this.position.left
										,top:this.position.top});
				_target.height(this.size.height);
				_target.width(this.size.width);
				
				if(this.previous){
					_target.insertAfter(this.previous);
				}else if(this.next){
					_target.insertBefore(this.next);
				}else{
					_target.appendTo(this.parent);
				}
			}
		};
		return _feature;
	}
})(jQuery);


//dialog and other ui
(function($){
	var _win = window;
	var _doc = _win.document;
	//接口对象
	var api = _win.zapi = _win.zapi || {};
	
	//全屏
	api.fullscreen=function(obj){
		var _obj = obj instanceof $ ? obj:$(obj);
		_obj.css({top:"0px",left:"0px",margin:"0px"});
		
		_obj.height($(window).height() - _obj.outerHeight() + _obj.height()).width($(window).width() - _obj.outerWidth() + _obj.width());
	};
	
	/*
	* 弹出框
	* 参数格式：
	*	(content,title,level)
	* 或
	*	{
	*		title: 标题,
	*		level: info | warn | error,
	*		icon: 自定义图标，优先于level图标,
	*	*	content:弹出框内容（html、dom节点、jquery对象、文本）,
	*		draggable:true,可拖曳
	*		width:300,
	*		height:200,
	*		cssClass:样式,
	*		dialogCssClass:"dialog", 对话框样式
	*		buttonText:按扭的文本，默认为"确定",
	*		callback:functin(){} 回调
	*	}
	*/
	api.alert=function(){
		var _args = arguments;
		var setting = {
				title:null,
				level:"info",
				icon:null,
				draggable:true,
				cssClass:"x-ui-alert",
				dialogCssClass:null,
				buttonText:"确定"
			};
		if(_args[0] && typeof(_args[0]) == 'object'){
			setting = $.extend(setting,_args[0]);
		}else{
			setting.content = _args[0] || "";
			if(_args[1]) setting.title = _args[1];
			if(_args[2]) setting.level = _args[2];
		}
		
		var _alert = $("<div class='alert-box'><i></i><div class='alert-content'></div></div>");
		if(setting.cssClass){
			_alert.addClass(setting.cssClass);
		}
		_alert.find(".alert-content").html(setting.content || "");
		//图标
		var _icon = _alert.find("i");
		//如果有指定，则使用指定的图标，否则使用默认的
		if(setting.icon){
			_icon.append("<img src='"+setting.icon+"' style='width:48px;height:48px;'></img>");
		}else{
			_icon.addClass("msg-icon");
			if(setting.level == 'warn'){
				_icon.addClass("msg-icon-warn");
			}if(setting.level == 'error'){
				_icon.addClass("msg-icon-error");
			}else{
				_icon.addClass("msg-icon-info");
			}
		}
		_alert.hide().appendTo($(document.body));
		
		// TODO 智能控制对话框宽度
		var _dialog = api.dialog({
			target:_alert,
			title:setting.title,
			autoSize:true, //自适应大小
			titleBarVisible:setting.title,
			draggable:setting.draggable,
			cssClass:setting.dialogCssClass,
			resizable:false,
			modal:true,
			buttons:[
				{name:setting.buttonText,callback:function(){
					_dialog.close();
					//销毁
					_dialog.destroy();
					//删除自己
					_alert.remove();
					if(setting.callback)
						//不允许直接回调
						setting.callback();
					}}
				],
			resize:function(_dialog){
				api.outerHeight(_alert,_dialog.clientInnerHeight());
			}
		});
	};
	
	/*
	* 确认框
	* 参数格式：
	* (content,title)
	* 或
	* {
	*	title: 标题,
	*	icon: 自定义图标，优先于level图标,
	*	content:弹出框内容（html、dom节点、jquery对象、文本）,
	*	draggable:true,可拖曳
	*	cssClass:样式,
	*	yButtonText:按扭的文本，默认为"确定",
	*	nButtonText:按扭的文本，默认为"取消",
	*	callback:function(val){}回调函数 ,val = true/false
	* }
	*/
	api.confirm=function(){
		var _args = arguments;
		var setting = {
				title:null,
				icon:null,
				draggable:true,
				cssClass:null,
				dialogCssClass:null,
				yButtonText:"确定",
				nButtonText:"取消"
			};
		if(_args[0] && typeof(_args[0]) == 'object'){
			setting = $.extend(setting,_args[0]);
		}else{
			setting.content = _args[0] || "";
			if(_args[1] && typeof(_args[1]) == 'function'){
				setting.callback = _args[1];
			}else if (_args[1] && typeof(args[1]) == 'string'){
				setting.title = _args[1];
			}
		}
		
		var _alert = $("<div class='confirm-box'><i></i><div class='confirm-content'></div></div>");
		if(setting.cssClass){
			_alert.addClass(setting.cssClass);
		}
		_alert.find(".confirm-content").html(setting.content || "");
		//图标
		var _icon = _alert.find("i");
		//如果有指定，则使用指定的图标，否则使用默认的
		if(setting.icon){
			_icon.append("<img src='"+setting.icon+"' style='width:48px;height:48px;'></img>");
		}else{
			_icon.addClass("msg-icon").addClass("msg-icon-help");
		}
		_alert.hide().appendTo($(document.body));
		
		// TODO 智能控制对话框宽度
		var _dialog = api.dialog({
			target:_alert,
			title:setting.title,
			autoSize:true, //自适应大小
			titleBarVisible:setting.title,
			draggable:setting.draggable,
			cssClass:setting.dialogCssClass,
			resizable:false,
			modal:true,
			buttons:[
				{name:setting.yButtonText,callback:function(){
					_dialog.close();
					//销毁
					_dialog.destroy();
					//删除自己
					_alert.remove();
					if(setting.callback)
						setting.callback(true);
					}},
				{name:setting.nButtonText,callback:function(){
					_dialog.close();
					//销毁
					_dialog.destroy();
					//删除自己
					_alert.remove();
					if(setting.callback)
						setting.callback(false);
					}}
				],
			resize:function(_dialog){
				api.outerHeight(_alert,_dialog.clientInnerHeight());
			}
		});
	};
	
	/**
	* 输入框
	* 参数格式：
	*	{
	*		title: 标题,
	*		prompt:提示内容（html、文本）,
	*		value: 缺省值,
	*		draggable:true,可拖曳
	*		pattern: 匹配模式,
	*		cssClass:样式,
	*		maskClass:遮罩层的样式,
	*		buttonText:按扭的文本，默认为"确定",
	*		onok:function(val){} 确定按扭回调,
	*		oncancel:function(val){} 取消按扭回调
	*	}
	*/
	api.input=function(){
		//TODO
	};
	
	/**
	* 对话框
	* 参数格式：
	*	{
	*		title:"标题",
	*		target:"目标对象",  //DOM|jQuery|id
	*		autoOpen:true,
	*		modal:false,
	*		draggable:true,
	*		cssClass:"dialog",  对话框的样式
	*		autoSize:false,			//窗口根据内容自适应大小，如果要自适应大小，则target对象需要明确指定宽度否则窗口宽度将不可预料
	*		height:300,
	*		width:400,
	*		minHeight:0,				//最小高度
	*		minWidth:0,
	*		maxHeight:0,
	*		maxWidth:0,
	*		titleBarVisible:true,			//标题栏是否可见
	*		resizable:false,
	*		open:null,//打开对话框时触发的事件
	*		close:null,//关闭对话框时触发的事件
	*		resize:null,//改变大小时触发的事件
	*		position:'center',
	*		buttons:[
	*			{
	*				name:"取消",		按扭的名称
	*				cssClass:"ui-button", 按扭的样式
	*				callback:function(){}     按扭的回调
	*			},{
	*				name:"确定",		按扭的名称
	*				cssClass:"ui-button", 按扭样式
	*				callback:function(){}     按扭的回调
	*			}
	*		]
	*	}
	*/
	api.dialog=function(param){
		//一些默认值
		var setting = $.extend({
			title:"",
			autoOpen:true,
			modal:false,
			draggable:true,
			autoSize:false,			//窗口根据内容自适应大小
			height:300,
			width:400,
			minHeight:0,
			minWidth:0,
			maxHeight:0,
			maxWidth:0,
			titleBarVisible:true, 
			resizable:true,
			open:null,//打开对话框时触发的事件
			close:null,//关闭对话框时触发的事件
			resize:null,//改变大小时触发的事件
			position:'center',
			buttons:[]
		},param);
		//如果target不是jquery对象 ，则转换成jquery对象
		if(typeof(setting.target) == 'string'){
			setting.target = $("#"+setting.target);
		}else if(! setting.target instanceof $){
			setting.target = $(setting.target);
		}
		setting.cssClass=setting.cssClass || "dialog";
		
		//定义一个单独context的目的是封装私有化的变量 
		var _object = (function(){
			//对话框的内容
			var _target = setting.target;
			
			//记住原来节点的特性，以便destory时还原
			var _old_feature = api.feature(_target);
			
			//对话框的dom节点的jquery对象
			var _dom = null;
			//对话框状态
			var _status = 'none';	
			//对话框位置
			var _position = null;
			//遮罩层
			var _mask = null;
			//dialog对象的事件堆栈
			var _events = (function(){
				var _event_stack = {};
				
				return function(name,func){
					if(!name) return null;
					if(!_event_stack[name]){
						_event_stack[name] = [];
					}
					if(func && typeof(func) == 'function'){
						_event_stack[name].push(func);
					}
					return _event_stack[name];
				}
			})();
			
			return {
				setting:setting,
				//对话框状态 
				status:function(_p){
					if(_p && typeof(_p) == 'string' ){
						_status = _p;
						//状态的变更需要更新对话框控制状态
						this.refresh();
					}else{
						return _status;
					}
				},
				/**
				* 获取对话框的dom节点
				*/
				getdom:function(){
					if(_dom){
						return _dom;
					}
					//如果父节点有dialog的class，则说明dialog已存在
					if(_target.parent().hasClass("dialog")){
						return _dom = _target.parent();
					}
					return _dom = this.create();
				},
				/**
				* 获取BODY的dom节点(jquery对象)
				*/
				getbody:function(){
					var _bdom = this.getdom();
					return _bdom.find(".dialog-content");
				},
				create:function(){
					var _setting = this.setting;
					
					var _html =  '<div class="dialog">'
											+'	<div class="dialog-header">'
											+'		<div class="dialog-title">#TITLE#</div>'
											+'		<div class="dialog-control">'
											+'			<i class="glyphicon glyphicon-minus-sign dialog-minimal" title="minimal"></i>'
											+'			<i class="glyphicon glyphicon-plus-sign dialog-maximal" title="maximal"></i>'
											+'			<i class="glyphicon glyphicon-remove-sign dialog-close" title="close"></i>'
											+'		</div>'
											+'	</div>'
											+'	<div class="dialog-content">'
											+'		<div class="dialog-body"></div>'
											+'		<div class="dialog-mask"></div>'
											+'	</div>'
											+'	<div class="dialog-footer">'
											+'		<div class="dialog-buttons"></div>'
											+'	</div>'
											+'</div>';
					//创建好，不显示
					var _dialog = $(_html).appendTo($(document.body));
					//样式
					_dialog.addClass(this.setting.cssClass);
					//标题
					_dialog.find(".dialog-title").html(_setting.title);
					//隐藏mask层
					_dialog.find(".dialog-mask").hide();
					//IE9会重新加载资源
					_dialog.find(".dialog-body").append(_target);
					//控制按扭
					if(!this.setting.buttons || this.setting.buttons.length==0){
						_dialog.find(".dialog-footer").hide();
					}else{
						//添加按扭
						var _buttons = _dialog.find(".dialog-buttons");
						for(var x =0;x< this.setting.buttons.length;x++){
							var _button = this.setting.buttons[x];
							var _jbutton = $("<button type='button' class='btn btn-mini btn-primary' style='margin-left:3px;margin-right:3px;'>"+(_button.name || "")+"</button>");
							if(_button.callback){
								_jbutton.click(_button.callback);
							}
							if(_button.cssClass){
								_jbutton.addClass(_button.cssClass);
							}
							_jbutton.appendTo(_buttons);
						}
					}
					
					var _h_dialog = this;
					
					//设置其可拖曳
					if(this.setting.draggable){
						api.draggable({
							target:_dialog
							,overflow:"disable"
							,handle:this.setting.titleBarVisible?_dialog.find(".dialog-header"):null
							,ondragstart:function(){
								//在拖曳的时候显示遮罩层，防止出现iframe之类的影响拖曳效果
								_dialog.find(".dialog-mask").show();
								_mask.show();
							}
							,ondrop:function(){
								//隐藏方才显示的遮罩层
								_dialog.find(".dialog-mask").hide();
								if(!_h_dialog.setting.modal){
									_mask.hide();
								}
							}
						});
					}
					
					//设置其允许resize
					if(this.setting.resizable){
						api.resizable({target:_dialog
											,minWidth:this.setting.minWidth
											,maxWidth:this.setting.maxWidth
											,minHeight:this.setting.minHeight
											,maxHeight:this.setting.maxHeight
											,onstart:function(){
												//在拖曳的时候显示遮罩层，防止出现iframe之类的影响拖曳效果
												_dialog.find(".dialog-mask").show();
												_mask.show();
											}
											,onresize:function(){
												_h_dialog.resize();
											}
											,ondrop:function(){
												//隐藏方才显示的遮罩层
												_dialog.find(".dialog-mask").hide();
												if(!_h_dialog.setting.modal){
													_mask.hide();
												}
											}});
					}else{
						//如果不允许改变大小，则隐藏最大化和最小化按扭
						_dialog.find(".dialog-maximal").hide();
						_dialog.find(".dialog-minimal").hide();
					}
					
					//如果标题栏不可见，则隐藏标题栏
					if(!this.setting.titleBarVisible){
						_dialog.find(".dialog-header").hide();
					}
					//注册控制按扭事件
					this.close(function(){
						_dialog.hide();
						_mask.hide();
					});
					
					_dialog.find(".dialog-close")[0].onclick = function(){
						_h_dialog.close();
					};
					_dialog.find(".dialog-minimal")[0].onclick = function(){
						_h_dialog.minimal();
					};
					_dialog.find(".dialog-maximal")[0].onclick = function(){
						_h_dialog.maximal();
					};
					_dialog.mousedown(function(){
						_h_dialog.moveLayerToTop();
					});
					
					this.open(function(_this){
						var _dialog = _this.getdom();
						var zIndex = Math.max(_this.setting.zIndex ? _this.setting.zIndex : 1000 , api.nextZIndex());
						//非模态窗口和ie6均用透明的遮罩层
						var className = ($.browser.msie && $.browser.version == 6) || !_this.setting.modal ? "mask-layer":"mask-layer-black";
						
						_mask = api.mask({id:"dialog-mask-"+new Date().getTime(),zIndex:zIndex,cssClass:className});
						//如果不是模态窗口，则把遮罩层隐藏掉
						if(!_this.setting.modal){
							_mask.hide();
						}
						_dialog.css({zIndex:api.nextZIndex(zIndex+1)});
						_dialog.show();
						//显示目标
						_target.show();
						_this.resize();
						//如果窗口高度小于对话框高，则使offsetTop为0
						if(_this.height() < $(_win).height()){
							_this.moveTo('middle');
						}else{
							_this.moveTo({top:0});
						}
						//移动到中间
						_this.moveTo('center');
						//打开后记住对话框的位置
						_this.markPosition();
						//状态修改为正常
						_this.status('normal');
					});
					
					//大小改变时自动调整客户端区域的大小
					this.resize(function(_this){
						_this.autoClientSize();
					});
					
					if(this.setting.resize && typeof(this.setting.resize) == 'function'){
						this.resize(this.setting.resize);
					}
					
					if(this.setting.open && typeof(this.setting.open) == 'function'){
						this.open(this.setting.open);
					}
					
					if(this.setting.close && typeof(this.setting.close) == 'function'){
						this.close(this.setting.close);
					}
					
					//窗口resize时，如果对话框是最大化状态，则要跟着窗口变化而变化
					$(_win).resize(function(){
							if(_h_dialog.status() == 'maximal')
								_h_dialog.maximal();
						});
					return (_dom = _dialog);
				},
				//自动适应client大小
				autoClientSize:function(){
					var dom = this.getdom();
					var _title = dom.find(".dialog-header");
					var _content = dom.find(".dialog-content");
					var _body = dom.find(".dialog-body");
					var _mask = dom.find(".dialog-mask");
					var _bottom = dom.find(".dialog-footer");
					var outerSize = _content.outerHeight(true) - _content.height();
					var ctx_height = dom.height() - outerSize;
					
					if(_title.css("display")!='none'){
						ctx_height -= _title.outerHeight(true);
					}
					if(_bottom.css("display")!='none'){
						ctx_height -= _bottom.outerHeight(true);
					}
					
					_content.height(ctx_height );
					_mask.height(ctx_height+outerSize);
					_body.height(ctx_height);
				},
				//此处的width指outerWidth，包括其padding、border；
				width:function(_p){
					if(_p){
						var x = typeof(_p)!='number'?parseInt(_p):_p;
						var dom = this.getdom();
						var outerSize = dom.outerWidth() - dom.width();
						//在padding、border间距与width之间取最大值，确保对话框显示正常
						dom.width(x>outerSize?x - outerSize:outerSize);
						this.resize();
						return this;
					}
					return this.getdom().outerWidth();
				},
				//此处的height指outerHeight,包括padding和border
				height:function(_p){
					if(_p){
						var x = typeof(_p)!='number'?parseInt(_p):_p;
						var dom = this.getdom();
						var outerSize = dom.outerHeight() - dom.height();
						//在padding、border间距与width之间取最大值，确保对话框显示正常
						dom.height(x>outerSize?x - outerSize:outerSize);
						//修改高度后需要调整内容大小
						this.autoClientSize();
						//触发resize事件
						this.resize();
						return this;
					}
					return this.getdom().outerHeight();
				},
				//标题栏高度
				titleHeight:function(){
					var _title = this.getdom().find(".dialog-header");
					//如果标题栏被设置成display:none，则忽略其高度
					return _title.css("display") == 'none'?0:_title.outerHeight(true);
				},
				clientWidth:function(_p){
					var dom = this.getdom();
					var _content = dom.find(".dialog-content");
					if(_p){
						var x = typeof(_p)!='number'?parseInt(_p):_p;
						var outerSize = dom.outerWidth() - dom.width() + _content.outerWidth(true) - _content.width();
						this.width(outerSize + x);
						return this;
					}
					return _content.outerWidth();
				},
				clientHeight:function(_p){
					var dom = this.getdom();
					var _content = dom.find(".dialog-content");
					if(_p){
						var x = typeof(_p)=='string'?parseInt(_p):_p;
						var _title = dom.find(".dialog-header");
						var _bottom = dom.find(".dialog-footer");
						var outerSize = dom.outerHeight() - dom.height() + this.titleHeight() + _bottom.outerHeight(true) + _content.outerHeight(true) - _content.height();
						this.height(outerSize + x);
						return this;
					}
					return _content.outerHeight();
				},
				//body内部宽
				clientInnerWidth:function(_w){
					var _body = this.getdom().find(".dialog-body");
					if(_w){
						this.clientWidth((_body.outerWidth(true) - _body.width()) + _w);
					}
					return _body.width();
				},
				//body内部高
				clientInnerHeight:function(_h){
					var _body = this.getdom().find(".dialog-body");
					if(_h){
						this.clientHeight((_body).outerHeight(true) - _body.height() + _h);
					}
					return _body.height();
				},
				//窗口标题
				title:function(_title){
					if(_title){
						this.setting.title = _title;
						this.getdom().find("dialog-title");
					}
					return this.setting.title;
				},
				//移动到最顶层
				moveLayerToTop:function(){
					//遮罩层同时往上移，先移遮罩层，使对话框在_mask之上
					_mask.css({zIndex:api.nextZIndex()});
					this.getdom().css({zIndex:api.nextZIndex()});
				},
				//更新窗口状态等
				refresh:function(){
					var _dialog = this.getdom();
					var _title_bar = _dialog.find(".dialog-header");
					var _min = _dialog.find(".dialog-minimal");
					var _max = _dialog.find(".dialog-maximal");
					var _this_dialog_obj = this;

					var _old_size = {width:_dialog.width(),height:_dialog.height()};

					_dialog.find(".dialog-body").show();
					
					if(this.status() == 'normal'){
						_max.removeClass("icon-normal").addClass("icon-maximal");
						_min.removeClass("icon-normal").addClass("icon-minimal");
						_min[0].onclick = function(){
							_this_dialog_obj.minimal();
						}
						_max[0].onclick = function(){
							_this_dialog_obj.maximal();
						};
						//标题栏双击事件
						_title_bar.off("dblclick");
						_title_bar.on('dblclick',function(){
														_this_dialog_obj.maximal();
													});
					}else if(this.status() == 'minimal'){
						_max.removeClass("icon-normal").addClass("icon-maximal");
						_min.addClass("icon-normal").removeClass("icon-minimal");

						_min[0].onclick = function(){
							_this_dialog_obj.normal();
						};
						_max[0].onclick = function(){
							_this_dialog_obj.maximal();
						};
						this.getdom().find(".dialog-body").hide();
						
						//标题栏双击事件
						_title_bar.off("dblclick");
						_title_bar.on('dblclick',function(){
														_this_dialog_obj.normal();
													});
					}else if(this.status() == 'maximal'){
						_max.addClass("icon-normal").removeClass("icon-maximal");
						_min.removeClass("icon-normal").addClass("icon-minimal");
						
						_min[0].onclick = function(){
							_this_dialog_obj.minimal();
						};
						_max[0].onclick = function(){
							_this_dialog_obj.normal();
						};
						
						//标题栏双击事件
						_title_bar.off("dblclick");
						_title_bar.on('dblclick',function(){
														_this_dialog_obj.normal();
													});
					}
				},
				markPosition:function(){
					if(this.status()=='normal')
						_position = {width:this.width(),height:this.height(),top:this.getdom().offset().top,left:this.getdom().offset().left};
				},
				//恢复对话框
				normal:function(){
					this.status('normal');
					this.width(_position.width);
					this.height(_position.height);
					this.moveTo({top:_position.top,left:_position.left});
					//调 用resize事件
					this.resize();
				},
				//最大化对话框
				maximal:function(){
					//不允许移动
					if(!this.setting.resizable){
						return this;
					}
					//最大化前记录当前对话框的位置、大小等
					this.markPosition();
					
					this.status('maximal');
					//使对话框全屏
					api.fullscreen(this.getdom());
					//调用resize事件
					this.resize();
					return this;
				},
				//最小化对话框
				minimal:function(){
					if(!this.setting.resizable){
						return this;
					}
					//最小化前记录当前对话框的位置、大小等
					this.markPosition();
					
					var _dialog = this.getdom();
					var _title = _dialog.find(".dialog-header");
					this.status('minimal');
					
					this.height(_title.outerHeight(true) + _dialog.outerHeight() - _dialog.height());
					this.width(200);

					//移到左下角
					this.moveTo('left','bottom');
					//调 用resize事件
					this.resize();
					
					return this;
				},
				//移动对话框
				moveTo:function(p1,p2){
					var dom = this.getdom();
					//如果第一个参数是字符串，则认为是基于位置的9点相对定位，即left,right,center,top,bottom,middle六个值的组合
					if(typeof(p1)=='string'){
						if(p1){
							api.align(dom,p1);
							api.valign(dom,p1);
						}
						if(p2){
							api.align(dom,p2);
							api.valign(dom,p2);
						}
					}else if(typeof(p1) == 'object'){
						this.getdom().css(p1);
					}
					return this;
				},
				open:function(fn){
					var stack = _events('open',fn);
					if(fn) return this;
					
					for(var x = 0;x<stack.length;x++){
						stack[x](this);
					}
					return this;
				},
				close:function(fn){
					var stack = _events('close',fn);
					if(fn) return this;
					for(var x = 0;x<stack.length;x++){
						stack[x](this);
					}
					return this;
				},
				destroy:function(){
					//恢复原有的特征
					_old_feature.resume();
					this.getdom().remove();
					_mask.remove();
					this.status('destroy');
					return this;
				},
				//resize事件
				resize:function(fn){
					var stack = _events('resize',fn);
					if(fn) return this;
					
					for(var x = 0;x<stack.length;x++){
						stack[x](this);
					}
					return this;
				}
			};
		})();
		
		//设置对话框尺寸
		if(setting.autoSize){
			var _h = Math.max(setting.target.outerHeight(true),setting.minHeight);
			var _w = Math.max(setting.target.outerWidth(true),setting.minWidth);
			_object.clientInnerHeight(_h);
			_object.clientInnerWidth(_w);
		}else{
			if(setting.width){
				_object.width(Math.max(setting.width,setting.minWidth));
			}
			if(setting.height){
				_object.height(Math.max(setting.height,setting.minHeight));
			}
		}
		
		if(setting.autoOpen){
			_object.open();
		}
		
		return _object;
	};
	
	//以对话框形式open一个url
	/*
	* 
	*/
	api.open=function(param){
		var setting = {};
		//如果只给了一个字符串参数，则认为是url
		if(typeof(param) == 'string'){
			setting.url = param;
			//如果存在第二个参数，则认为是name
			if(arguments[1]){
				setting.title = arguments[1];
				//如果存在第三个参数认为是模态窗口标志
				if(arguments[2] && typeof(arguments[2])=='boolean'){
					setting.modal = arguments[2];
				}
			}else{
				setting.title = "";
			}

		}else{
			setting = $.extend(setting,param);
		}
		var iframe = $("<iframe frameborder='0'></iframe>");
		
		iframe.css({"display":"none","border":"none"}).attr("src",setting.url)
					.appendTo($(document.body));
		setting.target = iframe;
		setting.resize=function(_dialog){
			iframe.width(_dialog.clientInnerWidth());
			iframe.height(_dialog.clientInnerHeight());
		};
		var _close = setting.close;
		setting.close=function(_d){
			_d.destroy();
			iframe.remove();
			if(_close)
				_close(_d);
		};
		var dialog = api.dialog(setting);
		var _callback = setting.callback || {};
		
		_callback.close = function(){
			dialog.close();
		};
		
		iframe.on('load',function(){
			api.frame(iframe[0]).window.callback=_callback;
		})
		
		//受bootstrap3 box-sizing影响 高和宽-1
		iframe.height(iframe.height()-1);
		iframe.width(iframe.width()-1);
		return dialog;
	};
	
	//创建/显示/移除遮罩层
	api.mask=function(_opt){
		var opt = $.extend({
					id:"fn-mask-default",
					zIndex:100000,
					cssClass:"mask-layer"
				},_opt);
		var method = arguments[1] || 'open';
		var _mask_obj = null;
		switch(method){
		case 'open':
			if($("#"+opt.id)[0]){
				_mask_obj.removeClass();
				_mask_obj.addClass(opt.cssClass);
				_mask_obj = $("#"+opt.id).show();
			}else{
				_mask_obj = $('<div id="'+opt.id+'"></div>');
				_mask_obj.addClass(opt.cssClass);
				_mask_obj.appendTo($(document.body));
			}
			_mask_obj.css({zIndex:opt.zIndex});
			
			$(_win).resize(function(){
				api.fullscreen(_mask_obj);
			});
			api.fullscreen(_mask_obj);
			break;
		case 'hide':
			_mask_obj = $("#"+opt.id).hide();
			break;
		case 'close':
			_mask_obj = $("#"+opt.id).remove();
		}
		return _mask_obj;
	};
	
	/**
	* 使对象可拖曳
	* 参数 (t:目标 h:柄 ) 
	*	或者 {
	*			target:目标
	*			,handle:柄
	*			,overflow:auto
	*			,ondragstart:function(setting){}//开始拖曳
	*			,ondrag:function(setting){}//拖曳
	*			,ondrop:function(setting){}//释放拖曳
	*	}
	*/
	api.draggable=function(t,h){
		//拖动的目标
		var _target = t.nodeType?$(t):t instanceof $?t:$(t.target);
		//可拖动的柄
		var _handle = h ? h instanceof $? h:$(h) : t.handle || _target;
		if(! (_handle instanceof $)){
			_handle = $(_handle);
		}
		
		//溢出时的处理方式  取值：disable | auto
		var _overflow = t && t.overflow ? t.overflow : "auto";
		
		var _setting = {target:_target,handle:_handle,overflow:_overflow};
		
		var _events = {ondragstart:(t && t.ondragstart) || null
									,ondrag:(t && t.ondrag) || null
									,ondrop:(t && t.ondrop) || null};
		_target.css({position:"absolute"});
		//指针样式
		_handle.css({cursor:"default"});
			
		//鼠标按下事件
		var _down = function(_e){
			//声明并初始化拖曳状态
			var _draggable = false;
			
			//计算偏移
			var _offset = {y:_e.clientY-_target.position().top,x:_e.clientX-_target.position().left};
			
			//由于move可以调用较多，将生成document的jquery对象单独提出来，提高效率
			var _jdoc = $(_doc);
			
			//目标跟随鼠标
			var _tack = function(_e){
				if(_draggable){
					var _top = _e.clientY-_offset.y;
					var _left = _e.clientX-_offset.x;
					if(_overflow == 'auto' || _overflow == 'hidden'){
						//不允许向上溢出
						_target.css({top:_top < 0 ? 0:_top,left:_left});
					}else if(_overflow == 'disable'){
						var _mxtop = _jdoc.height() - _target.outerHeight();
						var _mxleft = _jdoc.width() - _target.outerWidth();
						_top = _top > _mxtop ? _mxtop : _top ;
						_top = _top < 0 ? 0 : _top;
						//不允许四周溢出
						_target.css({top:_top,left:_left < 0 ? 0 : _left > _mxleft ? _mxleft:_left});
					}
					//拖曳事件
					if(_events.ondrag){
						_events.ondrag(_setting);
					}
				}
			};
			
			//鼠标释放事件
			var _up = function(ev){
				_draggable = false;
				$(document).unbind("mouseup",_up);
				$(document).unbind("mousemove",_tack);
				
				if(_events.ondrop){
					//拖曳释放事件
					_events.ondrop(_setting);
				}
			};
			
			$(document).bind("mouseup",_up);
			$(document).bind('mousemove',_tack);
			
			//触发拖曳开始事件
			if(_events.ondragstart)
				_events.ondragstart(_setting);
			
			//可拖曳状态
			_draggable = true;
		};
		_handle.mousedown(_down);
		
	};
	
	/**
	* 使对象可变大小
	*	TODO 目前存在一个问题，当resizable和draggable同时作用一个节点对象时将会发生意想不到的效果
	*			 若要解决此问题，需要加一个节点套在要resizable的节点上面，要么加四条边，用于resize
	* 参数 (t:目标) 
	*	或者 {
	*			 target:目标
	*			,onresize:function(target){} //大小改变回调事件
	*			,onstart:function(){} //开始resize事件
	*			,ondrop:function(){} //释放事件
	*			,borderWidth:10			//边框宽度
	*			,maxWidth:null
	*			,minWidth:null
	*			,maxHeight:null
	*			,minHeight:null
	*	}
	*/
	api.resizable=function(t){
		//拖动的目标
		var _target = t.nodeType?$(t):t instanceof $?t:$(t.target);
		var setting = t.nodeType || t instanceof $ ?{target:_target}:t;
		//边框宽度
		var _border_width = setting.borderWidth || 10;
		//可扩展的方向
		var _dir = {top:true,left:true,bottom:true,right:true};
		//若不是绝对定位，则不允许向左和向上扩展
		var _position = _target.css("position");
		if(_position != 'absolute' && _position!='fixed'){
			_dir.left = false;
			_dir.top = false;
		}
		
		//将要resize的方向
		var dir = null;
		//鼠标移动时，如果在边框上，则可拉伸，此时鼠标显示可拉伸状
		_target.mousemove(function(e){
			if(e.target!=_target[0]){
				if(_target.css("cursor") != "default")
						_target.css("cursor","default");
				return;
			}
			if(!dir){
				var _width = _target.outerWidth();
				var _height = _target.outerHeight();
				var _x = e.offsetX;
				var _y = e.offsetY;
				var _offset_right = _width - _border_width;
				var _offset_bottom = _height - _border_width;
				
				if(_dir.top && _dir.left && _x <= _border_width && _y <= _border_width){
					_target.css("cursor","nw-resize");
				}else if(_dir.right && _dir.bottom && _x >= _offset_right && _y >= _offset_bottom){
					_target.css("cursor","se-resize");
				}else if(_dir.top && _dir.right && _x >= _offset_right && _y <= _border_width){
					_target.css("cursor","ne-resize");
				}else if(_dir.left && _dir.bottom && _x <= _border_width && _y >= _offset_bottom){
					_target.css("cursor","sw-resize");
				}else if(_dir.left && _x <= _border_width){
					_target.css("cursor","w-resize");
				}else if(_dir.top && _y <= _border_width){
					_target.css("cursor","n-resize");
				}else if(_dir.right && _x >= _offset_right){
					_target.css("cursor","e-resize");
				}else if(_dir.bottom && _y >= _offset_bottom){
					_target.css("cursor","s-resize");
				}else{
					if(_target.css("cursor") != "default")
						_target.css("cursor","default");
				}
			}else{
				//移动
			}
		});
		//resize之前的对象状态
		var original = {
				offset:null,//原始偏移
				size:null,//原始大小
				pointer:null //指针所在位置
			};
		var resize = function(e){
			var _rx = e.clientX - original.pointer.x;
			var _ry = e.clientY - original.pointer.y;
			if(dir.right){
				var _w = original.size.width + _rx;
				if((setting.maxWidth && _w > setting.maxWidth && _rx > 0) || (setting.minWidth && _w < setting.minWidth && _rx < 0)){
					return
				}
				_target.width(_w);
			}else if (dir.left){
				var _w = original.size.width - _rx;
				if((setting.maxWidth && _w > setting.maxWidth && _rx < 0) || (setting.minWidth && _w < setting.minWidth && _rx > 0)){
					return
				}
				_target.width(_w);
				_target.css("left",original.offset.left + _rx);
			}
			if(dir.bottom){
				var _h = original.size.height + _ry;
				if((setting.maxHeight && _h > setting.maxHeight && _ry > 0) || (setting.minHeight && _h < setting.minHeight && _ry < 0)){
					return
				}
				_target.height(_h);
			}else if (dir.top){
				var _h = original.size.height - _ry;
				//限制最小高度与最大高度
				if((setting.maxHeight && _h > setting.maxHeight && _ry < 0) || (setting.minHeight && _h < setting.minHeight && _ry > 0)){
					return
				}
				
				_target.height(_h);
				_target.css("top",original.offset.top + _ry);
			}
			if(setting.onresize){
				setting.onresize(_target);
			}
		};
		var drop = function(target){
				dir = null;
				$(document).off('mousemove',resize);
				$(document).off('mouseup',drop);
				if(setting.ondrop){
					setting.ondrop(_target);
				}
			};
		
		//鼠标按下置为可移动
		_target.mousedown(function(e){
				if(e.target!=_target[0])
					return;
				//记录原来的偏移位置
				original.offset = _target.offset();
				//记录初始大小
				original.size = {width:_target.width(),height:_target.height()};
				//原始鼠标位置
				original.pointer = {x:e.clientX,y:e.clientY};
				
				var _width = _target.outerWidth();
				var _height = _target.outerHeight();
				var _x = e.offsetX;
				var _y = e.offsetY;
				var _offset_right = _width - _border_width;
				var _offset_bottom = _height - _border_width;
				
				if(_dir.top && _dir.left && _x <= _border_width && _y <= _border_width){
					dir = {top:true,left:true};
				}else if(_dir.right && _dir.bottom && _x >= _offset_right && _y >= _offset_bottom){
					dir = {right:true,bottom:true};
				}else if(_dir.top && _dir.right && _x >= _offset_right && _y <= _border_width){
					dir = {top:true,right:true};
				}else if(_dir.left && _dir.bottom && _x <= _border_width && _y >= _offset_bottom){
					dir = {left:true,bottom:true};
				}else if(_dir.left && _x <= _border_width){
					dir = {left:true};
				}else if(_dir.top && _y <= _border_width){
					dir = {top:true};
				}else if(_dir.right && _x >= _offset_right){
					dir = {right:true};
				}else if(_dir.bottom && _y >= _offset_bottom){
					dir = {bottom:true};
				}
				if(setting.onstart){
					setting.onstart(_target);
				}
				$(document).on('mousemove',resize);
				$(document).on('mouseup',drop);
			});
		
	};

	$.fn.draggable = function(params){
		for(var i=0;i<this.length;i++){
			if(!params){
				params={};
			}
			params.target = this[i];
			params.handle = params.target;
			params.overflow = "disable";
			api.draggable(params);
		}
	};

	$.fn.resizable = function(params){
		for(var i=0;i<this.length;i++){
			if(!params){
				params={};
			}
			params.target = this[i];
			api.resizable(params);
		}
	}

	$.fn.dialog = function(params){
		this.each(function(){
			var setting = params || {};
			setting.target = $(this);
			api.dialog(setting);
		});
	}

	$.alert = api.alert;
	$.confirm = api.confirm;
	$.open = api.open;

	$(function(){

		$(".draggable").draggable();
		
		$(".resizable").resizable();
	})
})(jQuery);

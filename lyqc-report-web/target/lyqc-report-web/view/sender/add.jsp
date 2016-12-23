<%@page import="com.liyun.car.common.enums.ParamStatusEnum"%>
<%@page import="com.liyun.car.common.enums.BooleanEnum"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("path", path);
request.setAttribute("basePath", basePath);
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>发件人管理</title>
</head>
<body>
	<div class="ch-container">
	    <ul class="breadcrumb">
	        <li>
	            <a href="#">发件人管理</a>
	        </li>
	        <li>
	            <a href="#">发件人新增</a>
	        </li>
	    </ul>
	    <div class="row">
			<div class="box col-md-12">
			   	<div class="box-inner">
		      	   <div class="box-header well" data-original-title="">
			           <h2><i class="glyphicon glyphicon-edit"></i>基本信息元素</h2>
			           <div class="box-icon">
			               <a href="#" class="btn btn-minimize btn-round btn-default"><i
			                       class="glyphicon glyphicon-chevron-up"></i></a>
			           </div>
			       </div>
		           <div class="box-content">
		           		<form id="fn-search-form" class="form-horizontal" method="post" action="${path }/sender/save">
		                    <div class="form-group">
	                            <label class="col-sm-1 control-label" >发件人名称 </label>
	                            <div class="col-sm-3">
	                                <input type="text"  class="form-control required" name="userName" maxlength="25" placeholder="30个汉字以内" value="${sender.userName }"/>
	                            	<input type="hidden" name="id" value="${sender.id }">
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >邮件地址 </label>
	                            <div class="col-sm-8">
	                                <input type="text"  class="form-control required" name="email" maxlength="25" placeholder="30个字符以内" value="${sender.email }"/>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >邮箱密码 </label>
	                            <div class="col-sm-8">
	                                <input type="password"  class="form-control required" name="password" id="password1" maxlength="25" placeholder="请输入邮箱密码" value="${sender.password }"/>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >请再次输入邮箱密码 </label>
	                            <div class="col-sm-8">
	                                <input type="password"  class="form-control required" maxlength="25" id="password2" placeholder="请再次输入邮箱密码" value="${sender.password }"/>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >发件人状态</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="status" name="status" data-placeholder="请设置收件人状态" code="${sender.status.value }">
	                       	 			<c:forEach items="<%=ParamStatusEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >是否默认</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="isDefault" name="isDefault" data-placeholder="请设置是否默认" code="${sender.isDefault.value }">
	                       	 			<c:forEach items="<%=BooleanEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >备注</label>
	                            <div class="col-sm-3">
	                            	<textarea class="form-control autogrow" name="remark" maxlength="1000" rows="4">${sender.remark }</textarea>
	                            </div>
	                        </div>
	                        <div class="form-group">
			                     <div class="col-sm-12">
				                    <p class="center-block">
				                        <a href="#" class="btn btn-default btn-mini" id="fn-btn-save"><i class="glyphicon glyphicon-add"></i> 保存</a>
				                    </p>
				                </div>
			                </div>
		                </form>
	               	</div>
		      	</div>
		    </div>
		</div>
	</div>
</body>
<jsp:include page="/view/common/head.jsp"></jsp:include>
<script type="text/javascript" src="${path }/include/js/chosen-pri.js"></script>
<script type="text/javascript">
	function init(){
		$(".chosen").each(function(){
			var code = $(this).attr("code");
			if(code != null && code != ""){
				chose_mult_set_ini("#"+$(this).attr("id"),code);
				$(this).change();
			}
			$(this).chosen({
		        no_results_text: "未发现匹配的字符串!",
		    	allow_single_deselect: true,
		    	width:"100%"
		    });
		});
	}
	$(function(){
		$("#fn-btn-save").click(function(){
			if($(".error").length!=0){
				$(".error").fieldErrorClear();
			}
			$(".required").not(":hidden").each(function(){
				if($(this).hasClass("chosen-container")){
					if($(this).siblings(".required").val()==null||$(this).siblings(".required").val()==""){
						$(this).fieldError("不能为空.");
					}
				} else {
					if($(this).val()==null || $(this).val()==""){
						$(this).fieldError("不能为空.");
					}
				}
			});
			$("#password1").blur();
			if($(".error").length!=0){
				return false;
			}
			$("#fn-search-form").submit();
		});
		
		$("#password1,#password2").blur(function(){
			if($("#password1").hasClass(".error")){
				$("#password1").fieldErrorClear();
			}
			if($("#password2").hasClass(".error")){
				$("#password2").fieldErrorClear();
			}
			if($("#password1").val()!=null && $("#password1").val()!=""&&$("#password2").val()!=null && $("#password2").val()!=""){
				if($("#password1").val()!=$("#password2").val()){
					$("#password1").fieldError("两次输入的密码不相同.");
					$("#password2").fieldError("两次输入的密码不相同.");
				}
			}
		});
		
		init();
	});
</script>
</html>

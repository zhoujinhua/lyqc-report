<%@page import="com.liyun.car.common.enums.BooleanEnum"%>
<%@page import="com.liyun.car.common.enums.ParamStatusEnum"%>
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
    <title>报表管理</title>
</head>
<body>
	<div class="ch-container">
	    <ul class="breadcrumb">
	        <li>
	            <a href="#">报表管理</a>
	        </li>
	        <li>
	            <a href="${path }/view/report/list.jsp">报表新增</a>
	        </li>
	    </ul>
	    <div class="row">
			<div class="box col-md-12">
			   	<div class="box-inner">
		      	   <div class="box-header well" data-original-title="">
			           <h2><i class="glyphicon glyphicon-edit"></i> 基本信息元素</h2>
			           <div class="box-icon">
			               <a href="#" class="btn btn-minimize btn-round btn-default"><i
			                       class="glyphicon glyphicon-chevron-up"></i></a>
			           </div>
			       </div>
		           <div class="box-content">
		           		<form id="fn-submit-form" class="form-horizontal" method="post" action="${path }/report/save">
		                    <div class="form-group">
		                        <label class="control-label col-sm-1">报表名称</label>
		                        <div class="col-sm-3">
		                        	<input type="hidden" name="id" value="${info.id }">
	                       	 		<input type="text" class="form-control required" name="reportName" maxlength="30" value="${info.reportName }">
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <label class="control-label col-sm-1">报表状态</label>
		                        <div class="col-sm-3">
	                       	 		<select class="form-control chosen required" id="status" name="status" data-placeholder="请设置报表状态" code="${info.status.value }">
	                       	 			<c:forEach items="<%=ParamStatusEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <label class="control-label col-sm-1">是否生成Excel</label>
		                        <div class="col-sm-3">
	                       	 		<select class="form-control chosen required" id="isGenExcel" name="isGenExcel" data-placeholder="请设置是否生成Excel" code="${info.isGenExcel.value }">
	                       	 			<c:forEach items="<%=BooleanEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
		                        </div>
		                    </div>
		                    <div class="form-group hide">
		                        <label class="control-label col-sm-1">Excel名称</label>
		                        <div class="col-sm-3">
	                       	 		<input type="text" class="form-control required" name="excelName" maxlength="30" value="${info.excelName }">
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <label class="control-label col-sm-1">是否发送邮件</label>
		                        <div class="col-sm-3">
	                       	 		<select class="form-control chosen required" name="isSendMail" id="isSendMail" data-placeholder="请设置是否发送邮件" code="${info.isSendMail.value }">
	                       	 			<c:forEach items="<%=BooleanEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <label class="control-label col-sm-1">发送前是否验证</label>
		                        <div class="col-sm-3">
	                       	 		<select class="form-control chosen required" name="isValidate" id="isValidate" data-placeholder="请设置发送邮件前是否验证" code="${info.isValidate.value }">
	                       	 			<c:forEach items="<%=BooleanEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
		                        </div>
		                    </div>
		                    <div class="form-group valid-content hide">
		                        <label class="control-label col-sm-1">请选择验证脚本</label>
		                        <div class="col-sm-3">
	                       	 		<select class="form-control chosen required" name="reportDetail.id" id="report-detail-id" data-placeholder="请选择验证脚本" code="${info.reportDetail.id }">
	                       	 			<option value="">--</option>
	                       	 			<c:forEach items="${validDetails }" var="item">
	                       	 				<option value="${item.id }">${item.titleName }</option>
	                       	 			</c:forEach>
	                       	 		</select>
		                        </div>
		                    </div>
		                    <div class="form-group send-mail hide">
		                        <label class="control-label col-sm-1">定义邮件发送者</label>
		                        <div class="col-sm-3">
		                        	<select class="form-control chosen required" id="report-sender-id" name="reportSender.id" data-placeholder="请设置发件人" code="${info.reportSender.id }">
	                        			<option value="">--</option>
		                        		<c:forEach items="${senders }" var="item">
		                        			<option value="${item.id }">${item.userName }</option>
		                        		</c:forEach>
		                        	</select>
		                        </div>
		                    </div>
		                    <div class="form-group send-mail hide">
		                        <label class="control-label col-sm-1">定义邮件接收者</label>
		                        <div class="col-sm-3">
	                       	 		<select class="form-control chosen required" id="mail-viewers" name="mailViewers" multiple data-placeholder="请设置收件人" code="${info.mailViewers }">
		                        		<c:forEach items="${viewers }" var="item">
		                        			<option value="${item.id }">${item.userName }</option>
		                        		</c:forEach>
		                        	</select>
		                        </div>
		                    </div>
		                    <div class="form-group send-mail hide">
		                        <label class="control-label col-sm-1">定义邮件抄送者</label>
		                        <div class="col-sm-3">
	                       	 		<select class="form-control chosen" id="mailCcViewers" name="mailCcViewers" multiple data-placeholder="请设置抄送人" code="${info.mailCcViewers }">
		                        		<c:forEach items="${viewers }" var="item">
		                        			<option value="${item.id }">${item.userName }</option>
		                        		</c:forEach>
		                        	</select>
		                        </div>
		                    </div>
		                    <div class="form-group send-mail hide">
		                        <label class="control-label col-sm-1">定义发送计划</label>
		                        <div class="col-sm-3">
	                       	 		<input type="text" class="form-control required" name="sendTime" maxlength="50" value="${info.sendTime }">
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
		$("#isGenExcel").on('change',function(evt, params){
			var value = $("#isGenExcel").val();
			if(value == "1"){
				$("input[name='excelName']").parent().parent().removeClass("hide").show();
			} else {
				$("input[name='excelName']").parent().parent().addClass("hide").hide();
			}
		});
		$("#isSendMail").on('change',function(evt, params){
			var value = $("#isSendMail").val();
			if(value == "1"){
				$(".send-mail").removeClass("hide").show();
			} else {
				$(".send-mail").addClass("hide").hide();
			}
		});
		$("#isValidate").on("change",function(evt,params){
			var value = $("#isValidate").val();
			if(value == "1"){
				$(".valid-content").removeClass("hide").show();
			} else {
				$(".valid-content").addClass("hide").hide();
			}
		});
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
			if($(".error").length!=0){
				return false;
			}
			$("#fn-submit-form").submit();
		});
		init();
	});
</script>
</html>

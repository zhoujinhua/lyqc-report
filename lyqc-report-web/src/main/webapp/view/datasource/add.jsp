<%@page import="com.liyun.car.common.enums.ParamStatusEnum"%>
<%@page import="com.liyun.car.report.enums.DataSourceTypeEnum"%>
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
    <title>数据源管理</title>
</head>
<body>
	<div class="ch-container">
	    <ul class="breadcrumb">
	        <li>
	            <a href="#">数据源管理</a>
	        </li>
	        <li>
	            <a href="#">数据源新增</a>
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
		           		<form id="fn-search-form" class="form-horizontal" method="post" action="${path }/dataSource/save">
		                    <div class="form-group">
	                            <label class="col-sm-1 control-label" >数据源名称 </label>
	                            <div class="col-sm-3">
	                                <input type="text"  class="form-control required" name="dataSourceName" maxlength="30" placeholder="30个汉字以内" value="${dataSource.dataSourceName }"/>
	                            	<input type="hidden" name="id" value="${dataSource.id }">
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >数据源类型 </label>
	                            <div class="col-sm-8">
	                                <select class="form-control chosen required" id="type" name="type" data-placeholder="请设置数据源类型" code="${dataSource.type.value }">
	                       	 			<c:forEach items="<%=DataSourceTypeEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >连接字符串 </label>
	                            <div class="col-sm-8">
	                                <input type="text"  class="form-control required" name="jdbcUrl" maxlength="150" placeholder="150个字符以内" value="${dataSource.jdbcUrl }"/>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >数据库用户名 </label>
	                            <div class="col-sm-8">
	                                <input type="text"  class="form-control required" maxlength="30" name="username" placeholder="30个字符以内" value="${dataSource.username }"/>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >数据库密码 </label>
	                            <div class="col-sm-8">
	                                <input type="password"  class="form-control required" maxlength="30" name="password" placeholder="请输入密码" value="${dataSource.password }"/>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >数据源状态</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="status" name="status" data-placeholder="请设置数据源状态" code="${dataSource.status.value }">
	                       	 			<c:forEach items="<%=ParamStatusEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >备注</label>
	                            <div class="col-sm-3">
	                            	<textarea class="form-control autogrow" name="remark" maxlength="1000" rows="4">${dataSource.remark }</textarea>
	                            </div>
	                        </div>
	                        <div class="form-group">
			                     <div class="col-sm-12">
				                    <p class="center-block">
				                        <a href="#" class="btn btn-default btn-mini" id="fn-btn-test"><i class="glyphicon glyphicon-add"></i> 测试连接</a>
				                        <a href="#" class="btn btn-primary btn-mini" id="fn-btn-save"><i class="glyphicon glyphicon-add"></i> 保存</a>
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
		$("#fn-btn-test").click(function(){
			$.ajax({			
			  type: 'POST',
			  url: '${pageContext.request.contextPath}/dataSource/test',
			  data: $("#fn-search-form").serialize(),
			  success: function(data){
				  console.log(data);
				  if(data.responseCode == 1){
					  $.alert("测试成功!");
				  } else {
					  $.alert(data.responseMsg);
				  }
			  },
			  dataType:"json"
			});
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
			$.ajax({
				  type: 'POST',
				  async:false,
				  url: '${path }/dataSource/save',
				  data: $("#fn-search-form").serialize(),
				  success: function(data){
						if(data && data.code && data.code == "00"){
							$.alert("保存成功!");
							location.href= contextPath + "/view/dataSource/list.jsp";
						} else {
							$.alert(data.message);
						}
				  },
				  dataType: 'json'
			});
		});
		
		init();
	});
</script>
</html>

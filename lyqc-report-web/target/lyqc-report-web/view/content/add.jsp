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
    <title>报表管理</title>
</head>
<body>
	<div class="ch-container">
	    <ul class="breadcrumb">
	        <li>
	            <a href="#">脚本管理</a>
	        </li>
	        <li>
	            <a href="${path }/view/content/list.jsp">脚本新增</a>
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
		           		<form id="fn-search-form" class="form-horizontal" method="post" action="${path }/content/save">
		                    <div class="form-group">
	                            <label class="col-sm-1 control-label" >标题名称 </label>
	                            <div class="col-sm-3">
	                                <input type="text"  class="form-control required" name="titleName" maxlength="25" placeholder="30个汉字以内" value="${detail.titleName }"/>
	                            	<input type="hidden" name="id" value="${detail.id }">
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >脚本状态</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="status" name="status" data-placeholder="请设置脚本状态" code="${detail.status.value }">
	                       	 			<c:forEach items="<%=ParamStatusEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >选择数据源</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="dataSource-id" name="dataSource.id" data-placeholder="请选择数据源" code="${detail.dataSource.id }">
	                       	 			<c:forEach items="${dataSources }" var="item">
	                       	 				<option value="${item.id }">${item.dataSourceName }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >是否验证脚本</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="isValidate" name="isValidate" data-placeholder="请选择是否为校验用脚本" code="${detail.isValidate.value }">
	                       	 			<c:forEach items="<%=BooleanEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group">
	                            <label class="col-sm-1 control-label" >脚本内容 </label>
	                            <div class="col-sm-8">
	                                <textarea class="form-control required autogrow" id="content" name="content" maxlength="6000" rows="4">${detail.content }</textarea>
	                            </div>
	                        </div>
	                        <div class="form-group isValidate hide">
	                            <label class="col-sm-1 control-label" >期望值/非期望值</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="isExpect" name="isExpect" data-placeholder="请选择是期望值还是非期望值" code="${detail.isExpect.value }">
	                       	 			<c:forEach items="<%=BooleanEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group isValidate hide">
	                            <label class="col-sm-1 control-label" >值</label>
	                            <div class="col-sm-3">
	                            	<input type="text"  class="form-control required" name="validValue" maxlength="30" placeholder="30个字符以内" value="${detail.validValue }"/>
	                            </div>
	                        </div>
	                        <div class="form-group content-exec hide">
	                            <label class="col-sm-1 control-label" >是否细分脚本</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="isSub" name="isSub" data-placeholder="请设置是否细分脚本" code="${detail.isSub.value }">
	                       	 			<c:forEach items="<%=BooleanEnum.values() %>" var="item">
	                       	 				<option value="${item.value }">${item.name }</option>
	                       	 			</c:forEach>
	                       	 		</select>
	                            </div>
	                        </div>
	                        <div class="form-group hide">
	                            <label class="col-sm-1 control-label" >选择细分字段</label>
	                            <div class="col-sm-3">
	                            	<select class="form-control chosen required" id="report-field-name" name="reportField.fieldName" data-placeholder="请设置是否细分字段" code="${detail.reportField.fieldName }">
	                            		<option value="" class="empty">--</option>
	                            		<c:if test="${detail.reportFields!=null }">
                							<c:forEach var="item" items="${detail.reportFields }" varStatus="status">
                								<option value="${item.fieldName }">${item.fieldName }</option>
                							</c:forEach>
	                					</c:if>
	                            	</select>
	                            </div>
	                        </div>
	                        <div class="form-group content-exec hide">
	                            <label class="col-sm-1 control-label" >字段设置 </label>
	                            <div class="col-sm-8">
	                            	<table class="table table-striped table-bordered responsive dataTable no-footer" style="width:100%">
	                					<thead>
	                						<tr>
	                							<th>表达式</th>
	                							<th>输出字段名称</th>
	                						</tr>
	                					</thead>
	                					<tbody id="tbody">
	                						<c:if test="${detail.reportFields!=null }">
	                							<c:forEach var="item" items="${detail.reportFields }" varStatus="status">
	                								<tr>
	                									<td class='filecode' style='width:50%;'>${item.fieldName }</td>
	                									<td class='field' style='width:50%;'>${item.declaredName }</td>
	                									<input type='hidden' name='reportFields[${status.index }].fieldName' value='${item.fieldName }' class='fieldName'>
	                									<input type='hidden' name='reportFields[${status.index }].declaredName' value='${item.declaredName }' class='declaredName'>
	                								</tr>
	                							</c:forEach>
	                						</c:if>
	                					</tbody>
	                				</table>
	                            </div>
	                        </div>
	                        <div class="form-group">
			                     <div class="col-sm-12">
				                    <p class="center-block">
				                        <a href="#" class="btn btn-default btn-mini content-exec" id="fn-btn-field"><i class="glyphicon glyphicon-add"></i> 设置字段</a>
				                        <a href="#" class="btn btn-default btn-mini" id="fn-btn-save"><i class="glyphicon glyphicon-add"></i> 保存</a>
				                    </p>
				                </div>
			                </div>
		                </form>
		                <table class="hide">
		                	<tbody id="hidden_body" style="display:none">
           					</tbody>
		                </table>
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
		var id = "${detail.id}";
		var isValidate = "${detail.isValidate.value}";
		if(id!=null && id!=""){
			if(isValidate == "1"){
				$(".isValidate").removeClass("hide").show();
				$(".content-exec").addClass("hide").hide();
			} else {
				$(".isValidate").addClass("hide").hide();
				$(".content-exec").removeClass("hide").show();
			}
		}
	}
	$(function(){
		$("#isSub").on('change',function(evt, params){
			var value = $("#isSub").val();
			if(value == "1"){
				$("#report-field-name").parent().parent().removeClass("hide").show();
			} else {
				$("#report-field-name").parent().parent().addClass("hide").hide();
			}
		});
		$("#isValidate").on('change',function(evt,params){
			var value = $("#isValidate").val();
			if(value == "1"){
				$(".isValidate").removeClass("hide").show();
				$(".content-exec").addClass("hide").hide();
			} else {
				$(".isValidate").addClass("hide").hide();
				$(".content-exec").removeClass("hide").show();
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
			if($("#isValidate").val()!="1"&&$("#tbody").html().trim()==""){
				$.alert("请务必设置脚本字段.");
				return false;
			}
			$("#fn-search-form").submit();
		});
		$("#fn-btn-field").click(function(){
			var content = $("#content").val();
    		if(content == null || $.trim(content)==""){
    			return false;
    		}
    		content = $.trim(content);
    		var operator = content.split(" ")[0].toLowerCase();
    		if(operator != "select"){
    			$.alert("仅支持查询语句.");
    			return false;
    		}
    		if($("#dataSource-id").val()==null ||$("#dataSource-id").val()==""){
    			$.alert("请务必选择数据源.");
    			return false;
    		}
    		parent.showDiv();
    		$.ajax({
 				  type: 'POST',
 				  url: '${pageContext.request.contextPath}/content/getContentField',
 				  data: {"content":content,"dataSourceId":$("#dataSource-id").val()},
 				  success: function(data){
 					 parent.closeDiv();
 					 if(data.msg != undefined){
						  $(".content-exec").addClass("hide").hide();
						  $.alert(data.msg);
					 } else {
						 $(".content-exec").removeClass("hide").show();
						 $("#report-field-name").children().not(".empty").remove();
						 $("#hidden_body").children().remove();
		        		 $("#hidden_body").append($("#tbody").html());
						 $("#tbody").children().remove();
						 $.each(data,function(i){
							  var flag = true;
							  if($("#hidden_body").find(".filecode").length!=0){
								  $("#hidden_body").find(".filecode").each(function(){
									  if(data[i].toUpperCase() == $.trim($(this).html()).toUpperCase()){
										flag = false;
										$(this).parent().find(".fieldName").attr("name","reportFields["+i+"].fieldName");
										$(this).parent().find(".declaredName").attr("name","reportFields["+i+"].declaredName");
										$("#tbody").append("<tr>"+$(this).parent().html()+"</tr>");
									  }
								  });
							  }
							 if(flag){
								var content = "<tr><td class='filecode' style='width:50%;'>"+data[i]+"</td><td class='field'>"+data[i]+"</td>"
								+"<input type='hidden' name='reportFields["+i+"].fieldName' value='"+data[i]+"' class='fieldName'>"
								+"<input type='hidden' name='reportFields["+i+"].declaredName' value='"+data[i]+"' class='declaredName'></tr>";
								$("#tbody").append(content);
							 }
							 $("#report-field-name").append("<option value='"+data[i]+"'>"+data[i]+"</option>");
				  		});
						 $("#report-field-name").trigger("chosen:updated");
 				  	}
 			  	},
			  	dataType: 'json'
    		});
		});
		$(document).delegate('.field','dblclick',function(){
    		if($(this).parent().parent().find(".input").length!=0){
    			return false;
    		}
    		var content = $(this).html();
    		$(this).html("<input class='form-control field-input' maxlength='30' onkeyup='' onbeforepaste='' style='width:96%'>");
    		$(this).find(".field-input").attr("onkeyup","value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\_]/g,'')");
    		$(this).find(".field-input").attr("onbeforepaste","clipboardData.setData('text',clipboardData.getData('text').replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\_]/g,''))");
    		$(this).find(".field-input").val(content);
    		$(this).find(".field-input").focus();
    	});
		$(document).delegate('.field-input','blur',function(){
    		var fieldcode = $(this).parent().parent().find(".filecode").html();
    		if($(this).val()==""||$(this).val()==null){
    			$(this).parent().html(fieldcode);
    		} else {
	    		var value = $(this).val();
	    		$(this).parent().parent().find(".declaredName").val(value);
	    		$(this).parent().html(value);
    		}
    	});
		
		init();
	});
</script>
</html>

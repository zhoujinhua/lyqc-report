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
		<title>脚本设置</title>
		<style type="text/css">
			.checked{
				background-color:#676e7e;
			    color:#ffffff;
			}
			.dialog-footer {
			    background-color: #f5f5f5;
			    border-top: 1px solid #cccccc;
			    padding: 5px 10px;
			    text-align: right;
			    position: absolute;
			    width: 100%;
			    bottom: 0;
			}
		</style>
	</head>
	<body style="width:92%">
	<div class="ch-container">
    <div class="row">
	    <form class="form-horizontal" id="fn-content-set-form" role="form" method="post" action="${path }/excel/setContent">
            <div class="form-group">
                <label class="control-label col-sm-3">选择脚本</label>
                <div class="col-sm-8">
                	<input type="hidden" name="id" id="excel-id" value="${id }">
           	 		<select class="form-control chosen" multiple id="choose-content" name="contentId" data-placeholder="请选择脚本.">
           	 		</select>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-3">展示顺序设置</label>
                <div class="col-sm-8">
                	<table class="table table-bordered responsive dataTable no-footer" style="width:100%">
       					<thead>
       						<tr>
       							<th>顺序号</th>
       							<th>脚本名称</th>
       						</tr>
       					</thead>
       					<tbody id="tbody">
       					</tbody>
	                </table>				
                </div>
            </div>
	    </form>
	</div>
	</div>
	    <div class="dialog-footer">		
	    	<div class="dialog-buttons">
	    		<button type="button" id="fn-btn-up" class="btn btn-mini btn-primary" style="margin-left:3px;margin-right:3px;">上移</button>
	    		<button type="button" id="fn-btn-down" class="btn btn-mini btn-primary" style="margin-left:3px;margin-right:3px;">下移</button>
	    		<button type="button" id="fn-btn-confirm" class="btn btn-mini btn-primary" style="margin-left:3px;margin-right:3px;">确定</button>
	    		<button type="button" id="fn-btn-cancle" class="btn btn-mini btn-primary btn-default" style="margin-left:3px;margin-right:3px;">取消</button>
	    	</div>
	   	</div>
	</body>
    <jsp:include page="/view/common/head.jsp"></jsp:include>
    <script type="text/javascript">
    $(function(){
    	var id = "${id}";
   		 $.ajax({
  			  type: 'POST',
  			  url: contextPath + '/content/getContents',
  			  data: {"status":"1"},
  			  success: function(data){
  				  if(data!=null && data.aaData!=null && data.aaData.length!=0){
  					  $("#choose-content").children().remove();
   					  $.ajax({
						  type: 'POST',
						  url: contextPath + '/excel/getContentsByExcel',
						  data: {"id":id},
						  success: function(data1){
	  						  $.each(data.aaData,function(i){
   							  	var flag = true;
								  if(data1!=null && data1.aaData!=null && data1.aaData.length!=0){
									  $.each(data1.aaData,function(j){
										  if(data.aaData[i].id == data1.aaData[j].id){
											  $("#choose-content").append("<option value='"+data.aaData[i].id+"' selected>"+data.aaData[i].titleName+"</option>");
											  $("#tbody").append("<tr id='report-content-"+data.aaData[i].id+"'><td class='seq'></td><td><input type='hidden' class='seq-input'><input type='hidden' class='content-id-input' value='"+data.aaData[i].id+"'>"+data.aaData[i].titleName+"</td></tr>");
											  flag = false;											  
										  }
									  });
								  }
		   					  if(flag){
		   						  if(data.aaData[i].isValidate != "YES"){
			   						  $("#choose-content").append("<option value='"+data.aaData[i].id+"'>"+data.aaData[i].titleName+"</option>");
		   						  }
		   					  }
						  });
		   					sort();
					   		$("#choose-content").chosen({
					            no_results_text: "未发现匹配的字符串!",
					        	allow_single_deselect: true,
					        	width:"100%"
					        });
						  		},
						  dataType: 'json'
					  });
  				} else {
				  alert("请先添加脚本.");
		    	}
		  },
		  dataType: 'json'
	   });
   		 
   		 $("#choose-content").on("change",function(evt,params){
   			 if(params.selected != "undefined"){
   				var id = params.selected;
   				var name = $("#choose-content [value='"+id+"']").text();
   				$("#tbody").append("<tr id='report-content-"+id+"'><td class='seq'></td><td><input type='hidden' class='seq-input'><input type='hidden' class='content-id-input' value='"+id+"'>"+name+"</td></tr>");
   			 } else {
   				var id = params.deselected;
   				$("#report-content-"+id).remove();
   			 }
   			 sort();
   		 });
   		 $(document).on("click","tr",function(){
       		$(this).parent().find(".checked").removeClass("checked");
       		$(this).addClass("checked");
   		 });
   		 $("#fn-btn-cancle").click(function(){
   			 parent.$(".dialog-close").click();
   		 });
   		 $("#fn-btn-confirm").click(function(){
   			if($("#choose-content").val()!=null && $("#choose-content").val()!=""){
  				 var serial = $("#fn-content-set-form").formSerialize();
  				$.ajax({
					  type: 'POST',
					  url: contextPath + '/excel/setContent?'+serial,
					  data: {"id":id},
					  success: function(data){
						  if(data == "success"){
							  parent.location.href="${path}/view/excel/list.jsp?msg=操作成功！";
							  $("#fn-btn-cancle").click();
						  } else {
							  $.alert(data);
						  }
			  		  },
					  dataType: 'text'
				  });
  			 } else {
  				 $.alert("请选择脚本.");
  				 return false;
  			 }
   		 });
   		 $("#fn-btn-down").click(function(){
   			if($("#tbody").find(".checked").length!=0){
				var $downone = $("#tbody").find(".checked").next("tr");
				if($downone.length != 0){
					var content = "<tr class='checked' id="+$("#tbody").find(".checked").attr("id")+">"+$("#tbody").find(".checked").html()+"</tr>";
					$("#tbody").find(".checked").remove();
					$downone.after(content);
					sort();
				}
			}
   		 });
   		 $("#fn-btn-up").click(function(){
   			if($("#tbody").find(".checked").length!=0){
				var $topone = $("#tbody").find(".checked").prev("tr");
				if($topone.length != 0){
					var content = "<tr class='checked' id="+$("#tbody").find(".checked").attr("id")+">"+$("#tbody").find(".checked").html()+"</tr>";
					$("#tbody").find(".checked").remove();
					$topone.before(content);
					sort();
				}
			}
   		 });
   		 function sort(){
   			 var i = 1;
   			 $(".seq").each(function(){
   				 $(this).html(i);
   				 $(this).parent().find(".seq-input").val(i);
   				 $(this).parent().find(".seq-input").attr("name","reportExcelDetails["+(i-1)+"].seq");
   				 $(this).parent().find(".content-id-input").attr("name","reportExcelDetails["+(i-1)+"].reportDetail.id");
   				 i++;
   			 });
   		 }
    });
    </script>
</html>

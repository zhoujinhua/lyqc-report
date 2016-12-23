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
    <title>脚本管理</title>
    <style type="text/css">
    	.icon-margin{
			margin-top:4px;
			float:right;
		}
    </style>
</head>
<body>
	<div class="ch-container">
	    <ul class="breadcrumb">
	        <li>
	            <a href="#">脚本管理</a>
	        </li>
	        <li>
	            <a href="${path }/view/report/list.jsp">脚本管理</a>
	        </li>
	    </ul>
		<div class="row">
			<c:if test="${msg!=null && msg!=''}">
				<div class="col-md-12">
					<div class="alert alert-info alert-dismissible col-md-12" role="alert">
					  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					  ${msg }
					</div>
				</div>
			</c:if>
			<div class="box col-md-12">
			   	<div class="box-inner">
		      	   <div class="box-header well" data-original-title="">
			           <h2><i class="glyphicon glyphicon-edit"></i> 查询条件</h2>
			           <div class="box-icon">
			               <a href="#" class="btn btn-minimize btn-round btn-default"><i
			                       class="glyphicon glyphicon-chevron-up"></i></a>
			           </div>
			       </div>
		           <div class="box-content">
		           		<form id="fn-search-form" class="form-horizontal" method="post">
		                    <div class="form-group">
		                        <label class="control-label col-sm-1">脚本名称</label>
		                        <div class="col-sm-3">
	                       	 		<input type="text" class="form-control" name="sheetName" maxlength="20">
		                        </div>
		                    </div>
		                     <div class="form-group">
			                     <div class="col-sm-12">
				                    <p class="center-block">
				                        <a href="#" class="btn btn-primary btn-mini" id="fn-btn-search"><i class="glyphicon glyphicon-search"></i> 查询</a>
				                        <a href="#" class="btn btn-default btn-mini" id="fn-btn-add"><i class="glyphicon glyphicon-plus"></i> 新增</a>
				                    </p>
				                </div>
			                </div>
		                </form>
	               	</div>
		      	</div>
		    </div>
		</div>
	    <div class="row">
	    	<div class="box col-md-12">
		      	<div class="box-inner">
		      	   <div class="box-header well" data-original-title="">
			           <h2><i class="glyphicon glyphicon-th"></i> 查询结果</h2>
			           <div class="box-icon">
			               <a href="#" class="btn btn-minimize btn-round btn-default"><i
			                       class="glyphicon glyphicon-chevron-up"></i></a>
			           </div>
			       </div>
		           <div class="box-content">
	           		<table id="data-table" class="table table-striped table-bordered responsive">
                        <thead>
                        <tr>
                            <th>脚本ID</th>
                            <th>脚本标题</th>
                            <th>脚本类型</th>
                            <th>脚本内容</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                    </table>
		           </div>
		       </div>
	       </div>
       </div>
	</div>
	<div class="modal fade" id="excel-dialog" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true" >
	    <form class="form-horizontal" role="form">
	        <div class="modal-dialog modal-lg " >
	            <div class="modal-content">
	                <div class="modal-header">
	                    <button type="button" class="close"
	                            data-dismiss="modal" aria-hidden="true">
	                        &times;
	                    </button>
	                    <h4 class="modal-title" id="myModalLabel">
	                     	   提示信息
	                    </h4>
	                </div>
	                <div class="modal-body" style="text-align: left;">
	                    <h5 id="content-body">您确定要删除当前信息吗？</h5>
	                </div>
	                <div class="modal-footer">
	                	<button type="button" class="btn btn-default" id="fn-close-btn"
                            data-dismiss="modal">取消
                    	</button>
	                    <button type="button" class="btn btn-primary" id="fn-remove-btn">
	                    	    确认
	                    </button>
	                </div>
	            </div>
	        </div>
	    </form>
	</div>
</body>
    <jsp:include page="/view/common/head.jsp"></jsp:include>
    <script type="text/javascript" src="${path }/include/js/content.js"></script>
</html>

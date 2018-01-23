<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("path", path);
request.setAttribute("basePath", basePath);
String id = request.getParameter("id");
if(id != null && !"".equals(id)){
	request.setAttribute("id", id);
}
String msg = request.getParameter("msg");
request.setAttribute("msg", msg);
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>导出文件管理</title>
</head>
<body>
	<div class="ch-container">
	    <ul class="breadcrumb">
	        <li>
	            <a href="#">报表管理</a>
	        </li>
	        <li>
	            <a href="${path }/view/excel/list.jsp?id=${id }">导出文件管理</a>
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
	                       	 		<input type="text" class="form-control" name="titleName" maxlength="20">
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
                            <th>SheetID</th>
                            <th>Sheet标题</th>
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
	<div class="modal fade" id="set-content" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true" >
	        <div class="modal-dialog modal-lg " >
	            <div class="modal-content">
	                <div class="modal-body" style="text-align: left;">
	                    <iframe id="content-iframe" src="" style="width: 100%;height: 100%;border:none;" frameborder="0"></iframe>
	                </div>
	            </div>
	        </div>
	</div>
	<div class="modal fade" id="sheet-add" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true" >
	    <form class="form-horizontal" id="fn-sheet-form" role="form" method="post" action="${path }/excel/save">
	        <div class="modal-dialog modal-lg " >
	            <div class="modal-content">
	                <div class="modal-header">
	                    <button type="button" class="close"
	                            data-dismiss="modal" aria-hidden="true">
	                        &times;
	                    </button>
	                    <h4 class="modal-title" id="myModalLabel">
	                     	   新增
	                    </h4>
	                </div>
	                <div class="modal-body" style="text-align: left;">
	                    <div class="form-group">
	                        <label class="control-label col-sm-3">Sheet标题</label>
	                        <div class="col-sm-5">
	                        	<input type="hidden" name="reportInfo.id" value="${id }" id="reportId">
			                	<input type="hidden" name="id" id="add-excel-id">
	                        	<input class="form-control" name="sheetName" id="sheetName" maxlength="30">
	                        </div>
	                    </div>
	                </div>
	                <div class="modal-footer">
	                    <button type="button" class="btn btn-primary" id="fn-sheet-btn">确认</button>
	                </div>
	            </div>
	        </div>
	    </form>
	</div>
</body>
    <jsp:include page="/view/common/head.jsp"></jsp:include>
    <script type="text/javascript">
    	var id = "${id}";
    	/* $("#choose-content").chosen({
            no_results_text: "未发现匹配的字符串!",
        	allow_single_deselect: true,
        	width:"100%"
        }); */
    </script>
    <%-- <script type="text/javascript" src="${path }/include/js/chosen-pri.js"></script> --%>
    <script type="text/javascript" src="${path }/include/js/excel.js?a=3"></script>
</html>

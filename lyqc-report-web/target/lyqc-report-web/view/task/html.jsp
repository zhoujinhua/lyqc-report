<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("path", path);
request.setAttribute("basePath", basePath);
String id = request.getParameter("id");
request.setAttribute("id", id);
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>报表内容</title>
	</head>
	<body style="width:92%">
		<div class="ch-container">
		    <div class="row">
			    <form class="form-horizontal">
		            <div class="form-group">
		                <label class="control-label col-sm-1"></label>
		                <div class="col-sm-8 table-content">
		                </div>
		            </div>
			    </form>
			</div>
		</div>
	</body>
    <jsp:include page="/view/common/head.jsp"></jsp:include>
    <script type="text/javascript">
    	var id = "${id}";
    	$.ajax({
			  type: 'POST',
			  url: contextPath + '/task/html',
			  data: {"id":id},
			  success: function(data){
				  $(".table-content").html(data.htmlContent);
			  },
			  dataType: 'json'
	  	});
    </script>
</html>

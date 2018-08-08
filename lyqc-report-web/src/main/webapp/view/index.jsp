<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("path", path);
request.setAttribute("basePath", basePath);
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>联众金融-简易报表平台</title>
    <jsp:include page="common/head.jsp"></jsp:include>
	<style type="text/css">
		.popWindow {
				background-color:white;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				filter: alpha(opacity=50);
				opacity: 0.5;
				z-index: 1;
				position: absolute;
			
			}
			.maskLayer {
				width: 200px;
				height: 30px;
				line-height: 30px;
				left: 40%;
				top: 50%;
				color:#fff;
				z-index: 2;
				position: absolute;
				text-align:center;
			}
	</style>
</head>
<script type="text/javascript">
	$(function(){
		$(".sidebar-nav,#content").height($(window).height()-$(".navbar-static-top").height()-100);
	});
	var gourl = function(url) {
        if (!url || url == '') {
            return;
        }
        showDiv();
        document.getElementById("sub-content").src = url;
    }
    function showDiv() {
    	document.getElementById('popWindow').style.display = 'inline';
    	document.getElementById('maskLayer').style.display = 'inline';
    }
    function closeDiv() {
    	document.getElementById('popWindow').style.display = 'none';
    	document.getElementById('maskLayer').style.display = 'none';
   	}
    function stateChangeIE (_iframe) {
        if(_iframe.readyState == "complete") 
        	closeDiv();
    }
    function stateChangeFirefox (_iframe) {
        	closeDiv();
    }
</script>
<body>
    <div class="navbar navbar-default" role="navigation">
        <div class="navbar-inner">
            <a class="navbar-brand" href="#" style="width:240px;"> 
                <span>联众金融-报表发送平台</span></a>
 
        </div>
    </div>
<div class="ch-container">
    <div class="row">
        <div class="col-sm-2 col-lg-2">
            <div class="sidebar-nav" style="overflow:auto">
                <div class="nav-canvas">
                    <ul class="nav nav-pills nav-stacked main-menu">
                        <li class="nav-header">Main</li>
                        <li><a class="ajax-link" href="${path }/view/index.jsp"><i class="glyphicon glyphicon-home"></i><span> 主页</span></a>
                        </li>
                        <li class="accordion">
                        	<a href="#"><i class=""></i><span><i class="glyphicon glyphicon-book"></i>配置管理</span></a>
                        	<ul class="nav nav-pills nav-stacked">
                        		<li><a href="javascript:gourl('sender/list.jsp');"><i class="glyphicon glyphicon-list"></i>发件人管理</a></li>
                        		<li><a href="javascript:gourl('viewer/list.jsp');"><i class="glyphicon glyphicon-file"></i>收件人管理</a></li>
                        		<li><a href="javascript:gourl('datasource/list.jsp');"><i class="glyphicon glyphicon-file"></i>数据源管理</a></li>
                        	</ul>
                        </li>
                        <li class="accordion">
                        	<a href="#"><i class=""></i><span><i class="glyphicon glyphicon-book"></i>报表管理</span></a>
                        	<ul class="nav nav-pills nav-stacked">
                        		<li><a href="javascript:gourl('report/list.jsp');"><i class="glyphicon glyphicon-list"></i>报表管理</a></li>
                        		<li><a href="javascript:gourl('content/list.jsp');"><i class="glyphicon glyphicon-file"></i>脚本管理</a></li>
                        	</ul>
                        </li>
                        <li class="accordion">
                        	<a href="#"><i class=""></i><span><i class="glyphicon glyphicon-book"></i>监控管理</span></a>
                        	<ul class="nav nav-pills nav-stacked">
                        		<li><a href="javascript:gourl('task/list.jsp');"><i class="glyphicon glyphicon-list"></i>执行日志</a></li>
                        	</ul>
                        </li>
                        <li class="accordion">
                        	<a href="#"><i class=""></i><span><i class="glyphicon glyphicon-book"></i>入库管理</span></a>
                        	<ul class="nav nav-pills nav-stacked">
                        		<li><a href="javascript:gourl('import/import.jsp');"><i class="glyphicon glyphicon-list"></i>导数入库</a></li>
                        	</ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="popWindow" class="popWindow" style="display: none;">
		</div>
		<div id="maskLayer" class="maskLayer" style="display: none;">
			<img src="../include/image/loading.gif" />
		</div>
        <div id="content" class="col-lg-10 col-sm-10">
        	<iframe id="sub-content" name="sub-content" onreadystatechange=stateChangeIE(this) onload=stateChangeFirefox(this) src="" style="width: 100%;height: 100%;border:none;" frameborder="0"></iframe>
    	</div>
	</div>
</div>
</body>
</html>

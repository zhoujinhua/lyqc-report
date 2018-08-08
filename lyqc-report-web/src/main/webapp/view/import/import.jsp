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
    <title>导入数据管理</title>
</head>
<body>
	<div class="ch-container">
	    <ul class="breadcrumb">
	        <li>
	            <a href="#">导数管理</a>
	        </li>
	        <li>
	            <a href="${path }/view/import/import.jsp">导数入库管理</a>
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
			           <h2><i class="glyphicon glyphicon-edit"></i> 导数管理</h2>
			           <div class="box-icon">
			               <a href="#" class="btn btn-minimize btn-round btn-default"><i
			                       class="glyphicon glyphicon-chevron-up"></i></a>
			           </div>
			       </div>
		           <div class="box-content">
		           		<form id="fn-search-form" class="form-horizontal" method="post">
		           		    <div class="form-group">
                                <label class="col-sm-1 control-label">选择数据源</label>
                                <div class="col-sm-6">
                                    <select class="form-control chosen required" id="dbId">
                                    </select>
                                </div>
                            </div>
		                    <div class="form-group">
		                        <label class="control-label col-sm-1">输入库表名</label>
		                        <div class="col-sm-6">
	                       	 		<input type="text" class="form-control" id="tableName" maxlength="200">
		                        </div>
		                    </div>
		                    <div class="form-group">
		                        <label class="col-sm-1 control-label"></label>
		                        <div class="col-sm-6">
	                       	 		<div id="ossfile">你的浏览器不支持flash,Silverlight或者HTML5！</div>
	                       	 		<pre id="console" style="display:none"></pre>
		                        </div>
		                    </div>
		                    <div class="form-group hide" id="pre_view">
		                        <label class="control-label col-sm-1">导入数据预览</label>
		                        <div class="col-sm-6">
	                       	 		<table class="table table-striped table-bordered responsive no-footer" style="width:100%">
	                       	 		    <tbody id="tbody">
	                       	 		    </tbody>
	                       	 		</table>
		                        </div>
		                    </div>
		                     <div class="form-group">
			                     <div class="col-sm-12">
				                    <p class="center-block" id="container">
				                        <input type="hidden" id="hidden-import-data">
				                        <a href="javascript:void(0);" class="btn btn-default btn-mini" id="selectfiles" class='btn'>选择文件</a>
				                    	<a href="javascript:void(0);" class="btn btn-default btn-mini" id="postfiles">预览数据</a>
				                    	<a href="javascript:void(0);" class="btn btn-default btn-mini" id="fn-btn-import">导入</a>
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
    <script src="${path}/include/weblib/plupload-2.3.6/js/moxie.js" type="text/javascript" charset="utf-8"></script>
    <script src="${path}/include/weblib/plupload-2.3.6/js/plupload.dev.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
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
    $.ajax({
        type: 'POST',
        url: contextPath + '/dataSource/list',
        success: function(data){
            if(data.code == '00'){
            	$.each(data.data, function(i){
	                $("#dbId").append("<option value='"+data.data[i].id+"'>"+data.data[i].dataSourceName+"</option>");
            	});
            	$("#dbId").trigger("chosen:updated");
            } else {
                $.alert(data.message);
            }
        },
        dataType: 'json'
    });
    var uploader = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
        multi_selection: false,
        container: document.getElementById('container'),
        flash_swf_url : '${path}/include/weblib/plupload-2.3.6/js/Moxie.swf',
        silverlight_xap_url : '${path}/include/weblib/plupload-2.3.6/js/Moxie.xap',
        browse_button : 'selectfiles', 

        filters: {
            mime_types : [
            { title : "EXCEL files", extensions : "xls" },
            { title : "EXCEL files", extensions : "xlsx" }
            ],
            max_file_size : '10mb', //最大只能上传10mb的文件
            max_file_count : 1,
            prevent_duplicates : true //不允许选取重复文件
        },

        init: {
            PostInit: function() {
                document.getElementById('ossfile').innerHTML = '';
                document.getElementById('postfiles').onclick = function() {
                	if($("#tableName").val() == null || $("#tableName").val() == ''){
                		$.alert("请输入入库表名");
                		return false;
                	}
                	upload_params = {
                		'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
                		'dbId': $("#dbId").val(),
                		'tableName': $("#tableName").val()
                	}
                	uploader.setOption({
                        'url': '${path}/intoDb/upload',
                        'multipart_params': upload_params
                    });

                	uploader.start();
                    return false;
                };
            },

            FilesAdded: function(up, files) {
                var file = files[files.length-1];
                document.getElementById('ossfile').innerHTML = '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
                +'<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
                +'</div>';
            },

            BeforeUpload: function(up, file) {
                up.start();
            },

            UploadProgress: function(up, file) {
                var d = document.getElementById(file.id);
                d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
                var prog = d.getElementsByTagName('div')[0];
                var progBar = prog.getElementsByTagName('div')[0];
                progBar.style.width= 2*file.percent+'px';
                progBar.setAttribute('aria-valuenow', file.percent);
            },

            FileUploaded: function(up, file, info) {
                if (info.status == 200) {
                    if(info.response){
	                	var text = info.response.replace(/\"/g,"'");
	                	var data = eval('(' + text + ')');
                    	if(data.code == '00'){
		                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '上传成功!';
		                    
		                    var allKeyHtml = "";
		                    var allValueHtml = "";
		                    for(var i = 0; i < data.data.data.length; i++){
			                    var keyHtml = "<tr>";
			                    var valueHtml = "<tr>";
		                    	for(var key in data.data.data[i]){
		                    		keyHtml += "<td>" + key + "</td>";
		                    		valueHtml += "<td>" + data.data.data[i][key] + "</td>";
		                    	}
		                    	keyHtml += "</tr>";
		                    	valueHtml += "</tr>";
		                    	allKeyHtml = keyHtml;
		                    	allValueHtml += valueHtml;
		                    }
	                    	$("#tbody").append(keyHtml);
	                    	$("#tbody").append(allValueHtml);
	                    	$("#pre_view").removeClass("hide").show();
	                    	$("#hidden-import-data").val(data.data.importData.filePath);
                    	} else {
                    		document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = data.message;
                    	}
                    }
                    window.close();
                }
                else {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                } 
            },

            Error: function(up, err) {
                if (err.code == -600) {
                    document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,最大支持10MB文件"));
                }
                else if (err.code == -601) {
                    document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,支持xlc,xlcx格式文件上传"));
                }
                else if (err.code == -602) {
                    document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else 
                {
                    document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                }
            }
        }
    });
    uploader.init();
    
    $("#fn-btn-import").click(function(){
    	if($("#hidden-import-data").val() == null || $("#hidden-import-data").val() == ''){
    		$.alert("请先预览并确认导入数据.");
    		return false;
    	}
    	$.ajax({
            type: 'POST',
            data: {"dbId": $("#dbId").val(), "tableName": $("#tableName").val(), "filePath": $("#hidden-import-data").val()},
            url: contextPath + '/intoDb/intoDb',
            success: function(data){
                if(data.code == '00'){
                    $.alert("入库成功!");
                } else {
                    $.alert(data.message);
                }
            },
            dataType: 'json'
        });
    });
    </script>
</html>

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
		<style type="text/css">
			.addrtitle {
			    color: #7a8f99;
			}
			.tcolor {
			    color: #7f7f7f;
			    font: 12px Verdana;
			}
			.table-content {
				margin-left:56px;
			}
			.readmailinfo {
			    border-left: medium none;
			    border-right: medium none;
			    border-top: 1px solid #fff;
			}
			.readmailinfo, .settingtable, .tabtitle td.selected, .biginfo, .tipstitle, .colorsure {
			    background: #f2f2f2 none repeat scroll 0 0;
			}
			.toolbgline, .tabtitle td, .readmailinfo, .addr_line, .filtertd1, .bartools {
			    border-bottom: 1px solid #b8b8b8;
			}
			.attbg {
			    background: #e6e6e6 none repeat scroll 0 0;
			}
			.att_bt .ico_big {
			    float: left;
			    margin: 2px 8px 0 0;
			}
			.att_bt .name_big {
			    float: left;
			}
		</style>
	</head>
	<body style="width:92%">
		<div class="ch-container">
		    <div class="row">
			    <form class="form-horizontal">
		            <div class="form-group">
		                <label class="control-label col-sm-1"></label>
		                <div class="col-sm-11 readmailinfo">
		                	<table style="height:24px;width: 100%;position:relative;">
		                		<tbody>
		                			<tr>
		                				<td style="word-break:break-all;padding:14px 8px 5px 14px;" class="txt_left settingtable readmail_subject" valign="middle">
		                					<div class="qm_left" style="padding-bottom:3px;">
		                						<span style="font: bold 14px 'lucida Grande',Verdana;" id="reportName"></span> 
		                					</div>
		                				</td>
		                			</tr>
		                		</tbody>
		                	</table>
		                	<table id="tbSenderOption">
		                		<tbody>
		                			<tr>
		                				<td style="padding-left:14px;" class="settingtable txt_left">
		                					<span class="addrtitle">发件人：</span>
		                					<span><b class="tcolor" id="sender"></b></span>
	                					</td>
	                				</tr>
	                			</tbody>
	                		</table>
	                		<table id="tbOtherOptions">
	                			<tbody>
	                				<tr>
	                					<td style="word-break:break-all;padding:2px 12px 0 14px;line-height:19px;" class="settingtable txt_left" width="99%">
	                						<span class="addrtitle">时&nbsp;&nbsp;&nbsp;间：</span>
	                						<b class="tcolor">2016年10月20日(星期四) 下午4:24</b>
	                					</td>
	                				</tr>
	                				<tr>
	                					<td style="padding:0 0 0 14px;line-height:19px;" class="settingtable txt_left">
	                						<div>
	                							<div class="addrtitle nowrap" style="position:absolute;">收件人：&nbsp;</div>
	                							<div style="padding-left:48px;font-size:12px;overflow:hidden; zoom:1;">
	                								<span style="white-space:nowrap;height:18px;line-height:18px; " class="left">
	                								<b class="tcolor" id="mailAddress"></b>
	                								</span>
	                							</div>
	                						</div>
	                						<div>
	                							<div class="addrtitle nowrap" style="position:absolute;">抄&nbsp;&nbsp;&nbsp;送：</div>
	                							<div style="padding-left:48px;font-size:12px;overflow:hidden; zoom:1;">
	                								<span style="white-space:nowrap;height:18px;line-height:18px; " class="left">
	                								<b class="tcolor" id="mailCcAddress"></b></span>
	                							</div>
	                						</div>
	                						<div style="margin-top:1px;" class="attach">
	                							<div class="addrtitle nowrap" style="position:absolute;">附&nbsp;&nbsp;&nbsp;件：</div> 
	                							<div style="padding-left:48px;font-size:12px;overflow:hidden;height:20px; _padding-top:2px; _height:17px;">
	                								<span class="pointer"><span>1</span>&nbsp;个 
	                									<span class="tcolor">( <a href="javascript:;"><img src="/lyqc-report/include/image/fu_exl.gif"><span class="fileName"></span></a> )</span>
	                								</span>
	                							</div> 
	                						</div>
	                					</td>
	                				</tr>
	                			</tbody>
	                		</table>
		                </div>
		            </div>
		            <div class="form-group">
		                <label class="control-label col-sm-1"></label>
		                <div class="col-sm-11 table-content">
		                </div>
		            </div>
		            <div class="form-group attach">
		                <label class="control-label col-sm-1"></label>
		                <div class="col-sm-11">
		                	<div id="attachment" style="padding:2px;" class="attbg">
		                		<div style="padding:6px 0 10px 6px;" class="txt_left">
		                			<div style="height:14px;">
		                				<b style="font-size:14px;"><img src="/lyqc-report/include/image/icon_att087795.gif" class="showattch" border="0"> 附件</b>
		                				(<span id="attachmentCount">1</span> 个)
		                			</div>
		                		</div>
		                		<div style="padding:0 8px 6px 12px;background:#fff;line-height:140%;overflow: hidden;zoom: 1;">
		                			<div class="graytext clear" style="padding-top:12px; padding-bottom:5px">
		                				<span style="color:#000;font-weight:bold;font-size:12px;">普通附件</span>
		                			</div>
			                		<div class="att_bt">
			                			<div class="ico_big">
			                				<a><img style="max-height: 100px;max-width: 160px;" src="/lyqc-report/include/image/fu_exl-md.gif"></a>
			                			</div>   
			                			<div class="name_big">
			                				<span class="fileName"></span>
			                				<span class="graytext">&nbsp;(<span id="fileSize"></span>B)</span>
			                				<div class="down_big">
			                					<a title="请直接点击或鼠标右键转下载工具打开，请不要拖拽到下载工具悬浮框中" href="${path }/task/download?id=${id}">下载</a>
			                				</div>
			                			</div>
			                		</div>
			                	</div>
			                </div>
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
				  $("#sender").html(data.reportSender.email);
				  $("#reportName").html(data.reportName);
				  $("#mailAddress").html(data.mailAddress);
				  $("#mailCcAddress").html(data.mailCcAddress);
				  if(data.fileName == null ||data.fileName == ""){
					  $(".attach").addClass("hide").hide();
				  } else {
					  $(".fileName").html(data.fileName);
					  $("#fileSize").html(data.fileSize)
				  }
			  },
			  dataType: 'json'
	  	});
    </script>
</html>

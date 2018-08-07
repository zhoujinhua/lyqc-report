$(function() {
	var table = $("#data-table").DataTable({
		/*"aLengthMenu":[10,20,40,60],*/
		"bLengthChange":false,
		"searching":false,//禁用搜索
		"lengthChange":true,
		"paging": true,//开启表格分页
		"bProcessing" : true,
		"bServerSide" : true,
		"bAutoWidth" : false,
		"sort" : "position",
		"deferRender":true,//延迟渲染
		"bStateSave" : false, //在第三页刷新页面，会自动到第一页
		"iDisplayLength" : 10,
		"iDisplayStart" : 0,
		"dom": '<l<\'#topPlugin\'>f>rt<ip><"clear">',
		"ordering": false,//全局禁用排序
		"ajax": {
                "type": "POST",
                "url": contextPath + "/task/list",
                "data":function(d){
                	d.reportName=$("#reportName").val();
                }
        },
				"aoColumns" : [{
					"mData" : "id",
					"orderable" : true, // 禁用排序
					"sDefaultContent" : ""
					
				},{
					"mData" : "reportName",
					"orderable" : true, // 禁用排序
					"sDefaultContent" : ""
					
				}, {
					"mData" : "isSuccess",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				},{
					"mData" : "message",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				}, {
					"mData" : "isMailSuccess",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				},{
					"mData" : "mailMessage",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				},
				{
					"mData" : "execTime",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : "",
					"render" : function(data, type, full, meta) {
						return  moment(data).format("YYYY-MM-DD HH:mm:ss");
					}
				},
				{
					"mData" : "id",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : '',
				    "render":function(data, type, full, meta){
				    	var html = '';
				    	if(full.htmlContent!=null &&full.htmlContent!=""){
				    		var html = '<a class="link html" data-id='+data+' href="javascript:;">报表内容</a>';
				    	}
				    	if(full.filePath!=null &&full.filePath!=""){
				    		html += '    <a class="link file" data-id='+data+' href="javascript:;">Excel下载</a>';
				    	}
				    	if(full.isMailSuccess == "YES"){
				    		html += '    <a class="link email" data-id='+data+' href="javascript:;">Email内容</a>';
				    	}
				    	return	data = html;
				    }	
				}],
		"oLanguage" : { // 国际化配置
			"sProcessing" : "正在获取数据，请稍后...",
			"sLengthMenu" : "显示 _MENU_ 条",
			"sZeroRecords" : "没有找到数据",
			"sInfo" : "从 _START_ 到  _END_ 条记录 总记录数为 _TOTAL_ 条",
			"sInfoEmpty" : "记录数为0",
			"sInfoFiltered" : "(全部记录数 _MAX_ 条)",
			"sInfoPostFix" : "",
			"sSearch" : "搜索",
			"sUrl" : "",
			"oPaginate" : {
				"sFirst" : "第一页",
				"sPrevious" : "上一页",
				"sNext" : "下一页",
				"sLast" : "最后一页"
			}
		}
		
	});
   $(document).delegate('.html','click',function(){
	   var id = $(this).attr("data-id");
	   $.open({
			url:contextPath + "/view/task/html.jsp?id="+id ,
			title:"报表内容",
			width:$(window).width()*0.8,
			height:$(window).height(),
			modal:true,
			buttons:[
	     				{
	     					name:"取消",	
	     					cssClass:"btn-default",
	     					callback:function(){
	     						$(".dialog-close").click();
	     					}   
	     				}
	     			]
		});
   })
   $(document).delegate('.email','click',function(){
	   var id = $(this).attr("data-id");
	   $.open({
		   url:contextPath + "/view/task/email.jsp?id="+id ,
		   title:"邮件内容",
		   width:$(window).width()*0.8,
		   height:$(window).height(),
		   modal:true,
		   buttons:[
		            {
		            	name:"取消",	
		            	cssClass:"btn-default",
		            	callback:function(){
		            		$(".dialog-close").click();
		            	}   
		            }
		            ]
	   });
   })
   $(document).delegate('.file','click',function(){
	   var id = $(this).attr("data-id");
	   location.href = contextPath + "/task/download?id=" + id;
   })
   $(document).delegate('#fn-btn-search','click',function() {
	   table.ajax.reload();	
   });
});
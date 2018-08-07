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
                "url": contextPath + "/report/list",
                "data":function(d){
                	d.reportName=$("input[name='reportName']").val();
                }
        },
		"aoColumns" : [{
					"mData" : "reportName",
					"orderable" : true, // 禁用排序
					"sDefaultContent" : ""
					
				}, {
					"mData" : "isSendMail",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				},{
					"mData" : "isGenExcel",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				}, {
					"mData" : "status",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				},{
					"mData" : "sendTime",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : ""
				},
				{
					"mData" : "createTime",
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
				    	var html = '<a class="link edit" data-id='+data+' href="javascript:;">修改</a>';
				    	html += '    <a class="link set-content" data-id='+data+' href="javascript:;">脚本配置</a>';
				    	if(full.isGenExcel == "YES"){
				    		html += '    <a class="link excel" data-id='+data+' href="javascript:;">Excel设置</a>';
				    	}
				    	html += '    <a class="link exec" data-id='+data+' isSendMail='+full.isSendMail+' href="javascript:;">执行</a>';
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
   $(document).delegate('.exec','click',function(){
	   var id = $(this).attr("data-id");
	   var isSendMail = $(this).attr("isSendMail");
	   $.confirm("确定要执行报表吗？",function(ok){
		   if(ok){
			   if(isSendMail == "YES"){
				   $.confirm("是否发送邮件？",function(ok){
					   if(ok){
						   location.href = contextPath + "/report/exec?id=" + id+"&isSendMail=1";
					   } else {
						   location.href = contextPath + "/report/exec?id=" + id+"&isSendMail=0";
					   }
				   });
			   } else {
				   location.href = contextPath + "/report/exec?id=" + id+"&isSendMail=0";
			   }
		   }
	   });
   })
   $(document).delegate('.edit','click',function(){
	   var id = $(this).attr("data-id");
	   location.href = contextPath + "/report/add?id=" + id;
   })
   $(document).delegate('.excel','click',function(){
	   var id = $(this).attr("data-id");
	   location.href = contextPath + "/view/excel/list.jsp?reportId=" + id;
   })
   $(document).delegate('#fn-btn-search','click',function() {
	   table.ajax.reload();	
   });
   $(document).delegate('.set-content','click',function(){
	   var id = $(this).attr("data-id");
	   $.open({
			url:contextPath + "/report/dialog?id="+id ,
			title:"脚本设置",
			width:$(window).width()*0.8,
			height:$(window).height(),
			modal:true
		});
   })
});
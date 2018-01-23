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
                "url": contextPath + "/content/list",
                "data":function(d){
                	d.titleName = $("#titleName").val();
                }
        },
		"aoColumns" : [{
					"mData" : "id",
					"orderable" : true, // 禁用排序
					"sDefaultContent" : "",
					
				}, {
					"mData" : "titleName",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : "",
				}, {
					"mData" : "isValidate",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : "",
					"render" : function(data, type, full, meta) {
						if(data == "YES"){
							return "验证脚本";
						}
						return "标准脚本";
					}
				}, {
					"mData" : "content",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : "",
					"render":function(data, type, full, meta){
						var temp = "";
						if(data.length > 100){
							if(data.indexOf("'")!=-1){
								temp = "<span class='hide'>\""+data+"\"</span><span style='float:left;width:91%'>"+data.substring(0,100)+"...</span><i class='glyphicon glyphicon-eye-open icon-margin'></i>";
							 } else {
								temp = "<span class='hide'>'"+data+"'</span><span style='float:left;width:91%'>"+data.substring(0,100)+"...</span><i class='glyphicon glyphicon-eye-open icon-margin'></i>";
							 }
						} else {
							temp = data;
						}
				    	return	data=temp;
				    }
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
				    	return	data='<a class="edit" data-id='+data+' href="javascript:;">修改</a> <a class="remove" data-id='+data+' href="javascript:;">删除</a>';
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
   
    $(document).delegate('.edit','click',function(){
 	   var id = $(this).attr("data-id");
 	   location.href = contextPath + "/content/add?id=" + id;
    })
    $(document).delegate('#fn-btn-add','click',function(){
    	location.href = contextPath + "/content/add" ;
    })
    $(document).delegate('.remove','click',function(){
    	 var id = $(this).attr("data-id");
  	    $.confirm("确定要删除脚本吗？",function(ok){
  		   if(ok){
  			   location.href = contextPath + "/content/delete?id=" + id;
  		   }
  	    });
    })
    $(document).delegate('#fn-btn-search','click',function() {
 	   table.ajax.reload();	
    });
    $(document).delegate('.icon-margin','click',function(){
    	var html = $(this).siblings("span").html();
    	$("#myModalLabel").html("脚本内容");
    	$("#content-body").html(html);
    	$("#fn-remove-btn").addClass("hide").hide();
    	$("#content-dialog").modal('show');
    })
});
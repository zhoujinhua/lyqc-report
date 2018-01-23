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
                "url": contextPath + "/excel/list?reportInfo.id=" + id,
                "data":function(d){
                	d.reportName=$("input[name='reportName']").val();
                }
        },
		"aoColumns" : [{
					"mData" : "id",
					"orderable" : true, // 禁用排序
					"sDefaultContent" : "",
					
				}, {
					"mData" : "sheetName",
					"orderable" : false, // 禁用排序
					"sDefaultContent" : "",
					"render" : function(data, type, full, meta) {
						return data = "<span class='span-sheet-name hide'>"+data+"</span>"+data
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
				    	var html = '<a class="link set-content" data-id='+data+' href="javascript:;">设置脚本</a>';
				    	html += ' <a class="link edit" data-id='+data+' href="javascript:;">修改</a>';
				    	html += ' <a class="link remove" data-id='+data+' href="javascript:;">删除</a>';
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
	$(document).delegate('.edit','click',function(){
    	var id=$(this).attr("data-id");
    	$("#add-excel-id").val(id);
    	
    	$("#sheetName").val($(this).parent().parent().find(".span-sheet-name").html());
    	$("#sheet-add").modal('show');
    })
    $(document).delegate('.remove','click',function(){
    	var id = $(this).attr("data-id");
  	    $.confirm("确定要删除Sheet吗？",function(ok){
  		   if(ok){
  			   location.href = contextPath + "/excel/delete?id=" + id;
  		   }
  	    });
    })
   $(document).delegate('.set-content','click',function(){
	   var id = $(this).attr("data-id");
	   $.open({
			url:contextPath + "/excel/dialog?id="+id ,
			title:"脚本设置",
			width:$(window).width()*0.8,
			height:$(window).height(),
			modal:true
		});
   })
   $("#fn-content-btn").click(function(){
	   if($("#choose-content").val() != null && $("#choose-content") != ""){
		   $("#fn-content-set-form").submit();
	   }
   });
   $(document).delegate('#fn-btn-search','click',function() {
	   table.ajax.reload();	
   });
   $("#fn-btn-add").click(function(){
	   $("#sheetId").val("");
	   $("#sheetName").val("");
	   $("#sheet-add").modal();
   });
   $("#fn-sheet-btn").click(function(){
	   if($("#sheetName").val()!=null && $("#sheetName").val()!=""){
		   $.ajax({
				  type: 'POST',
				  url: contextPath + '/excel/save',
				  data: {"id":$("#add-excel-id").val(), "sheetName":$("#sheetName").val(), "report.id":$("#reportId").val()},
				  success: function(data){
					  if(data.responseCode == 1){
						  $("#sheet-add").modal("hide");
						  $.alert("保存成功!");
						  table.ajax.reload();	
					  } else {
						  $.alert(data.responseMsg);
					  }
				  },
				  dataType: 'json'
			});
	   }
   });
});
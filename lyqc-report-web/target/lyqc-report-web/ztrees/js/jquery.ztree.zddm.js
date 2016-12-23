/**
 * 
 * @param {Object} aCtrl
 * @param {Object} oID
 * @param {Object} pWW
 * @param {Object} pHH
 * @param {Object} left
 * @param {Object} top
 * @param {Object} fName
 * @param {Object} level -1:不使用  0:只能选择0级  1:1级
 * @return {TypeName} 
 */
function xTree_Comm(aCtrl,oID,pWW,pHH,left,top,fName,level) {
    //aCtrl = 是否通过控制器获得数据
    //fName = 字典类别描述@字典文件名或控制器名@是否关联返回父级名称@是否显示Check
    var reval = window.showModalDialog("/yoolicar/include/ztrees/js/jquery.ztree.zddm.html", fName+"@"+aCtrl+"@"+level,'dialogWidth='+pWW+'px;dialogHeight='+pHH+'px;dialogLeft='+left+';dialogTop='+top+';status=no;scroll=no;help=0');
    if(reval == null || reval == undefined){
        return;
    }
    var result = reval.split("@");
    $("#_" + oID).val(result[0]);
    $("#"+ oID).val(result[1]);
}

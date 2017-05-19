function chose_mult_set_ini(select, values){
        var arr = values.split(',');
        var length = arr.length;
        var value = '';
        for(i=0;i<length;i++){
            value = arr[i];
            $(select+" [value='"+value+"']").attr('selected','selected');
        }
        $(select).trigger("liszt:updated");
    }
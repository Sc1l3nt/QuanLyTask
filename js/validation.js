var validation = {
    // Check rỗng
    checkRong: function(value){
        if(value.trim() === ''){
            document.getElementById('notiInput').style.display = 'block';
            document.getElementById('notiInput').innerHTML = '* Tên task không được bỏ trống.';
            return false;
        }
        return true;
    },
    checkTrung: function(value){
        for(var index = 0; index < arrTask.length; index++){
            var nameTask = arrTask[index].nameTask;
            if(value === nameTask){
                document.getElementById('notiInput').style.display = 'block';
                document.getElementById('notiInput').innerHTML = '* Tên task bị trùng.';
                return false;
            }
        }
        return true;
    }
}
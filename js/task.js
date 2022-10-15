function Task(){
    this.nameTask = '';
    this.todo = false;
    this.status = function(){
        if(todo){
            return 'completed';
        } else{
            return 'todo';
        }
    }
};
function taskList() {
    this.arrTask = [];
    this.findIndex = function(taskName){
        for(var index = 0; index < this.arrTask.length; index++){
            var task = this.arrTask[index];
            if(taskName === task.nameTask){
                return index;
            }
        }
    }
    this.addTask = function(task){
        this.arrTask.splice(0, 0, task);
    }
    this.deleteTask = function(taskName){
        var index = this.findIndex(taskName);
        this.arrTask.splice(index, 1);
    }
    this.getTask = function(taskName){
        var task = new Task();
        task.nameTask = taskName;
        task.todo = false;
        task.status();
        return task;
    }
}
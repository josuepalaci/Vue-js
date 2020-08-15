const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Tasks with VueJS',
        tasks: [],
        newTask: ''
    },
    methods: {
        addTask(){
            this.tasks.push({
                nombre: this.newTask,
                estado: false
            });
            this.newTask = '';
            localStorage.setItem('dbTask', JSON.stringify(this.tasks));
        },
        editTask(index){
            this.tasks[index].estado = true;
            localStorage.setItem('dbTask', JSON.stringify(this.tasks));
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
            localStorage.setItem('dbTask', JSON.stringify(this.tasks));
        }
    },
    created(){
        let db = JSON.parse(localStorage.getItem('dbTask'));
        if(db === null){
            this.tasks = []
        } else {
            this.tasks = db;
        }
    }
});
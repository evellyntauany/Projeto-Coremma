$(function () {
    const todoList = {
        $container: $(".todo-list"),
        $input: $("input:text"),
        $btn: $(".btn-addTask"),

        init: function () {
            this.$input.on("keyup", (e) => {
                let tarefa = this.$input.val();
                if (e.keyCode === 13 && tarefa) {
                    this.adicionarTarefa(tarefa);
                }
            })
            this.$btn.on("onclick", (e) => {
                let tarefa = this.$input.val();
                if (tarefa) {
                    this.adicionarTarefa(tarefa);
                }
            })
            
            
        },

        adicionarTarefa: function (tarefa) {
            alert(tarefa);
        }
    }

    todoList.init();
});
document.addEventListener("DOMContentLoaded", function () {
    // Função para fazer requisição ao backend e preencher a lista de tarefas
    function fetchTodoList() {
        import('node-fetch').then(({ default: fetch }) => {
            fetch('/api/todo')
                .then(response => response.json())
                .then(data => {
                    const todoList = document.getElementById('todo-list');
                    todoList.innerHTML = ''; // Limpa a lista antes de adicionar as novas tarefas
                    data.forEach(todo => {
                        const li = document.createElement('li');
                        li.textContent = todo.task;
                        todoList.appendChild(li);
                    });
                })
                .catch(error => {
                    console.error('Erro ao buscar a lista de tarefas:', error);
                });
        });
    }

    // Chama a função para buscar a lista de tarefas quando a página carregar
    fetchTodoList();
});
   
async function fetchDataAndDisplayTodos() {
  try {
      const response = await fetch('/api/todo');
      const todos = await response.json();
  
      const todoList = document.getElementById('todo-list');
      todos.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = todo.task;
          todoList.appendChild(li);
      });
  } catch (error) {
      console.error('Ocorreu um erro ao buscar ou exibir a lista de tarefas:', error);
  }
}

fetchDataAndDisplayTodos(); // Chamada direta à função para executar o código

// Importar o módulo 'node-fetch' para realizar solicitações HTTP em um ambiente Node.js
const fetch = require('node-fetch');

// Função assíncrona para buscar e exibir a lista de tarefas
async function fetchAndDisplayTodoList() {
  try {
    // Realizar uma solicitação HTTP GET para /api/todo
    const response = await fetch('http://localhost:5000/api/todo');
    // Converter a resposta em JSON
    const todos = await response.json();

    // Exibir a lista de tarefas no console
    console.log('Lista de Tarefas:');
    todos.forEach(todo => {
      console.log(todo.task);
    });
  } catch (error) {
    console.error('Ocorreu um erro ao buscar a lista de tarefas:', error);
  }
}

// Chamar a função fetchAndDisplayTodoList para buscar e exibir a lista de tarefas
fetchAndDisplayTodoList();

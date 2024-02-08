from flask import Flask, jsonify

app = Flask(__name__)

# Dados de exemplo para retornar
data = [
    {"id": 1, "task": "Tarefa 1"},
    {"id": 2, "task": "Tarefa 2"},
    {"id": 3, "task": "Tarefa 3"}
]

@app.route('/api/todo', methods=['GET'])
def get_todo_list():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
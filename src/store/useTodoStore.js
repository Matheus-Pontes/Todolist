import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        titulo: '',
        descricao: '',
        todos: [],
        editingId: null
    }),
    
    actions: {
        setTitulo(v) { this.titulo = v },
        setDescricao(v) { this.descricao = v },
        addTodo() { 
            this.todos.push(
                { 
                    id: Math.random(), 
                    createdDate: Date.now(),
                    isComplete: false,
                    titulo: this.titulo,
                    descricao: this.descricao
                }
            );
            this.setDescricao('');
            this.setTitulo('');
            this.saveTodos();
        },
        completeTodo() {
            const todo = this.todos.find(t => t.id === this.editingId);
            if (todo) {
                todo.isComplete = !todo.isComplete;
                this.saveTodos();
            }
        },
        excludeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveTodos();
        },
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        loadTodos() {
            const saved = localStorage.getItem('todos');
            if (saved) {
                this.todos = JSON.parse(saved);
            }
        },
        getTodo(id) {
            this.editingId = id;
            const todo = this.todos.find(t => t.id === id);
            if (todo) {
                this.setTitulo(todo.titulo);
                this.setDescricao(todo.descricao);
            }
        },
        updateTodo() {
            if (this.editingId) {
                const todo = this.todos.find(t => t.id === this.editingId);
                if (todo) {
                    todo.titulo = this.titulo;
                    todo.descricao = this.descricao;
                    this.saveTodos();
                }
                this.editingId = null;
                this.setTitulo('');
                this.setDescricao('');
            }
        }
    }
})
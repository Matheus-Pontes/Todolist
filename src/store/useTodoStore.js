import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        titulo: '',
        descricao: '',
        todos: []
    }),
    
    actions: {
        setTitulo(v) { this.titulo = v },
        setDescricao(v) { this.Descricao = v },
        saveTodo() { 

        },
        completeTodo() {

        },
        excludeTodo() {

        }
    }

})
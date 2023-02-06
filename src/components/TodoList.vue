<template>

   <div class="flex items-center justify-between gap-4">
        <span class="text-xl flex-1 text-left px-1">Descrição</span>

        <button type="button" class="bg-red-500 rounded px-1 py-4">Excluir todos</button>
   </div>

    <ul>
        <li v-for="todo in listaTodo" class="todo-li">
            
            {{ todo.Descricao }}
            
            <div class="flex items-center justify-between gap-2 ">
                <button class="btn-edit" @click="abrirEdicao = true">
                    Editar
                </button>
                <button class="btn-excluir">
                    Excluir
                </button>
            </div>
        </li>
    </ul>   
    
</template>

<script>

    export default {
        name: 'TodoList',
        props: ['listaTodo'],
        data() {
            return {
                abrirEdicao: false
            }
        },
        mounted() {
            console.log(this.listaTodo)
        }
    }
</script>
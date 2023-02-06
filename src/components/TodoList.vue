<template>

   <div class="flex items-center justify-between gap-4">
        <span class="text-xl flex-1 text-left px-1">Descrição</span>

        <button type="button" class="btn-excluir " @click="listaTodo = []">Excluir todos</button>
   </div>

    <ul>
        <li v-for="todo in listaTodo" class="todo-li">
            
            <span v-if="todo.abrirEdicao == false">{{ todo.Descricao }}</span>    
            
            <input type="text" v-model="novaDescricao" 
                   v-if="todo.abrirEdicao" 
                   class="text-black px-2 py-1"/>

            <div class="flex items-center justify-between gap-2">
                <ButtonAction texto="Editar" estilo="btn-edit" v-if="todo.abrirEdicao == false" @click="todo.abrirEdicao = true"/>
                <ButtonAction texto="Salvar" estilo="btn-edit" v-if="todo.abrirEdicao == true" @click="atualizarValor(todo)"/>
                <ButtonAction texto="Excluir" estilo="btn-excluir" v-if="todo.abrirEdicao == false" @click="excluirToDo(todo.id)"/>
                <ButtonAction texto="Cancelar" estilo="btn-excluir" v-if="todo.abrirEdicao == true" @click="todo.abrirEdicao = false"/>
            </div>
        </li>
    </ul>   
    
</template>

<script>
    import ButtonAction from './ButtonAction.vue';

    export default {
    name: "TodoList",
    props: ["listaTodo"],
    data() {
        return {
            abrirEdicao: false,
            novaDescricao: ""
        };
    },
    methods: {
        excluirToDo(id) {
            let index = this.listaTodo.findIndex(i => i.id == id);
            this.listaTodo.splice(index, 1);
        },
        atualizarValor(todo) {
            if(this.novaDescricao != '')
                todo.Descricao = this.novaDescricao;
            todo.abrirEdicao = false;
        }
    },
    components: { ButtonAction }
}
</script>
<template>
    <div class="h-96 overflow-y-auto overflow-x-hidden p-5">
        <ul >
            <li v-for="todo in listaTodo" class="todo-li" :class="{'todo-disable': todo.concluido}">
                <span v-if="todo.abrirEdicao == false" :class="{'line-through': todo.concluido }" class="text-lg">{{ todo.Descricao }}</span>    
                <input type="text" v-model="novaDescricao" 
                       v-if="todo.abrirEdicao" 
                       class="text-black px-2 py-1"
                />
                <div class="flex items-center justify-between gap-2">
                    <ButtonAction texto="Concluir" estilo="btn-concluir" v-if="todo.abrirEdicao == false && todo.concluido == false" @click="todo.concluido = true"/>
                    <ButtonAction texto="Editar" estilo="btn-edit" v-if="todo.abrirEdicao == false && todo.concluido == false" @click="todo.abrirEdicao = true"/>
                    <ButtonAction texto="Salvar" estilo="btn-edit" v-if="todo.abrirEdicao == true" @click="atualizarValor(todo)"/>
                    <ButtonAction texto="Excluir" estilo="btn-excluir" v-if="todo.abrirEdicao == false" @click="excluirToDo(todo.id)"/>
                    <ButtonAction texto="Cancelar" estilo="btn-excluir" v-if="todo.abrirEdicao == true" @click="todo.abrirEdicao = false"/>
                </div>
            </li>
        </ul>   
    </div>
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
<template>
    <div class="h-96 overflow-y-auto overflow-x-hidden p-5">
        <ul>
            <li v-for="todo in listaTodo" class="todo-li" :class="{ 'todo-disable': todo.concluido }">
                <span v-if="todo.abrirEdicao == false" :class="{ 'line-through': todo.concluido }" class="text-lg">{{
                    todo.Descricao
                }}</span>
                <input type="text" v-model="novaDescricao" v-if="todo.abrirEdicao" class="text-black px-2 py-1" />
                <div class="flex items-center justify-between gap-2">

                    <div class="text-center">
                        <v-menu open-on-click attach>
                            <template v-slot:activator="{ props }"> 
                                <v-btn color="primary" v-bind="props">
                                    Ação
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                    class="hover:bg-gray-500 hover:text-white cursor-pointer transition-all duration-300"
                                    v-for="(item, index) in listaAcoes" :key="index" >

                                    <v-list-item-title 
                                        v-if="validarShowButton(item.id, todo)"
                                        @click="clickAction(item.id, todo)"
                                    >
                                        {{ item.Descricao }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>

                    <!-- <ButtonAction texto="Concluir" estilo="btn-concluir" v-if="todo.abrirEdicao == false && todo.concluido == false" @click="todo.concluido = true"/>
                    <ButtonAction texto="Editar" estilo="btn-edit" v-if="todo.abrirEdicao == false && todo.concluido == false" @click="todo.abrirEdicao = true"/>
                    <ButtonAction texto="Salvar" estilo="btn-edit" v-if="todo.abrirEdicao == true" @click="atualizarValor(todo)"/>
                    <ButtonAction texto="Excluir" estilo="btn-excluir" v-if="todo.abrirEdicao == false" @click="excluirToDo(todo.id)"/>
                    <ButtonAction texto="Cancelar" estilo="btn-excluir" v-if="todo.abrirEdicao == true" @click="todo.abrirEdicao = false"/> -->
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
            novaDescricao: "",
            listaAcoes: [
                {
                    id: 1,
                    Descricao: 'Editar'
                },
                {
                    id: 2,
                    Descricao: 'Concluir'
                },
                {
                    id: 3,
                    Descricao: 'Excluir'
                },
                {
                    id: 4,
                    Descricao: 'Salvar'
                },
                {
                    id: 5,
                    Descricao: 'Cancelar'
                },
            ]
        };
    },
    methods: {
        excluirToDo(id) {
            let index = this.listaTodo.findIndex(i => i.id == id);
            this.listaTodo.splice(index, 1);
        },
        atualizarValor(todo) {
            if (this.novaDescricao != '')
                todo.Descricao = this.novaDescricao;
            todo.abrirEdicao = false;
        },
        validarShowButton(idButton, todo) {
            let condicaoShowButton = false;
            switch (idButton) {
                case 1:
                    condicaoShowButton = todo.abrirEdicao == false && todo.concluido == false ? true : false;
                    break;
                case 2:
                    condicaoShowButton = todo.abrirEdicao == false && todo.concluido == false ? true : false;
                    break;
                case 3:
                    condicaoShowButton = todo.abrirEdicao == false ? true : false;
                    break;
                case 4:
                    condicaoShowButton = todo.abrirEdicao == true ? true : false;
                    break;
                case 5:
                    condicaoShowButton = todo.abrirEdicao == true ? true : false;
                    break;
            }


            return condicaoShowButton;

        },
        clickAction(idButton, todo) {

            switch (idButton) {
                case 1:
                    todo.abrirEdicao = true;
                    break;
                case 2:
                    todo.concluido = true;
                    break;
                case 3:
                    this.excluirToDo(todo.id);
                    break;
                case 4:
                    this.atualizarValor(todo);
                    break;
                case 5:
                    todo.abrirEdicao = false;
                    break;
            }
        }
    },
    components: { ButtonAction }
}
</script>
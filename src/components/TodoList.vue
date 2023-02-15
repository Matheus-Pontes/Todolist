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

                            <v-list >
                                <v-list-item
                                    v-for="item in listaAcoes"
                                    :key="item.id"
                                    :value="item.id"
                                    @click="clickAction(item.id, todo)"
                                    active-color="primary"
                                >
                                    <v-list-item-title v-text="item.descricao">
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
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
                    descricao: 'Editar'
                },
                {
                    id: 2,
                    descricao: 'Concluir'
                },
                {
                    id: 3,
                    descricao: 'Excluir'
                },
                {
                    id: 4,
                    descricao: 'Salvar'
                },
                {
                    id: 5,
                    descricao: 'Cancelar'
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
    computed: {
        listaAcoes() {
            let lista = [];

            this.$props.listaTodo.forEach(todo => {
                this.listaAcoes.map((item, index )=> {
                    if(this.validarShowButton(item.id, todo)){
                        lista.push(item);
                    }
                });
            });

            return lista;
        }
    },
    components: { ButtonAction }
}
</script>
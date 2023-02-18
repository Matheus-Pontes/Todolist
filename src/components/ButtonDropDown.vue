<template>
    <div class="text-center">
        <v-menu open-on-click attach>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    Ação
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="item in listaAcoes" :key="item.id" :value="item.id" @click="clickAction(item.id, todo)"
                    active-color="primary">
                    <v-list-item-title v-text="item.descricao">
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'ButtonDropDown',
    props: ['todo'],
    data() {
        return {
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
                {
                    id: 6,
                    descricao: 'Desmarcar concluído'
                }
            ]
        }
    },
    methods: {
        excluirToDo(id) {
            let index = this.listaTodo.findIndex(i => i.id == id);
            this.listaTodo.splice(index, 1);
        },
        atualizarValor(todo) {
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
                case 6:
                    condicaoShowButton = todo.concluido == true ? true : false;
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
                case 6:
                    todo.concluido = false;
                    break;
            }
        }
    },
    computed: {
        listaAcoes() {
            let lista = [];

            this.listaAcoes.map((item) => {
                if (this.validarShowButton(item.id, this.$props.todo)) {
                    lista.push(item);
                }
            });

            return lista;
        }
    },
}
</script>
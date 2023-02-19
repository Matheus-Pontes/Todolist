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

    <!-- modal de edição -->
    <template>
        <v-row justify="center">
            <v-dialog v-model="dialog" scrollable>
                <v-card theme="dark">

                    <v-card-title>{{ todo.titulo }}</v-card-title>
                    <v-divider></v-divider>

                    <v-card-text style="height: 300px;"> 
                        
                        <div class="flex items-start flex-col">
                            <div class="pb-4">
                                <p for="txtLembrete" class="pb-1">Lembrete</p>
                                <input type="datetime-local" 
                                       name="txtLembrete" 
                                       id="txtLembrete" 
                                       class="outline-none focus:border-2 border-sky-800 rounded-lg p-2" 
                                       v-model="todo.lembrete"
                                />                                
                            </div>

                            <div class="w-full pb-4">
                                <p for="txtTitulo" class="pb-1">Título</p>
                                <input name="txtTitulo" 
                                       id="txtDesctxtTituloricao" 
                                       type="text" 
                                       class="w-full p-2 outline-none focus:border-2 border-sky-800 rounded-lg"
                                       v-model="novoTitulo"
                                       :class="{ 'border-red-500': !novoTitulo } "
                                />
                            </div>

                            <div class="w-full">
                                <p for="txtDescricao" class="pb-1">Descrição</p>
                                <textarea name="txtDescricao" 
                                          id="txtDescricao" 
                                          cols="30" 
                                          rows="5" 
                                          class="resize-y w-full p-2 outline-none focus:border-2 border-sky-800 rounded-lg"
                                          v-model="todo.descricao"
                                ></textarea>
                            </div>
                        </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions class="flex items-center justify-end gap-2">
                        <button class="text-white btn-edit"  @click="salvarEdicao()">
                            Salvar
                        </button>
                        <button class="text-white btn-excluir"  @click="dialog = false">
                            Fechar
                        </button>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </template>

</template>

<script>
export default {
    name: 'ButtonDropDown',
    props: ['todo', 'listaTodo'],
    data() {
        return {
            dialogm1: '',
            dialog: false,
            novoTitulo: this.todo.titulo, 
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
            let index = this.$props.listaTodo.findIndex(i => i.id == id);
            this.$props.listaTodo.splice(index, 1);
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
                    this.dialog = true;
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
        },
        salvarEdicao() {

            if (!this.novoTitulo)
                alert('Preencha o campo obrigatório !!!');
            else
                this.todo.titulo = this.novoTitulo;
            this.dialog = false;

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
<template>
    <div class="text-center">
        <v-menu open-on-click attach>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    Ação
                </v-btn>
            </template>

            <ul class="bg-zinc-700 py-2 rounded-lg">
                <li  v-for="item in listaAcoes" :key="item.id" class="p-2 hover:bg-gray-100 hover:text-zinc-900" @click="clickAction(item.id, todo)">
                    {{ item.descricao }}
                </li>
            </ul>

        </v-menu>
    </div>

    <!-- modal de edição -->
    <template>
        <v-row justify="center">
            <v-dialog v-model="dialog" scrollable class="max-w-2xl">
                <v-card theme="dark" class="bg-zinc-800 ">

                    <v-card-title class="">{{ todo.titulo }}</v-card-title>
                    <v-divider></v-divider>

                    <v-card-text style="height: 300px;"> 
                        
                        <div class="flex items-start flex-col">
                            <div class="pb-4">
                                <p for="txtLembrete" class="pb-1">Lembrete</p>
                                <input type="datetime-local" 
                                       :min="minDateTime"
                                       name="txtLembrete" 
                                       id="txtLembrete" 
                                       class="modal-element-default" 
                                       v-model="todo.lembrete"
                                />                                
                            </div>

                            <div class="w-full pb-4">
                                <p for="txtTitulo" class="pb-1">Título</p>
                                <input name="txtTitulo" 
                                       id="txtDesctxtTituloricao" 
                                       type="text" 
                                       class="modal-element-default"
                                       v-model="todo.titulo"
                                       :class="{ 'border-red-500': !todo.titulo }"
                                />
                            </div>

                            <div class="w-full">
                                <p for="txtDescricao" class="pb-1">Descrição</p>
                                <textarea name="txtDescricao" 
                                          id="txtDescricao" 
                                          cols="30" 
                                          rows="5" 
                                          class="modal-element-default resize-y"
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

            let listaDeTarefasArmazenadas = JSON.parse(localStorage.getItem("listaDeTarefas"));

            let indexLocalStorage = listaDeTarefasArmazenadas.findIndex(i => i.id == id);
            listaDeTarefasArmazenadas.splice(indexLocalStorage, 1);

            localStorage.setItem("listaDeTarefas", JSON.stringify(listaDeTarefasArmazenadas));
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
                    this.atualizarTodo(todo);
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
                    this.atualizarTodo(todo);
                    break;
            }
        },
        salvarEdicao() {

            if (!this.todo.titulo)
                alert('Preencha o campo obrigatório !!!');
            else {
                this.dialog = false;
    
                this.atualizarTodo(this.todo);
            }
        },
        atualizarTodo(todo) {
            let listaDeTarefasArmazenadas = JSON.parse(localStorage.getItem("listaDeTarefas"));
                
            listaDeTarefasArmazenadas.forEach(i => {
                if(i.id == todo.id) {
                    i.titulo = todo.titulo ?? "";
                    i.lembrete = todo.lembrete ?? 0;
                    i.descricao = todo.descricao ?? "";
                    i.concluido = todo.concluido;
                }
            });

            localStorage.setItem("listaDeTarefas", JSON.stringify(listaDeTarefasArmazenadas));
        }
    },
    computed: {
        minDateTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            return `${year}-${month}-${day}T${hours}:${minutes}`;
        },
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
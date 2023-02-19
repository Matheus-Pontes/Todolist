<template>
    <main class="flex flex-col items-center justify-center p-8 px-10 bg-zinc-800 text-white text-center">
        <div class="lg:w-[48rem] md:w-full sm:w-full">
            <div class="flex items-center justify-between gap-4 px-5">
                <input type="text" id="txtToDo" placeholder="Adicione uma tarefa" v-model="tituloInput"
                    class="input-todoList" @keyup.enter="adicionarNaLista()" />
                <button type="button" id="btnAdicionar"
                    class="bg-green-600 rounded p-4 hover:bg-green-800 hover:ease-in-out duration-500"
                    @click="adicionarNaLista()"> Adicionar</button>
            </div>
            <div class="mt-8">
                <div class="flex items-center justify-between gap-4 px-5">
                    <span class="text-xl flex-1 text-left px-1">Título</span>
                    <button type="button" class="btn-excluir " @click="lista = []">Excluir todos</button>
                </div>

                <TodoList :listaTodo="lista" />
            </div>
        </div>
    </main>
</template>

<script>

import TodoList from './components/TodoList.vue';

export default {
    mounted() {

        let permission = Notification.permission;

        if (permission === "granted") {
            showNotification();
        } else if (permission === "default") {
            requestAndShowPermission();
        } else {
            alert("Use normal alert");
        }

        function requestAndShowPermission() {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    showNotification();
                }
            });
        }

        function showNotification() {
            //  if(document.visibilityState === "visible") {
            //      return;
            //  }
            let title = "Valeu pode deixar eu te notificar kk";
            
            let body = "Vamos lembrar você sobre alguma tarefa pendente...";

            let notification = new Notification(title, { body });

            notification.onclick = () => {
                notification.close();
                window.parent.focus();
            }

        }
    },
    components: { TodoList },
    data() {
        return {
            tituloInput: "",
            lista: []
        };
    },
    methods: {
        adicionarNaLista() {
            if (!this.tituloInput)
                alert("OPA OPA !!! NÃO É ASSIM, ME FALE SUA TAREFA !!! ");
            else {
                this.lista.push({
                    id: (this.lista.length - 1) + 1,
                    titulo: this.tituloInput,
                    descricao: "",
                    abrirEdicao: false,
                    concluido: 0,
                    lembrete: ""
                });
                this.tituloInput = "";
            }
        },
        showNotification(titulo, descricao) {
            let notification = new Notification(titulo, { descricao });

            notification.onclick = () => {
                notification.close();
                window.parent.focus();
            }
        },
        async validarSeMandaNotification() {

            this.lista.forEach(todo => {
                let date = new Date();
                if(todo.lembrete == date.getDate()) {
                    this.showNotification(todo.titulo, todo.descricao);
                }
                        
            });
        }
    },
    
}
</script>

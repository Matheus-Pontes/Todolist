<template>
    <main class="flex flex-col items-center justify-center p-8 px-10 bg-zinc-800 text-white text-center">
        <div class="lg:w-[48rem] md:w-full md:px-8 sm:w-full sm: px-8">
            <h1 class="text-2xl py-8 font-bold"> TO DO LIST - VueJS - TailwindCss </h1>
            <div class="flex items-center justify-between gap-4 px-5">
                <input type="text" v-model="descricaoInput" id="txtToDo" class="input-todoList" @keyup.enter="adicionarNaLista()">
                <button type="button" id="btnAdicionar" class="bg-green-600 rounded p-4 hover:bg-green-800 hover:ease-in-out duration-500" @click="adicionarNaLista()"> Adicionar</button>
            </div>
            <div class="mt-8"> 
                <div class="flex items-center justify-between gap-4 px-5">
                    <span class="text-xl flex-1 text-left px-1">Descrição</span>
                    <button type="button" class="btn-excluir " @click="lista = []">Excluir todos</button>
                </div>

                <TodoList :listaTodo="lista"/>
            </div>
        </div>
    </main>
</template>

<script>
    
    import TodoList from './components/TodoList.vue';  
    
    export default {
        components: { TodoList, ButtonDropDown },
        data() {
            return {
                descricaoInput: "",
                lista: []
            };
        },
        methods: {
            adicionarNaLista() {
                if (!this.descricaoInput)
                    alert("Digite algo por favor !!! ");
                else {
                    this.lista.push({ 
                        id: (this.lista.length - 1) + 1, 
                        Descricao: this.descricaoInput,
                        abrirEdicao: false,
                        concluido: 0
                    });
                    this.descricaoInput = "";
                }
            }
        },
    }
</script>

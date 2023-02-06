<script setup>
import TodoList from './components/TodoList.vue';
    
</script>

<template>
    <main class="flex flex-col items-center justify-center p-8 px-10 bg-zinc-800 text-white text-center">
        
        <div class="lg:w-[48rem] md:w-full md:px-8 sm:w-full sm: px-8">
            <h1 class="text-2xl py-8 font-bold"> TO DO LIST - VUEJ - TAILWINDCSS </h1>
    
            <div class="flex items-center justify-between gap-4 ">
                <input type="text" v-model="descricaoInput" id="txtToDo" class="input-todoList">
                <button type="button" id="btnAdicionar" class="bg-green-500 rounded p-4" @click="adicionarNaLista()"> Adicionar</button>
            </div>
            
            <div class="mt-8">
                <TodoList :listaTodo="lista"/>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    components: { TodoList },
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
                this.lista.push({ id: (this.lista.length - 1) + 1, Descricao: this.descricaoInput });
                this.descricaoInput = "";
            }
        }
    },
}

</script>

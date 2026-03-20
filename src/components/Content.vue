<template>
    <main class="flex flex-1 pb-4 px-4">

        <!-- sidebar -->
        <Sidebar />


        <!-- conteúdo -->
        <section class="flex flex-col flex-1 min-w-0 h-full p-8 gap-12">

            <div class="w-full space-y-4">
                <input  
                    id="txtTitulo"
                    v-model="titulo"
                    type="text"
                    placeholder="TÍTULO"
                    maxlength="200"
                    class="w-full max-w-2xl bg-transparent text-white text-4xl focus:outline-none"
                />
                
                <span v-if="titulo.length >= 50" class="block text-blue-600 text-sm">Pra que um título tão grande kkk</span>
            </div>

            <div class="h-full">
                <textarea
                    id="txtDescricao"
                    v-model="descricao"
                    placeholder="Descrição..."
                    class="w-full h-full bg-transparent text-white text-2xl resize-none scrollbar-custom focus:outline-none"
                ></textarea>
            </div>
        </section>

    </main>
</template>

<script setup>
import Sidebar from './Sidebar.vue';

import { ref } from 'vue';

let titulo = ref('');
let descricao = ref('');



</script>
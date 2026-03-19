<template>
    <main class="flex flex-1 overflow-hidden pb-4 px-4">

        <!-- sidebar -->
        <Sidebar />


        <!-- conteúdo -->
        <section class="flex-1 min-w-0 h-full">

            <div class="p-6 space-y-10 h-full">
                <input  
                    type="text"
                    placeholder="TÍTULO"
                    class="w-full p-2 max-w-2xl bg-transparent text-white text-4xl focus:outline-none"
                />

                <textarea
                    id="txtDescricao"
                    placeholder="Descrição..."
                    class="w-full h-full p-2 bg-transparent text-white text-2xl focus:outline-none resize-none max-h-96 overflow-y-auto"
                ></textarea>
                
            </div>

        </section>

    </main>
</template>

<script setup>
import Sidebar from './Sidebar.vue';


</script>
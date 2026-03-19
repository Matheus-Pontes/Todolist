<template>
    <aside class="flex w-64 flex-col border-2 border-t-0 border-green-600 bg-zinc-900 p-2 rounded-br-lg rounded-bl-lg">
    
        <h2 class="flex items-center gap-2 text-lg text-white">
            <PhCircle class="text-blue-500 animate-pulse" size="12" weight="fill"/>
            Ativas
        </h2>

        <div class="flex-1 overflow-y-auto border-t mt-2">
            <div class="p-2"></div>
        </div>

        <h2 class="flex items-center gap-2 text-lg text-white mt-4">
            <PhCheckCircle class="text-green-500 animate-pulse" size="16" weight="fill"/>
            Concluídas
        </h2>

        <div class="flex-1 overflow-y-auto border-t mt-2">  
            <div class="p-2"></div>
        </div>

    </aside>
</template>

<!-- 
// Não precisa de um export para exportar o component se setou o setup ja resolve para chamar o component   
-->
<script setup>
import { PhCheckCircle, PhCircle } from '@phosphor-icons/vue';

</script>
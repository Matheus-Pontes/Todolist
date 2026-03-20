<template>
    <transition name="sidebar">
        <aside
            v-if="menu.isOpen" 
            class="flex w-64 flex-col border-2 border-t-0 border-green-600 bg-zinc-900 p-2 rounded-br-lg rounded-bl-lg">
        
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

    </transition>
</template>

<!-- 
// Não precisa de um export para exportar o component se setou o setup ja resolve para chamar o component   
-->
<script setup>
import { PhCheckCircle, PhCircle } from '@phosphor-icons/vue';
import { menuStore } from '../store/useMenuStore';
import { onMounted, onUnmounted } from 'vue'

const menu = menuStore();


const handleResize = () => {
  if (window.innerWidth < 768) {
    menu.isOpen = false
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
});

</script>

<style scoped>
.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(0px) scale(0.98);
}
.sidebar-enter-to,
.sidebar-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all .2s ease-in-out;
}
</style>
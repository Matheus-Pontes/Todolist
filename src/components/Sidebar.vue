<template>
    <transition name="sidebar">
        <aside
            v-if="menu.isOpen" 
            class="flex w-64 flex-col border-2 border-t-0 border-green-600 bg-zinc-900 p-2 rounded-br-lg rounded-bl-lg">
        
            <h2 class="flex items-center gap-2 text-lg text-white">
                <PhCircle class="text-blue-500 animate-pulse" size="12" weight="fill"/>
                Ativas
            </h2>
    
            <div class="flex-1 overflow-y-auto border-t mt-2 space-y-2">
                <div class="p-2 text-white bg-zinc-700 cursor-pointer hover:bg-zinc-800 transition-all" 
                     v-for="todo in todoActives" :key="todo.id" @click="todoStore.getTodo(todo.id)">
                  
                     <div class="flex items-center justify-between">
                      <span> {{ todo.titulo }}</span>
                      <span>ººº</span>
                     </div>
                  
                </div>

                <div v-if="todoStore.todos.length == 0" class="h-full text-center text-zinc-300 text-lg grid place-content-center">
                  As tarefas ficam ativas por <span class="font-bold text-red-400 text-xl animate-pulse">24hrs</span>
                </div>
            </div>
    
            <h2 class="flex items-center gap-2 text-lg text-white mt-4">
                <PhCheckCircle class="text-green-500 animate-pulse" size="16" weight="fill"/>
                Concluídas
            </h2>
    
            <div class="flex-1 overflow-y-auto border-t mt-2">  
                <div class="p-2 text-white bg-zinc-700 cursor-pointer hover:bg-zinc-800 transition-all" 
                     v-for="todo in todoCompleted" :key="todo.id">
                  
                     <div class="flex items-center justify-between">
                      <span> {{ todo.titulo }}</span>
                      <span>ººº</span>
                     </div>
                  
                </div>
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
import { computed, onMounted, onUnmounted } from 'vue'
import { useTodoStore } from '../store/useTodoStore';

const menu = menuStore();
const todoStore = useTodoStore();


todoStore.loadTodos();

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

const todoActives = computed(() => {
  return todoStore.todos.filter(i => !i.isComplete);
});

const todoCompleted = computed(() => {
  return todoStore.todos.filter(i => i.isComplete);
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
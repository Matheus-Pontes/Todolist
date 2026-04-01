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
                <div class="p-2 text-white bg-zinc-600 cursor-pointer relative hover:bg-zinc-700 transition-all rounded" 
                     v-for="todo in todoActives" :key="todo.id">
                  
                     <div class="flex items-center justify-between">
                      <span @click="todoStore.getTodo(todo.id)" class="w-full">{{ todo.titulo }}</span>
                      <button class="rounded hover:bg-zinc-800" @click="todo.openActions=!todo.openActions">
                        <PhDotsThree size="24"/>
                      </button>  
                    </div>
                    
                    <div v-if="todo.openActions" class="absolute top-9 right-2 z-10 p-2 flex flex-col gap-2 bg-zinc-700 rounded shadow-sm shadow-zinc-600">
                      <button class="w-full" @click="todoStore.completeTodo(todo.id)">
                          <PhCheckCircle size="24" class="text-green-400 transition-all delay-100 hover:text-green-500" /></button>
                      <button class="w-full" @click="todoStore.excludeTodo(todo.id)">
                        <PhTrash size="24" class="text-red-400 transition-all delay-100  hover:text-red-500" />
                      </button>
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
    
            <div class="flex-1 overflow-y-auto border-t mt-2 space-y-2">  
                <div class="p-2 text-white bg-zinc-700 cursor-pointer hover:bg-zinc-800 transition-all opacity-50 rounded" 
                     v-for="todo in todoCompleted" :key="todo.id">
                  
                      <span class="line-through"> {{ todo.titulo }}</span>
                </div>
            </div>
    
        </aside>

    </transition>
</template>

<!-- 
// Não precisa de um export para exportar o component se setou o setup ja resolve para chamar o component   
-->
<script setup>
import { PhCheckCircle, PhCircle, PhDotsThree, PhTrash } from '@phosphor-icons/vue';
import { menuStore } from '../store/useMenuStore';
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useTodoStore } from '../store/useTodoStore';

let abrirActions = ref(false);
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
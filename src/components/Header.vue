<template>
    <header class="w-full flex items-center justify-between pt-4 px-4">

        <div class="w-64 flex items-center gap-2 justify-between border-2 border-green-600 border-b-0 p-2 bg-zinc-900 rounded-tr-lg rounded-tl-lg">
            <h1 class="text-xl text-white">
                TodoFocus
            </h1>

            <button type="button" class="text-white" @click="menu.toogleMenu()">
                <PhX size="16"/>
            </button>
        </div>

        <div class="flex items-center justify-end flex-1">  
            <div class="p-3 text-white rounded-full border-2 border-green-600 flex gap-2 items-center bg-zinc-900">
                <button v-if="!ocultarActions" @click="todo.completeTodo">
                    <PhCheckCircle size="24" class="transition-all delay-100 hover:text-green-500"/>
                </button>

                <button @click="todo.addTodo()" v-if="!todo.editingId">
                    <PhFloppyDisk size="24" class="transition-all delay-100 hover:text-blue-500" />
                </button>

                <button @click="todo.updateTodo" v-if="todo.editingId">
                    <PhFloppyDisk size="24" class="transition-all delay-100 hover:text-blue-500" />
                </button>

                <button v-if="!ocultarActions">
                    <PhTrash size="24" class="transition-all delay-100 hover:text-red-500" />
                </button>
            </div>
        </div>

    </header>
</template>

<script setup>
import { PhCheckCircle, PhCircle,  PhFloppyDisk, PhTrash, PhX } from '@phosphor-icons/vue';
import { menuStore } from '../store/useMenuStore';
import { useTodoStore } from '../store/useTodoStore';
import { computed, onMounted, onUnmounted, ref } from 'vue'

const menu = menuStore();
const todo = useTodoStore();

let ocultarActions = ref(false);

const handleResize = () => {
    ocultarActions.value = false;
    if (window.innerWidth < 768) {
        console.log('mudar');
        
        ocultarActions.value = true;
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